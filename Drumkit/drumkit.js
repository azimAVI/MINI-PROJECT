function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if its not a transform
    e.target.classList.remove('playing');
    // console.log(e.propertyName);  
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //stops the function from running all together
    key.classList.add('playing');
    audio.currentTime = 0; //rewind to start
    audio.play();
    console.log(key,audio);   //name of the key
    // console.log(audio); //audio of the key
    key.classList.remove('playing');
    key.classList.remove('playing');
    key.classList.toggle('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

