import type { TaskEither } from 'fp-ts/lib/TaskEither';
import type { Pokemon } from '../models/pokemon.model';

export type PokemonDetailsRepository = {
	getPokemonDetails(idPokedex: number): TaskEither<Error, Pokemon>;
};
