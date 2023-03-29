import type { PokemonDetails } from '../models/pokemonDetails.model';

export interface PokemonDetailsRepository {
	getPokemonDetails(idPokedex: number): Promise<PokemonDetails>;
}
