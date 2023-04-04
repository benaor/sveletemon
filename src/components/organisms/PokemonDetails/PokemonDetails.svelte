<script lang="ts">
	import { onMount } from 'svelte';
	import type {
		PokemonDetailsMapDispatchToProps,
		PokemonDetailsMapStateToProps,
		PokemonDetailsOwnProps
	} from './PokemonDetails.model';

	export let fetchDetails: PokemonDetailsMapDispatchToProps['fetchDetails'];
	export let status: PokemonDetailsMapStateToProps['status'];
	export let pokemon: PokemonDetailsMapStateToProps['pokemon'];
	export let id: PokemonDetailsOwnProps['id'];

	onMount(() => {
		fetchDetails(id);
	});
</script>

{#if status === 'loading'}
	<div>Chargement...</div>
{:else if status === 'failed'}
	<div>Erreur</div>
{:else if status === 'succeeded'}
	<div>
		<h1>{pokemon.name.fr}</h1>
		<div>{pokemon.generation}</div>
	</div>
{:else}
	<div>La requete n'est pas partie</div>
{/if}
