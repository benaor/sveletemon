<script lang="ts">
	import type { Pokemon } from '../../core/pokedex/pokemon/domain/models/pokemon.model';
	import BadgeType from '../atoms/BadgeType.svelte';

	export let pokemon: Pokemon;
</script>

<div class="card">
	<div class="top-part">
		<div class="pokemon-basic-image-container">
			<img
				src={pokemon.sprites.regular}
				alt={pokemon.name.en}
				width="180"
				class="pokemon-basic-image"
			/>
		</div>
	</div>

	<div class="bottom-part">
		<h1 class="text-center">{pokemon.name.fr.toUpperCase()}</h1>
		<span class="text-center color-light">({pokemon.name.en})</span>
		{#if pokemon.types}
			<div class="pokemon-type">
				{#each pokemon.types as type}
					<BadgeType {type} />
				{/each}
			</div>
		{/if}
		<p class="text-center">Génération {pokemon.generation}</p>
		<div class="text-center resistances">
			{#if pokemon.resistances && pokemon.resistances.length > 0}
				<div>
					<h3>Faiblesses</h3>
					{#each pokemon.resistances.filter((res) => res.multiplier > 1) as resistance}
						<span>{resistance.name} - {resistance.multiplier}</span>
					{/each}
				</div>
				<div>
					<h3>resistances</h3>
					{#each pokemon.resistances.filter((res) => res.multiplier < 1) as resistance}
						<span>{resistance.name} - {resistance.multiplier}</span>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.card {
		background-color: #fff;
		border-radius: 30px;
		box-shadow: 0 0 30px 10px var(--color-black-10);
		display: flex;
		flex-direction: column;
		text-decoration: none;
		transition-duration: 500ms;
	}

	.top-part {
		background-color: var(--color-theme-1);
		border-radius: 30px 30px 0 0;
		height: 33%;
		min-height: 200px;
		width: 100%;
		position: relative;
	}

	.bottom-part {
		height: 66%;
		min-height: 400px;
		margin-top: 100px;
		padding-bottom: 30px;
	}

	.pokemon-basic-image-container {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		border-radius: 100%;
		height: 200px;
		width: 200px;
		display: flex;
		border: solid 10px var(--color-black-50);
		transition-duration: 500ms;
	}

	.pokemon-basic-image-container:hover {
		box-shadow: 0 0 30px var(--color-black-25);
		scale: 1.05;
		transition-duration: 500ms;
	}

	.pokemon-basic-image {
		transform: translateY(-5%);
		margin: auto;
	}

	.pokemon-type {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 10px;
		margin-top: 7px;
	}
	.resistances {
		display: flex;
		justify-content: center;
		width: 50%;
		margin: auto;
	}

	.resistances > div {
		width: 100px;
		margin: auto;
		margin-top: 0;
	}

	h1 {
		letter-spacing: 8px;
		margin-bottom: 5px;
	}

	span {
		width: 100%;
		display: inline-block;
	}

	.color-light {
		color: var(--color-black-50);
	}
</style>
