export function updateVideos(newSpeed: number) {
    const videos = [...document.querySelectorAll('video')];
    videos.forEach((v) => {
        v.playbackRate = newSpeed;
    });
}
