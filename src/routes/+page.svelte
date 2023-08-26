<script lang="ts">
	import { page } from '$app/stores';
	import { getHostedImageUrl } from '$lib/utils/getHostedImageUrl';
	import Form from '../ui/Form.svelte';
	import Header from '../ui/Header.svelte';

	let query = new URLSearchParams($page.url.searchParams.toString());
	console.log('QUERY', query);
</script>

<center class="mx-auto">
	<main class="flex justify-center">
		<img
			src={getHostedImageUrl('Fruits.webp')}
			alt="fruits"
			class="sm:max-w-20 md:max-w-30 lg:max-w-40 xl:display-block xl:max-w-1/4 object-contain"
		/>
		<div class="flex flex-col mx-5 my-auto">
			<Header />
			<Form />
		</div>
		<img
			src={getHostedImageUrl('Doctor11.webp')}
			alt="doctor"
			class="sm:max-w-20 md:max-w-30 lg:max-w-40 xl:display-block xl:max-w-1/4 object-contain"
		/>
	</main>
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
