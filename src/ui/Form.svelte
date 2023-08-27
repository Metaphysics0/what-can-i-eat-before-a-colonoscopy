<script lang="ts">
	import { enhance } from '$app/forms';
	import { selectedFood } from '../stores/selectedFood';
	import { apiService } from '$lib/apiService';
	import { searchResultsStore, shouldShowSearchResultsStore } from '../stores/searchResultsStore';
	import Button from './common/Button.svelte';

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
		required={true}
		id="searchText"
		on:focus={() => shouldShowSearchResultsStore.set(true)}
		on:blur={() => shouldShowSearchResultsStore.set(false)}
		on:keyup={({ target }) => debounceAndSearch(target)}
		placeholder="Type food here (Ex. banana)"
		class="flex-1 text-lg outline-none focus:border-amber active:border-amber transition rounded-l"
	/>
	<Button type="submit" text="Search" />
</form>
