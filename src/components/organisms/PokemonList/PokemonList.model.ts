import type { PokemonList } from '../../../core/pokedex/pokemon/domain/models/pokemonList.model';
import type { getListOfPokemonAction } from '../../../core/pokedex/pokemon/domain/useCases/getPokemonList.useCase';
import type { AsyncThunkStatus } from '../../../core/shared/asyncThunkStatus.model';

export type PokemonListMapDispatchToProps = {
	fetchPokemons: typeof getListOfPokemonAction;
};

export type PokemonListMapStateToProps = {
	pokemons: PokemonList;
	status: AsyncThunkStatus;
};
