console.log("Welcome to Spotify")

let songIndex = 0;
let audioElement = new Audio('Songs/castleofglass.mp3');
let masterPlay = document.getElementById('masterPlay');
let myDisplayBar = document.getElementById('myDisplayBar');    

let songs = [
    {songName: 'Castle of Glass', filepath: "Songs/castleofglass.mp3", coverPath: "lp2.jpg"},
    {songName: 'Castle of Glass', filepath: "castleofglass.mp3", coverPath: "lp2.jpg"},
    {songName: 'Castle of Glass', filepath: "castleofglass.mp3", coverPath: "lp2.jpg"},
    {songName: 'Castle of Glass', filepath: "castleofglass.mp3", coverPath: "lp2.jpg"},
    {songName: 'Castle of Glass', filepath: "castleofglass.mp3", coverPath: "lp2.jpg"},
    {songName: 'Castle of Glass', filepath: "castleofglass.mp3", coverPath: "lp2.jpg"},
    {songName: 'Castle of Glass', filepath: "castleofglass.mp3", coverPath: "lp2.jpg"},
    {songName: 'Castle of Glass', filepath: "castleofglass.mp3", coverPath: "lp2.jpg"},
    {songName: 'Castle of Glass', filepath: "castleofglass.mp3", coverPath: "lp2.jpg"},
    {songName: 'Castle of Glass', filepath: "castleofglass.mp3", coverPath: "lp2.jpg"},
]


masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle')
        
    }
})
myDisplayBar.addEventListener('timeupdate', ()=> {
    console.log('timeupdate');
})