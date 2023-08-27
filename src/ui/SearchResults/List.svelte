<script lang="ts">
	import type { Food } from '@prisma/client';
	import { searchResultsStore } from '../../stores/searchResultsStore';
	import Item from './Item.svelte';

	let searchResults: Food[] = [];

	searchResultsStore.subscribe((results) => {
		searchResults = results;
	});
</script>

<ul class="max-h-100 overflow-y-scroll">
	{#each searchResults as searchResult}
		<Item item={searchResult} />
	{/each}
</ul>
