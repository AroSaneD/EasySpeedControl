import { readable, writable } from 'svelte/store';
import { key } from '../common/storage-key';

const createStore = () => {
    const speedParsedFromStorage = parseFloat(localStorage.getItem(key));
    const initialSpeed = !isNaN(speedParsedFromStorage)
        ? speedParsedFromStorage
        : 2;

    const { subscribe, update } = writable(initialSpeed);
    const storer = (newVal: number) => {
        localStorage.setItem(key, newVal.toString());
        return newVal;
    };
    return {
        subscribe,
        increment: () => update((n) => storer(n + 0.25)),
        decrement: () => update((n) => storer(n - 0.25)),
    };
};

export const speed = createStore();

