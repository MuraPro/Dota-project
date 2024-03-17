import { createSlice } from '@reduxjs/toolkit';
import isOutdated from '../utils/isOutdated';
import rolesService from '../services/roles.service';

const rolesInfoSlice = createSlice({
    name: 'rolesInfo',
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null,
    },
    reducers: {
        rolesInfoRequested: (state) => {
            state.isLoading = true;
        },
        rolesInfoReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        rolesInfoRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

const { reducer: rolesInfoReducer, actions } = rolesInfoSlice;
const { rolesInfoRequested, rolesInfoReceived, rolesInfoRequestFailed } =
    actions;

export const loadRolesInfoList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().rolesInfo;
    if (isOutdated(lastFetch)) {
        dispatch(rolesInfoRequested());
        try {
            const { content } = await rolesService.fetchAll();
            dispatch(rolesInfoReceived(content));
        } catch (error) {
            dispatch(rolesInfoRequestFailed(error.message));
        }
    }
};

export const getRolesInfo = () => (state) => state.rolesInfo.entities;
export const getRolesInfoLoadingStatus = () => (state) =>
    state.rolesInfo.isLoading;

export default rolesInfoReducer;
