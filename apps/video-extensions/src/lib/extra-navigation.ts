import { updateVideos } from "./update-videos";

const shortsKeywords = ['short'];

function isInShortsMode() {
    return shortsKeywords.some(s => {
        return window.location.href.includes(s);
    })
}

function stop(e: KeyboardEvent) {
    e.stopPropagation();
    e.stopImmediatePropagation();
}

export function extraNavigation(e: KeyboardEvent) {
    // shorts controls
    if (isInShortsMode()) {
        if (e.key == 'ArrowLeft') {
            updateVideos(v => {
                if (v.currentTime > 1) {
                    v.currentTime -= 1
                } else {
                    v.currentTime = v.duration - 1;
                }
            });
        }
        if (e.key == 'ArrowRight') {
            updateVideos(v => {
                if (v.currentTime + 1 < v.duration) {
                    v.currentTime += 1
                } else {
                    v.currentTime = 0;
                }
            });
        }
        if (e.key == '0') {
            updateVideos(v => v.currentTime = 0);
        }
    }
}