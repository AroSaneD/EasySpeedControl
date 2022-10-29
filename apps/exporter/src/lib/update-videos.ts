export function updateVideos(newSpeed: number) {
    console.log('Updating videos');
    const videos = [...document.querySelectorAll('video')];
    videos.forEach((v) => {
        v.playbackRate = newSpeed;
    });
}
