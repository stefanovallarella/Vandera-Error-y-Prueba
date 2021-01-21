

const playIcons = document.getElementsByClassName('play-button');
const songContainer = document.getElementsByClassName('container-song-title');

console.log(playIcons);
Array.prototype.forEach.call(playIcons, (icon) => {

     icon.addEventListener('click', () => {

        console.log('funciono1');

    })

})



