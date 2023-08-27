<script lang="ts">
	import { enhance } from '$app/forms';
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
			console.log('RESULT', result);

			// `result` is an `ActionResult` object
			// `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
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
