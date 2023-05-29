import type { PokemonDetailsRepository } from '../../domain/gateways/pokemonDetails.repository';
import type { Pokemon } from '../../domain/models/pokemon.model';
import { pokeApiDetailsMapper } from './pokeApiMapper';
import * as TE from 'fp-ts/lib/TaskEither';
import * as E from 'fp-ts/lib/Either';

export const pokeApiPokemonDetails: PokemonDetailsRepository = {
	getPokemonDetails: (id: Pokemon['pokedexId']) => {
		const req = () =>
			fetch(`https://api-pokemon-fr.vercel.app/api/v1/pokemon/${id}`, {
				method: 'GET'
			})
				.then((res) => res.json())
				.then(pokeApiDetailsMapper);

		return TE.tryCatch(req, E.toError);
	}
};
