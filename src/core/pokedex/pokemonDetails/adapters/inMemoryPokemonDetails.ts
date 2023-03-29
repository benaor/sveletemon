import type { PokemonDetailsRepository } from '../domain/gateways/pokemonDetails.repository';
import type { PokemonDetails } from '../domain/models/pokemonDetails.model';
import { bulbizarre, pikachu } from '../__tests__/fakes/pokemon.fake';

export class inMemoryPokemonDetails implements PokemonDetailsRepository {
	pokemons: PokemonDetails[] = [pikachu, bulbizarre];

	async getPokemonDetails(idPokedex: number): Promise<PokemonDetails> {
		const pokemon = this.pokemons.find((pokemon) => pokemon.pokedexId === idPokedex);
		return pokemon ? Promise.resolve(pokemon) : Promise.reject();
	}
}
