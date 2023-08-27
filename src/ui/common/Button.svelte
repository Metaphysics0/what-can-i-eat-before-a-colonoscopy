<script lang="ts">
	export let type: 'button' | 'submit' = 'button';
	export let text: string;

	export let asLink: boolean = false;
	export let href: string | undefined = undefined;

	let cssClass =
		'w-fit px-2 text-lg bg-amber! hover:bg-amber-500! transition border-amber! rounded-r border transition';
</script>

{#if asLink}
	<a {href} class={cssClass}>{text}</a>
{:else}
	<button {type} class={cssClass}>{text}</button>
{/if}
