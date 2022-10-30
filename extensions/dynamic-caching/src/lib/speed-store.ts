import type { createBaseStore } from './base-store';
import { createDerivedStore } from './derived-store';

export function createSpeedStore(...params: Parameters<typeof createBaseStore>) {
	const { subscribe, set, update } = createDerivedStore(
		(s) => s.speed,
		(v) => ({ speed: v }),
		...params
	);

	return {
		subscribe,
		set,
		increment: () => update((n) => n + 0.25),
		decrement: () => update((n) => n - 0.25)
	};
}
