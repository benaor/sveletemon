<script lang="ts">
	//@ts-ignore
	import { Provider } from 'svelte-redux-connect';
	import Layout from '../components/template/Layout.svelte';
	import { createStore } from '../core/store';

	const store = createStore({});
</script>

<Provider {store}>
	<Layout>
		<slot />
	</Layout>
</Provider>
