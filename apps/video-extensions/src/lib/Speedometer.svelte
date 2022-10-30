<script lang="ts" context="module">
	const formatter = new Intl.NumberFormat('en-us', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
	let timeout: ReturnType<typeof setTimeout>;
</script>

<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { createSpeedStore } from '@arosaned/dynamic-caching/package';
	import { clock } from './stores/timer-store';
	import { updateVideos } from './update-videos';

	const opacity = tweened(0, {
		duration: 250,
		easing: cubicInOut
	});
	$: speed = createSpeedStore();
	$: formatted = formatter.format($speed);
	$: if ($speed) {
		clearTimeout(timeout);
		opacity.set(1);
		timeout = setTimeout(() => opacity.set(0), 1000);
	}
	$: $clock && updateVideos($speed);

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key == '+') {
			speed.increment();
		} else if (e.key == '-') {
			speed.decrement();
		}
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="esp-speedometer" style="opacity: {$opacity}">
	{formatted}
</div>

<style>
	.esp-speedometer {
		font-size: 32px;
		border-radius: 20px;
		border: 4px solid #333a;
		padding: 12px 24px;
		display: inline-block;
		background-color: #888a;
		position: absolute;
		left: 160px;
		top: 100px;
		color: white;
		font-weight: bold;
		z-index: 9002;
	}
</style>
