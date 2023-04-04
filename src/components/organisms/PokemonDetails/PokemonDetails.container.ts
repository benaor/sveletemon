//@ts-ignore because svelte-redux-connect haven't a types file
import { connect } from 'svelte-redux-connect';
import PokemonDetails from './PokemonDetails.svelte';
import {
	pokemonDetailsSelector,
	pokemonDetailsStatusSelector
} from '../../../core/pokedex/pokemon/application/pokemonDetails.selector';
import { getPokemonDetailsAction } from '../../../core/pokedex/pokemon/domain/useCases/getPokemonDetails.useCase';
import type { RootState } from '../../../core/store';
import type {
	PokemonDetailsMapDispatchToProps,
	PokemonDetailsMapStateToProps
} from './PokemonDetails.model';

const mapStateToProps = (state: RootState): PokemonDetailsMapStateToProps => ({
	pokemon: pokemonDetailsSelector(state),
	status: pokemonDetailsStatusSelector(state)
});

const mapDispatchToProps: PokemonDetailsMapDispatchToProps = {
	fetchDetails: getPokemonDetailsAction
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
