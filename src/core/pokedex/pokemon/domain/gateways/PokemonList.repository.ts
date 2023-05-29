import type { PokemonList } from '../models/pokemonList.model';

export interface PokemonListRepository {
	getPokemonList(): Promise<PokemonList>;
}
