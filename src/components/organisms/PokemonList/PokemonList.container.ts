// @ts-ignore because svelte-redux-connect haven't a types file
import { connect } from 'svelte-redux-connect';
import {
	pokemonListSelector,
	pokemonListStatusSelector
} from '../../../core/pokedex/pokemon/application/pokemonList.selector';
import { getListOfPokemonAction } from '../../../core/pokedex/pokemon/domain/useCases/getPokemonList.useCase';
import type { RootState } from '../../../core/store';
import type {
	PokemonListMapDispatchToProps,
	PokemonListMapStateToProps
} from './PokemonList.model';
import PokemonList from './PokemonList.svelte';

const mapStateToProps = (state: RootState): PokemonListMapStateToProps => ({
	pokemons: pokemonListSelector(state),
	status: pokemonListStatusSelector(state)
});

const mapDispatchToProps: PokemonListMapDispatchToProps = {
	fetchPokemons: getListOfPokemonAction
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
