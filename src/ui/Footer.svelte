<script lang="ts">
	import Button from './common/Button.svelte';

	const routes = [
		{
			text: "FAQ's",
			href: '/faq'
		},
		{
			text: 'Contact Us',
			href: '/faq'
		}
	];
</script>

<footer class="w-full flex justify-around">
	{#each routes as route}
		<Button href={route.href} text={route.text} asLink={true} />
	{/each}
</footer>
