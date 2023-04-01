import type { AsyncThunkStatus } from '../../../../shared/asyncThunkStatus.model';
import type { Pokemon } from './pokemon.model';

export type PokemonListState = {
	data?: PokemonList;
	status: AsyncThunkStatus;
};

export type PokemonList = Pokemon[];
