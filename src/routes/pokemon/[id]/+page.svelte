<script lang="ts">
	import PokemonDetails from '../../../components/organisms/PokemonDetails';
	import type { PageData } from './$types';

	export let data: PageData;

	const { id } = data;
</script>

<div class="page-container">
	<PokemonDetails {id} />
</div>

<style>
	.page-container {
		padding: 10em 0;
	}
</style>
