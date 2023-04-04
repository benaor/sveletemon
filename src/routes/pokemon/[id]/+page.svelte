<script lang="ts">
	import PokemonDetails from '../../../components/organisms/PokemonDetails';
	import type { PageData } from './$types';

	export let data: PageData;

	const { id } = data;
</script>

<h1>Pokemon numéro {id} !</h1>
<PokemonDetails id={+id} />
