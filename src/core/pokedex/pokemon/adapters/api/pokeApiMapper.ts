import type { PokemonList } from '../../domain/models/pokemonList.model';
import type { PokemonListFromPokeApi } from './pokeApi.model';

export const pokeApiMapper = (pokemonListFromPokeApi: PokemonListFromPokeApi): PokemonList => {
	const pokemonList: PokemonList = pokemonListFromPokeApi.map((pokemon) => ({
		...pokemon
	}));

	return pokemonList;
};
