import { createAction, createSlice } from '@reduxjs/toolkit';
import abilitiesService from '../services/abilities.service';
import isOutdated from '../utils/isOutdated';

const abilitiesSlice = createSlice({
    name: 'abilities',
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null,
    },
    reducers: {
        abilitiesRequested: (state) => {
            state.isLoading = true;
        },
        abilitiesReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        abilitiesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        abilityCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        abilityUpdateRequested: (state) => {
            state.isLoading = true;
        },
        abilityUpdateSuccessed: (state, action) => {
            state.isLoading = false;
            state.entities[
                state.entities.findIndex((a) => a._id === action.payload._id)
            ] = action.payload;
        },
    },
});

const { reducer: abilitiesReducer, actions } = abilitiesSlice;
const {
    abilitiesRequested,
    abilitiesReceived,
    abilitiesRequestFailed,
    abilityCreated,
    abilityUpdateSuccessed,
    abilityUpdateRequested,
} = actions;

// const abilityUpdateRequested = createAction(
//     'abilities/abilitiesUpdateRequested'
// );
const abilityUpdateFailed = createAction('abilities/abilitiesUpdateFailed');
const abilityCreateRequested = createAction(
    'abilities/abilitiesCreateRequested'
);
const createAbilityFailed = createAction('abilities/createAbilitiesFailed');

export const loadAbilitiesList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().abilities;
    if (isOutdated(lastFetch)) {
        dispatch(abilitiesRequested());
        try {
            const { content } = await abilitiesService.fetchAll();
            dispatch(abilitiesReceived(content));
        } catch (error) {
            dispatch(abilitiesRequestFailed(error.message));
        }
    }
};

export const updateAbility = (payload, id) => async (dispatch) => {
    dispatch(abilityUpdateRequested());
    try {
        const { content } = await abilitiesService.updateAbility(payload, id);
        dispatch(abilityUpdateSuccessed(content));
        // history.push(`/users/${content._id}`);
    } catch (error) {
        dispatch(abilityUpdateFailed(error.message));
    }
};

export function createAbility(payload) {
    return async function (dispatch) {
        dispatch(abilityCreateRequested());
        try {
            const { content } = await abilitiesService.createAbility(payload);
            dispatch(abilityCreated(content));
            // history.push('/users');
        } catch (error) {
            dispatch(createAbilityFailed(error.message));
        }
    };
}

export const getAbilities = () => (state) => state.abilities.entities;
export const getAbilitiesLoadingStatus = () => (state) =>
    state.abilities.isLoading;

export default abilitiesReducer;
