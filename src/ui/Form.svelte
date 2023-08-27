<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Food } from '@prisma/client';
	import { selectedFood } from '../stores/selectedFood';
	import { apiService } from '$lib/apiService';
	import { searchResultsStore } from '../stores/searchResultsStore';

	const debounceTimeInMs = 300;

	async function searchForFoodsByText(text: string) {
		if (!text) {
			searchResultsStore.set([]);
			return;
		}

		const searchResults = await apiService.search.byName(text);
		searchResultsStore.set(searchResults);
	}

	let timer: any;
	function debounceAndSearch(target: EventTarget | null) {
		clearTimeout(timer);
		timer = setTimeout(async () => {
			// @ts-ignore
			await searchForFoodsByText(target.value);
		}, debounceTimeInMs);
	}
</script>

<form
	method="POST"
	class="flex font-sans"
	use:enhance={() => {
		return async ({ result, update }) => {
			if (result.type === 'error') {
				console.error('error!', result);
			}
			// @ts-ignore
			selectedFood.set(result.data);
		};
	}}
>
	<input
		type="text"
		name="searchText"
		autocomplete="off"
		id="searchText"
		on:keyup={({ target }) => debounceAndSearch(target)}
		placeholder="Type food here (Ex. banana)"
		class="flex-1 text-lg outline-none focus:border-amber active:border-amber transition rounded-l"
	/>
	<button
		type="submit"
		class="w-fit px-2 text-lg bg-amber! hover:bg-amber-500! transition border-amber! rounded-r border transition"
		>Search</button
	>
</form>
