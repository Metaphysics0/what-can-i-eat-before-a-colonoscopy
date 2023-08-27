<script lang="ts">
	import type { Food } from '@prisma/client';
	import { selectedFood as selectedFoodStore } from '../stores/selectedFood';

	export let selectedFood: Food;

	const friendlyText = {
		'0': 'Stop consuming it 24 hours before your colonoscopy',
		'1': 'Stop consuming it 2 days before your colonoscopy',
		'2': 'Stop consuming it 3 days before your colonoscopy',
		'3': 'Stop consuming it 4 days before your colonoscopy'
	};

	function removeSelectedFood(): void {
		selectedFoodStore.set(undefined);
	}
</script>

<div class="font-sans">
	<h3 class="text-3xl text-danger font-bold">{selectedFood.name}</h3>
	<p class="text-xl mb-2">{friendlyText[selectedFood.number]}.</p>
	<button on:click={removeSelectedFood}>Search again</button>
</div>
