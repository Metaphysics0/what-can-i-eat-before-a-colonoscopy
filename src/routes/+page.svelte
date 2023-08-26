<script lang="ts">
	import { getHostedImageUrl } from '$lib/utils/getHostedImageUrl';
	import Form from '../ui/Form.svelte';
	import Header from '../ui/Header.svelte';
</script>

<center class="mx-auto">
	<main class="flex justify-center">
		<img src={getHostedImageUrl('Fruits.webp')} alt="fruits" class="max-w-1/3 object-contain" />
		<div class="flex flex-col mx-5 my-auto">
			<Header />
			<Form />
		</div>
		<img src={getHostedImageUrl('Doctor11.webp')} alt="fruits" class="max-w-1/3 object-contain" />
	</main>
</center>
