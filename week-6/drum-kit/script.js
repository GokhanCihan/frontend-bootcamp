window.addEventListener('keydown', function(e) {
    const audio = this.document.querySelector(`audio[data-key=${e.key}]`);
    const key = this.document.querySelector(`div[data-key=${e.key}]`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
        this.setTimeout(function() {
            key.classList.remove('playing');
            console.log('offf')
        }, 500)
    }
})