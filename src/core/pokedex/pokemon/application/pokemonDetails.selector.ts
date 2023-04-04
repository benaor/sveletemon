import type { Selector } from '@reduxjs/toolkit';
import { ReducersNames } from '../../../constants';
import type { AsyncThunkStatus } from '../../../shared/asyncThunkStatus.model';
import type { RootState } from '../../../store';
import type { Pokemon } from '../domain/models/pokemon.model';

export const pokemonDetailsSelector: Selector<RootState, Pokemon> = (state: RootState) =>
	state[ReducersNames.POKEDEX].pokemonDetails.data;

export const pokemonDetailsStatusSelector: Selector<RootState, AsyncThunkStatus> = (
	state: RootState
) => state[ReducersNames.POKEDEX].pokemonDetails.status;
