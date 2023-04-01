import { combineReducers } from '@reduxjs/toolkit';
import { pokemonDetailsReducer as pokemonDetails } from './pokemon/domain/useCases/pokemonDetails.slice';
import { pokemonListReducer as pokemonList } from './pokemon/domain/useCases/pokemonList.slice';

export const PokedexReducer = combineReducers({
	pokemonDetails,
	pokemonList
});
