export interface PokemonListRepository {
    getPokemonList(): Promise<PokemonList>;
}