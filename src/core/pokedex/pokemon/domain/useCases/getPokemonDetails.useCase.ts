import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch, AsyncThunkExtraArgs } from '../../../../store';
import type { Pokemon } from '../models/pokemon.model';
import * as E from 'fp-ts/lib/Either';

export const getPokemonDetails = createAsyncThunk<Pokemon, number, AsyncThunkExtraArgs>(
	`pokemonDetails/getPokemonDetails`,
	async (idPokedex: number, { extra }) => {
		const fetchPokemon = extra.pokemonDetailsRepository.getPokemonDetails(idPokedex);

		const result = await fetchPokemon();

		if (E.isLeft(result)) throw result.left;
		return result.right;
	}
);

export const getPokemonDetailsAction = (idPokedex: number) => (dispatch: AppDispatch) =>
	dispatch(getPokemonDetails(idPokedex));
