<script lang="ts">
	import { onMount } from 'svelte';
	import InsightPokemon from '../../molecules/InsightPokemon.svelte';
	import type {
		PokemonListMapDispatchToProps,
		PokemonListMapStateToProps
	} from './PokemonList.model';

	export let fetchPokemons: PokemonListMapDispatchToProps['fetchPokemons'];
	export let pokemons: PokemonListMapStateToProps['pokemons'];
	export let status: PokemonListMapStateToProps['status'];

	onMount(() => {
		fetchPokemons();
	});
</script>

<div>
	<h1>Liste des pokemons</h1>

	{#if status === 'loading'}
		<p>Chargement en cours...</p>
	{:else if status === 'failed'}
		<p>Une erreur est survenue</p>
	{:else if status === 'succeeded' && pokemons}
		<div class="pokemon-insight-list">
			{#each pokemons as pokemon (pokemon.pokedexId)}
				<InsightPokemon {pokemon} />
			{/each}
		</div>
	{/if}
</div>

<style>
	.pokemon-insight-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-template-rows: auto;
		grid-gap: 30px;
	}
</style>
