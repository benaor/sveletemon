<script lang="ts">
	import type { Pokemon } from '../../core/pokedex/pokemon/domain/models/pokemon.model';
	import BadgeType from '../atoms/BadgeType.svelte';

	export let pokemon: Pokemon;
</script>

<a class="card" href={'/pokemon/' + pokemon.pokedexId}>
	<img
		src={pokemon.sprites.regular}
		width="180"
		height="180"
		alt={'photo de ' + pokemon.name.fr}
		class="pokemon-picture"
	/>
	<h2>N°{pokemon.pokedexId} {pokemon.name.fr}</h2>
	<div class="types-list">
		{#if pokemon.types}
			{#each pokemon.types as type}
				<BadgeType {type} />
			{/each}
		{:else}
			<span class="no-type"> Aucun type </span>
		{/if}
	</div>
</a>

<style>
	.card {
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 0 30px var(--color-black-10);
		display: flex;
		flex-direction: column;
		text-decoration: none;
		transition-duration: 500ms;
		padding-bottom: 15px;
	}

	.card:hover {
		box-shadow: 0 0 30px var(--color-black-25);
		scale: 1.05;
		transition-duration: 500ms;
	}

	h2 {
		text-align: center;
	}

	.pokemon-picture {
		margin: auto;
		height: 180;
	}

	.types-list {
		display: flex;
		justify-content: center;
		gap: 10px;
		height: 20px;
	}

	.no-type {
		color: var(--color-black-50);
	}
</style>
