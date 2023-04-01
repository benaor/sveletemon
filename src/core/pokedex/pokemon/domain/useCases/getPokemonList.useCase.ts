import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkExtraArgument } from '../../../../store';
import type { PokemonListState } from '../models/pokemonList.model';
import { POKEMON_LIST_NAME } from './pokemonList.slice';

export const getListOfPokemon = createAsyncThunk<
	PokemonListState['data'],
	undefined,
	{ extra: ThunkExtraArgument }
>(`${POKEMON_LIST_NAME}/getPokemonList`, async (_, { extra }) => {
	const pokemonList = await extra.pokemonListRepository.getPokemonList();
	return pokemonList;
});
