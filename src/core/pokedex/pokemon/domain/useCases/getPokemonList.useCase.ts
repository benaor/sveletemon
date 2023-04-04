import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch, ThunkExtraArgument } from '../../../../store';
import type { PokemonListState } from '../models/pokemonList.model';

export const getListOfPokemon = createAsyncThunk<
	PokemonListState['data'],
	undefined,
	{ extra: ThunkExtraArgument }
>(`pokemonList/getPokemonList`, async (_, { extra }) => {
	const pokemonList = await extra.pokemonListRepository.getPokemonList();
	return pokemonList;
});

export const getListOfPokemonAction = () => (dispatch: AppDispatch) => {
	dispatch(getListOfPokemon());
};
