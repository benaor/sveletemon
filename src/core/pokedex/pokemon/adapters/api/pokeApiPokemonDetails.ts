import type { PokemonDetailsRepository } from '../../domain/gateways/pokemonDetails.repository';
import type { Pokemon } from '../../domain/models/pokemon.model';
import { pokeApiDetailsMapper } from './pokeApiMapper';

export class pokeApiPokemonDetails implements PokemonDetailsRepository {
	getPokemonDetails = (id: Pokemon['pokedexId']) =>
		fetch(`https://api-pokemon-fr.vercel.app/api/v1/pokemon/${id}`, {
			method: 'GET'
		})
			.then((res) => res.json())
			.then(pokeApiDetailsMapper);
}
