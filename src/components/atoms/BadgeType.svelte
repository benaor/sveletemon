<script lang="ts">
	import type { PokemonType } from '../../core/pokedex/pokemon/domain/models/pokemon.model';

	export let type: PokemonType;
</script>

<img src={type.image} alt={type.name} class="type-badge" />

<style>
	.type-badge {
		height: 1.5em;
		width: 1.5em;
		border-radius: 100%;
	}
</style>
