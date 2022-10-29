import { readable } from 'svelte/store';

let timer = 0;
export const clock = readable(timer++, function start(set) {
    const interval = setInterval(() => {
        set(timer++);
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
});
