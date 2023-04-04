<script lang="ts">
	import { onMount } from 'svelte';
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
		{#each pokemons as pokemon (pokemon.pokedexId)}
			<li>
				<a href={'/pokemon/' + pokemon.pokedexId}>
					{pokemon.name.fr}
				</a>
			</li>
		{/each}
	{/if}
</div>
