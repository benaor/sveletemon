import type { Pokemon } from '../../domain/models/pokemon.model';
import type { PokemonList } from '../../domain/models/pokemonList.model';
import type { PokemonFromPokeApi, PokemonListFromPokeApi } from './pokeApi.model';

export const pokeApiListMapper = (pokemonListFromPokeApi: PokemonListFromPokeApi): PokemonList =>
	pokemonListFromPokeApi.map((pokemon) => ({
		...pokemon
	}));

export const pokeApiDetailsMapper = (pokemonDetailsFromPokeApi: PokemonFromPokeApi): Pokemon => ({
	...pokemonDetailsFromPokeApi
});
