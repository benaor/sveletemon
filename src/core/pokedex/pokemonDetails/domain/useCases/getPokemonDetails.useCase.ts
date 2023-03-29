import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkExtraArgument } from '../../../../store';
import type { PokemonDetailsState } from '../models/pokemonDetails.model';
import { POKEMON_DETAILS_NAME } from './pokemonDetails.slice';

export const getPokemonDetails = createAsyncThunk<
	PokemonDetailsState['data'],
	number,
	{ extra: ThunkExtraArgument }
>(`${POKEMON_DETAILS_NAME}/getPokemonDetails`, async (idPokedex: number, { extra }) => {
	const pokemonDetails = await extra.repositories.pokemonDetailsRepository.getPokemonDetails(
		idPokedex
	);
	return pokemonDetails;
});
