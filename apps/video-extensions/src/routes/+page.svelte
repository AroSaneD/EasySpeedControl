<script lang="ts">
	import Speedometer from '$lib/Speedometer.svelte';
	import { browser } from '$app/environment';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if browser}
	<Speedometer />
{/if}
