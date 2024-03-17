import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from './users';
import commentsReducer from './comments';
import rolesReducer from './roles';
import attributesReducer from './attributes';
import abilitiesReducer from './abilities';
import typesReducer from './type';
import rolesInfoReducer from './roles-info';

const rootReducer = combineReducers({
    users: usersReducer,
    comments: commentsReducer,
    roles: rolesReducer,
    rolesInfo: rolesInfoReducer,
    attributes: attributesReducer,
    abilities: abilitiesReducer,
    types: typesReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
