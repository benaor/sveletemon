import type { Pokemon } from '../../../core/pokedex/pokemon/domain/models/pokemon.model';
import type { getPokemonDetailsAction } from '../../../core/pokedex/pokemon/domain/useCases/getPokemonDetails.useCase';
import type { AsyncThunkStatus } from '../../../core/shared/asyncThunkStatus.model';

export type PokemonDetailsMapDispatchToProps = {
	fetchDetails: typeof getPokemonDetailsAction;
};

export type PokemonDetailsMapStateToProps = {
	pokemon: Pokemon;
	status: AsyncThunkStatus;
};

export type PokemonDetailsOwnProps = {
	id: Pokemon['pokedexId'];
};
