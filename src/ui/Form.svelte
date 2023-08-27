<script lang="ts">
	import { enhance, applyAction } from '$app/forms';
	import type { Food } from '@prisma/client';
	import { selectedFood } from '../stores/selectedFood';

	function setSelectedFood(result: Food) {
		selectedFood.set(result);
	}
</script>

<form
	method="POST"
	class="flex flex-col font-sans"
	use:enhance={({ formElement, formData, action, cancel, submitter }) => {
		// `formElement` is this `<form>` element
		// `formData` is its `FormData` object that's about to be submitted
		// `action` is the URL to which the form is posted
		// calling `cancel()` will prevent the submission
		// `submitter` is the `HTMLElement` that caused the form to be submitted

		return async ({ result, update }) => {
			if (result.type === 'error') {
				await applyAction(result);
			}
			// @ts-ignore
			setSelectedFood(result.data);
		};
	}}
>
	<input
		type="text"
		name="searchText"
		id="searchText"
		placeholder="Type food here (Ex. banana)"
		class="mb-2 py-2.5 text-lg outline-none focus:border-amber active:border-amber transition rounded"
	/>
	<button
		type="submit"
		class="w-fit text-lg mx-auto px-3 py-1 rounded bg-amber! hover:bg-amber-500! transition border-amber-5! border transition"
		>Search</button
	>
</form>
