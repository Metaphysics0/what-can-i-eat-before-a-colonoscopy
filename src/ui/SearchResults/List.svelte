<script lang="ts">
	import type { Food } from '@prisma/client';
	import {
		searchResultsStore,
		shouldShowSearchResultsStore
	} from '../../stores/searchResultsStore';
	import Item from './Item.svelte';

	let searchResults: Food[] = [];
	let shouldShowSearchResults: boolean;

	searchResultsStore.subscribe((results) => {
		searchResults = results;
	});

	shouldShowSearchResultsStore.subscribe((val) => {
		shouldShowSearchResults = val;
	});
</script>

<ul class="max-h-100 overflow-y-scroll absolute w-full top-36">
	{#each searchResults as searchResult}
		<Item item={searchResult} />
	{/each}
</ul>
