import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkExtraArgument } from '../../../../store';
import type { PokemonListState } from '../models/pokemonList.model';

export const getListOfPokemon = createAsyncThunk<
	PokemonListState['data'],
	undefined,
	{ extra: ThunkExtraArgument }
>(`pokemonList/getPokemonList`, async (_, { extra }) => {
	console.log('getListOfPokemon');
	const pokemonList = await extra.pokemonListRepository.getPokemonList();
	return pokemonList;
});
