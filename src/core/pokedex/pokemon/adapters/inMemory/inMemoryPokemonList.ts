import type { PokemonListRepository } from '../../domain/gateways/PokemonList.repository';
import type { PokemonList } from '../../domain/models/pokemonList.model';
import { listOfPokemon } from '../../__tests__/fakes/listOfPokemon.fake';

export class inMemoryPokemonList implements PokemonListRepository {
	getPokemonList(): Promise<PokemonList> {
		return Promise.resolve(listOfPokemon);
	}
}
