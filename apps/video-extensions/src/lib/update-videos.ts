export function getVideos() {
    const videos = [...document.querySelectorAll('video')];
    return videos;
}

export function updateVideos(callback: (v: HTMLVideoElement) => void) {
    getVideos().forEach(callback);
}

export function updateVideosSpeed(newSpeed: number) {
    updateVideos(v => v.playbackRate = newSpeed);
}
