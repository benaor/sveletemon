import type { Selector } from '@reduxjs/toolkit';
import type { AsyncThunkStatus } from '../../../shared/asyncThunkStatus.model';
import type { RootState } from '../../../store';
import type { PokemonList } from '../domain/models/pokemonList.model';

export const pokemonListSelector: Selector<RootState, PokemonList> = (state: RootState) =>
	state.pokedex.pokemonList.data;

export const pokemonListStatusSelector: Selector<RootState, AsyncThunkStatus> = (
	state: RootState
) => state.pokedex.pokemonList.status;
