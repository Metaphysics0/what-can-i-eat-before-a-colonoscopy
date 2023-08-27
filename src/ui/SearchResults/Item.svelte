<script lang="ts">
	import type { Food } from '@prisma/client';
	import { selectedFood } from '../../stores/selectedFood';
	import { searchResultsStore } from '../../stores/searchResultsStore';

	export let item: Food;

	function setSearchResult(): void {
		console.log('setting item!', item);

		selectedFood.set(item);
		searchResultsStore.set([]);
	}
</script>

<li
	class="p-3 bg-white hover:bg-amber-200 cursor-pointer border-b font-sans text-2xl"
	on:click={setSearchResult}
>
	{item.name}
</li>
