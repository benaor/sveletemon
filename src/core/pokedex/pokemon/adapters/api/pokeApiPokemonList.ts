import type { PokemonListRepository } from '../../domain/gateways/PokemonList.repository';
import type { PokemonList } from '../../domain/models/pokemonList.model';
import { pokeApiMapper } from './pokeApiMapper';

export class pokeApiPokemonList implements PokemonListRepository {
	getPokemonList = (): Promise<PokemonList> =>
		fetch('https://api-pokemon-fr.vercel.app/api/v1/pokemon', {
			method: 'GET'
		})
			.then((res) => res.json())
			.then(pokeApiMapper);
}
