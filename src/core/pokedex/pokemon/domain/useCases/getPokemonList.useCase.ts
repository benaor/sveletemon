import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch, AsyncThunkExtraArgs } from '../../../../store';
import type { PokemonList } from '../models/pokemonList.model';
import * as E from 'fp-ts/lib/Either';
import * as TE from 'fp-ts/lib/TaskEither';

export const getListOfPokemon = createAsyncThunk<PokemonList, void, AsyncThunkExtraArgs>(
	`pokemonList/getPokemonList`,
	async (_, { extra }) => {
		const fetchList = () => extra.pokemonListRepository.getPokemonList();
		const pokemonList = TE.tryCatch<Error, PokemonList>(fetchList, E.toError);
		const res = await pokemonList();

		if (E.isLeft(res)) throw res.left;

		return res.right;
	}
);

export const getListOfPokemonAction = () => (dispatch: AppDispatch) => {
	dispatch(getListOfPokemon());
};
