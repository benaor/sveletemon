import type { Selector } from '@reduxjs/toolkit';
import type { AsyncThunkStatus } from '../../../shared/asyncThunkStatus.model';
import type { RootState } from '../../../store';
import type { PokemonList } from '../domain/models/pokemonList.model';

export const pokemonListSelector: Selector = (state: RootState): PokemonList =>
	state.pokedex.pokemonList.data;

export const pokemonListStatusSelector: Selector = (state: RootState): AsyncThunkStatus =>
	state.pokedex.pokemonList.status;
