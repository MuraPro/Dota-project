import { createSlice } from '@reduxjs/toolkit';
import isOutdated from '../utils/isOutdated';
import roleService from '../services/role.service';

const rolesSlice = createSlice({
    name: 'roles',
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null,
    },
    reducers: {
        rolesRequested: (state) => {
            state.isLoading = true;
        },
        rolesReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        rolesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

const { reducer: rolesReducer, actions } = rolesSlice;
const { rolesRequested, rolesReceived, rolesRequestFailed } = actions;

export const loadRolesList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().roles;
    if (isOutdated(lastFetch)) {
        dispatch(rolesRequested());
        try {
            const { content } = await roleService.fetchAll();
            dispatch(rolesReceived(content));
        } catch (error) {
            dispatch(rolesRequestFailed(error.message));
        }
    }
};

export const getRoles = () => (state) => state.roles.entities;
export const getRolesLoadingStatus = () => (state) => state.roles.isLoading;

export default rolesReducer;
