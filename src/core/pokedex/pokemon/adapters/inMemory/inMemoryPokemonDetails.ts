import type { PokemonDetailsRepository } from '../../domain/gateways/pokemonDetails.repository';
import { bulbizarre, pikachu } from '../../__tests__/fakes/pokemon.fake';
import * as TE from 'fp-ts/lib/TaskEither';
import * as E from 'fp-ts/lib/Either';

export const inMemoryPokemonDetails: PokemonDetailsRepository = {
	getPokemonDetails(idPokedex: number) {
		const pokemons = [pikachu, bulbizarre];
		return TE.tryCatch(() => {
			const pokemon = pokemons.find((pokemon) => pokemon.pokedexId === idPokedex);
			if (!pokemon) throw new Error(`Pokemon with pokedexId ${idPokedex} not found`);
			return Promise.resolve(pokemon);
		}, E.toError);
	}
};
