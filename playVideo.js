

const videoPlayer = $('.discover-vid');

const videoBtn = $('.discover-play');

const video = $('.control-video');



videoPlayer.addEventListener('click', function(e)
{
    video.style.zIndex = '2';
    video.play();
})


