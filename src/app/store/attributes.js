import { createSlice } from '@reduxjs/toolkit';
import attributeService from '../services/attribute.service';
import isOutdated from '../utils/isOutdated';

const attributeSlice = createSlice({
    name: 'attributes',
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null,
    },
    reducers: {
        attributesRequested: (state) => {
            state.isLoading = true;
        },
        attributesReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        attributesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

const { reducer: attributesReducer, actions } = attributeSlice;
const { attributesRequested, attributesReceived, attributesRequestFailed } =
    actions;

export const loadAttributesList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().attributes;
    if (isOutdated(lastFetch)) {
        dispatch(attributesRequested());
        try {
            const { content } = await attributeService.fetchAll();
            dispatch(attributesReceived(content));
        } catch (error) {
            dispatch(attributesRequestFailed(error.message));
        }
    }
};

export const getAttributes = () => (state) => state.attributes.entities;
export const getAttributesLoadingStatus = () => (state) =>
    state.attributes.isLoading;

export default attributesReducer;
