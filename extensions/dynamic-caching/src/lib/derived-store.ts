import { createBaseStore } from './base-store';
import type { ExtendedVideoSettings } from '@arosaned/common/package';
import { derived } from 'svelte/store';

export function createDerivedStore<T>(
	accessor: (settings: ExtendedVideoSettings) => T,
	converter: (v: T) => Partial<ExtendedVideoSettings>,
	...baseParams: Parameters<typeof createBaseStore>
) {
	const baseStore = createBaseStore(...baseParams);
	const { partialSet, partialUpdate } = baseStore;
	const { subscribe } = derived(baseStore, accessor);

	return {
		subscribe,
		set: (v: T) => {
			partialSet(converter(v));
		},
		update: (builder: (currentT: T) => T) => {
			partialUpdate((currentBase) => {
				const ct = accessor(currentBase);
				const newT = builder(ct);
				return converter(newT);
			});
		}
	};
}
