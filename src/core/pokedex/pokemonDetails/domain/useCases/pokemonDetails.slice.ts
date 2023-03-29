import { createSlice, type Slice } from '@reduxjs/toolkit';
import type { PokemonDetailsState } from '../models/pokemonDetails.model';
import { getPokemonDetails } from './getPokemonDetails.useCase';

export const initialState: PokemonDetailsState = {
	data: undefined,
	status: 'idle'
};

export const POKEMON_DETAILS_NAME = 'pokemonDetails';

export const pokemonDetailsSlice: Slice = createSlice({
	name: POKEMON_DETAILS_NAME,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPokemonDetails.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getPokemonDetails.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = 'succeeded';
			})
			.addCase(getPokemonDetails.rejected, (state) => {
				state.data = undefined;
				state.status = 'failed';
			});
	}
});

export const pokemonDetailsReducer = pokemonDetailsSlice.reducer;
export const pokemonDetailsActions = pokemonDetailsSlice.actions;
