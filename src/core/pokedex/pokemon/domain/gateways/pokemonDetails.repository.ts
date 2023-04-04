import type { Pokemon } from '../models/pokemon.model';

export interface PokemonDetailsRepository {
	getPokemonDetails(idPokedex: number): Promise<Pokemon>;
}
