<script lang="ts">
	import { onMount } from 'svelte';
	import type { PokemonList } from '../../../core/pokedex/pokemon/domain/models/pokemonList.model';
	import type { AsyncThunkStatus } from '../../../core/shared/asyncThunkStatus.model';

	export let pokemons: PokemonList;
	export let fetchPokemons: () => void;
	export let fetchPokemonsStatus: AsyncThunkStatus;

	onMount(() => {
		fetchPokemons();
	});
</script>

<div>
	<h1>Liste des pokemons</h1>

	{#if fetchPokemonsStatus === 'loading'}
		<p>Chargement en cours...</p>
	{:else if fetchPokemonsStatus === 'failed'}
		<p>Une erreur est survenue</p>
	{:else if fetchPokemonsStatus === 'succeeded' && pokemons}
		{#each pokemons as pokemon (pokemon.pokedexId)}
			<li>
				<a href={'/pokemon/' + pokemon.pokedexId}>
					{pokemon.name.fr}
				</a>
			</li>
		{/each}
	{/if}
</div>
