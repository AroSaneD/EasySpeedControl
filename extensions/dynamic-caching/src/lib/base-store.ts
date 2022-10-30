import localforage from 'localforage';
import { writable } from 'svelte/store';
import { defaultSettings } from '@arosaned/common/package';
import type { ExtendedVideoSettings as EVS } from '@arosaned/common/package';

const DB_NAME = 've-caching';

export const createBaseStore = (indexingKey = 'DEFAULT') => {
	const lfInstancce = localforage.createInstance({ name: DB_NAME });

	const {
		subscribe: innerSubscribe,
		update,
		set: innerSet
	} = writable<EVS>(defaultSettings);

	// Asynchronously emit the last value from storage before init. Even though is async, should be almost instantanious
	lfInstancce.getItem<EVS>(indexingKey).then((v) => v && innerSet(v));

	const storer = (newVal: EVS) => {
		lfInstancce.setItem(indexingKey, newVal);
		return newVal;
	};
	return {
		subscribe: (...args: Parameters<typeof innerSubscribe>) => {
			const res = innerSubscribe(...args);
			return (...args2: Parameters<typeof res>) => {
				res(...args2);
			};
		},
		partialSet: (v: Partial<EVS>) => update((currValue) => storer({ ...currValue, ...v })),
		partialUpdate: (builder: (curr: EVS) => Partial<EVS>) =>
			update((currValue) => storer({ ...currValue, ...builder(currValue) }))
		// set: (v: EVS) => innerSet(storer(v)),
		// update: (builder: (v: EVS) => EVS) => innerUpdate((curr) => storer(builder(curr)))
	};
};
