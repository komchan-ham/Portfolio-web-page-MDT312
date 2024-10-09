// ควบคุมการทำงานของวิดีโอ
const video = document.getElementById('projectVideo');
const togglePlayButton = document.getElementById('togglePlayButton');

// เมื่อกดปุ่ม จะสลับระหว่างการเล่นและหยุดวิดีโอ
togglePlayButton.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        togglePlayButton.textContent = 'หยุดวิดีโอ';
    } else {
        video.pause();
        togglePlayButton.textContent = 'เล่นวิดีโอ';
    }
});
