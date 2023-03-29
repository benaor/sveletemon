import { combineReducers } from '@reduxjs/toolkit';
import { PokedexReducer } from './pokedex/pokedex.reducers';

export const rootReducer = combineReducers({
	pokedex: PokedexReducer
});
