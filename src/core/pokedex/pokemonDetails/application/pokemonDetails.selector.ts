import { ReducersNames } from '../../../constants';
import type { RootState } from '../../../store';

export const pokemonDetailsSelector = (state: RootState) =>
	state[ReducersNames.POKEDEX].pokemonDetails.data;

export const pokemonDetailsStatusSelector = (state: RootState) =>
	state[ReducersNames.POKEDEX].pokemonDetails.status;
