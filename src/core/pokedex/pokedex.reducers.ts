import { combineReducers } from '@reduxjs/toolkit';
import { pokemonDetailsReducer as pokemonDetails } from './pokemonDetails/domain/useCases/pokemonDetails.slice';

export const PokedexReducer = combineReducers({
	pokemonDetails
});
