<script lang="ts">
	import { createSpeedStore } from '$lib/speed-store';

	let key: string | undefined;
	$: store = createSpeedStore(key);
</script>

<p>
	Key: <input type="text" placeholder="key" bind:value={key} />
	Value:
	<input type="number" placeholder="value" bind:value={$store} />
</p>

<p>
	Value in cache: {$store}
</p>
