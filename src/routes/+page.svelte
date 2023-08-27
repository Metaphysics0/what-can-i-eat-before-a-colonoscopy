<script lang="ts">
	import { getHostedImageUrl } from '$lib/utils/getHostedImageUrl';
	import type { Food } from '@prisma/client';
	import { selectedFood as selectedFoodStore } from '../stores/selectedFood';
	import Disclaimer from '../ui/Disclaimer.svelte';
	import Form from '../ui/Form.svelte';
	import Header from '../ui/Header.svelte';
	import SelectedFood from '../ui/SelectedFood.svelte';

	let selectedFood: Food | undefined;
	selectedFoodStore.subscribe((val) => {
		selectedFood = val;
	});
</script>

<center class="mx-auto">
	<main class="flex justify-center">
		<img
			src={getHostedImageUrl('Fruits.webp')}
			alt="fruits"
			class="sm:max-w-20 md:max-w-30 lg:max-w-40 xl:display-block xl:max-w-1/4 object-contain"
		/>
		<div class="flex flex-col mx-5 my-auto">
			{#if selectedFood}
				<SelectedFood {selectedFood} />
			{:else}
				<Header />
				<Form />
			{/if}
		</div>
		<img
			src={getHostedImageUrl('Doctor11.webp')}
			alt="doctor"
			class="sm:max-w-20 md:max-w-30 lg:max-w-40 xl:display-block xl:max-w-1/4 object-contain"
		/>
	</main>
	<Disclaimer />
</center>

<style>
	/* Portrait */
	@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
		img {
			display: none;
		}
	}

	/* Landscape */
	@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
		img {
			display: none;
		}
	}
</style>
