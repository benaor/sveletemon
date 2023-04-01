import { createSlice, type Slice } from '@reduxjs/toolkit';
import type { PokemonListState } from '../models/pokemonList.model';
import { getListOfPokemon } from './getPokemonList.useCase';

export const POKEMON_LIST_NAME = 'pokemonList';

export const initialState: PokemonListState = {
	data: undefined,
	status: 'idle'
};

const pokemonListSlice: Slice = createSlice({
	name: POKEMON_LIST_NAME,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getListOfPokemon.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = 'succeeded';
			})
			.addCase(getListOfPokemon.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getListOfPokemon.rejected, (state) => {
				state.data = undefined;
				state.status = 'failed';
			});
	}
});

export const pokemonListReducer = pokemonListSlice.reducer;
