import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkExtraArgument } from '../../../../store';
import type { PokemonDetailsState } from '../models/pokemon.model';

export const getPokemonDetails = createAsyncThunk<
	PokemonDetailsState['data'],
	number,
	{ extra: ThunkExtraArgument }
>(`pokemonDetails/getPokemonDetails`, async (idPokedex: number, { extra }) => {
	const pokemonDetails = await extra.pokemonDetailsRepository.getPokemonDetails(idPokedex);
	return pokemonDetails;
});
