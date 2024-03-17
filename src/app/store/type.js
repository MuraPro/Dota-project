import { createAction, createSlice } from '@reduxjs/toolkit';
import isOutdated from '../utils/isOutdated';
import typesService from '../services/types.service';

const typesSlice = createSlice({
    name: 'type',
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null,
    },
    reducers: {
        typesRequested: (state) => {
            state.isLoading = true;
        },
        typesReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        typesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        typeCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        typeUpdateRequested: (state) => {
            state.isLoading = true;
        },
        typeUpdateSuccessed: (state, action) => {
            state.isLoading = false;
            state.entities[
                state.entities.findIndex((t) => t._id === action.payload._id)
            ] = action.payload;
        },
    },
});

const { reducer: typesReducer, actions } = typesSlice;
const {
    typesRequested,
    typesReceived,
    typesRequestFailed,
    typeCreated,
    typeUpdateRequested,
    typeUpdateSuccessed,
} = actions;

const typeUpdateFailed = createAction('types/typesUpdateFailed');
const typeCreateRequested = createAction('types/typesCreateRequested');
const createTypesFailed = createAction('types/createTypesFailed');

export const loadTypesList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().types;
    if (isOutdated(lastFetch)) {
        dispatch(typesRequested());
        try {
            const { content } = await typesService.fetchAll();
            dispatch(typesReceived(content));
        } catch (error) {
            dispatch(typesRequestFailed(error.message));
        }
    }
};

export const updateType = (payload, id) => async (dispatch) => {
    dispatch(typeUpdateRequested());
    try {
        const { content } = await typesService.updateType(payload, id);
        dispatch(typeUpdateSuccessed(content));
        // history.push(`/users/${content._id}`);
    } catch (error) {
        dispatch(typeUpdateFailed(error.message));
    }
};

export function createType(payload) {
    return async function (dispatch) {
        dispatch(typeCreateRequested());
        try {
            const { content } = await typesService.createType(payload);
            dispatch(typeCreated(content));
            // history.push('/users');
        } catch (error) {
            dispatch(createTypesFailed(error.message));
        }
    };
}

export const getTypes = () => (state) => state.types.entities;
export const getTypesLoadingStatus = () => (state) => state.types.isLoading;

export default typesReducer;
