import type { Selector } from '@reduxjs/toolkit';
import type { RootState } from '../../../store';

export const pokemonListSelector: Selector = (state: RootState) => state.pokedex.pokemonList.data;

export const pokemonListStatusSelector: Selector = (state: RootState) =>
	state.pokedex.pokemonList.status;
