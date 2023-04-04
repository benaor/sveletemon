<script lang="ts">
	import { onMount } from 'svelte';
	import PokemonCard from '../PokemonCard.svelte';
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
	<PokemonCard {pokemon} />
{:else}
	<div>La requete n'est pas partie</div>
{/if}
