// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { connect } from 'svelte-redux-connect';
import {
	pokemonListSelector,
	pokemonListStatusSelector
} from '../../../core/pokedex/pokemon/application/pokemonList.selector';
import { getListOfPokemon } from '../../../core/pokedex/pokemon/domain/useCases/getPokemonList.useCase';
import type { AppDispatch, RootState } from '../../../core/store';
import PokemonList from './PokemonList.svelte';

const mapStateToProps = (state: RootState) => ({
	pokemons: pokemonListSelector(state),
	fetchPokemonsStatus: pokemonListStatusSelector(state)
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	fetchPokemons: () => dispatch(getListOfPokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
