import type { PokemonDetailsRepository } from '../../domain/gateways/pokemonDetails.repository';
import type { Pokemon } from '../../domain/models/pokemon.model';
import { bulbizarre, pikachu } from '../../__tests__/fakes/pokemon.fake';

export class inMemoryPokemonDetails implements PokemonDetailsRepository {
	pokemons: Pokemon[] = [pikachu, bulbizarre];

	async getPokemonDetails(idPokedex: number): Promise<Pokemon> {
		const pokemon = this.pokemons.find((pokemon) => pokemon.pokedexId === idPokedex);
		return pokemon ? Promise.resolve(pokemon) : Promise.reject();
	}
}
