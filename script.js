console.log("Welcome to Spotify")

let songIndex = 0;
let audioElement = new Audio('Songs/castleofglass.mp3');
let masterPlay = document.getElementById('masterPlay');
let myDisplayBar = document.getElementById('myDisplayBar');
let gif = document.getElementById('gif');    
let songItems = Array.from(document.getElementsByClassName('songItem')) ;

let songs = [
    {songName: 'Castle of Glass', filepath: "Songs/castleofglass.mp3", coverPath: "lp2.jpg"},
    {songName: 'Blinding Lights', filepath: "Songs/blindinglights.mp3", coverPath: "lp2.jpg"},
    {songName: 'Bombay Dreams', filepath: "Songs/bombaydreams.mp3.", coverPath: "lp2.jpg"},
    {songName: 'Closer', filepath: "Songs/closer.mp3", coverPath: "lp2.jpg"},
    {songName: 'Kesariya', filepath: "Songs/kesariya.mp3", coverPath: "lp2.jpg"},
    {songName: 'High on Life', filepath: "Songs/highonlife.mp3", coverPath: "lp2.jpg"},
    {songName: 'Aaoge Tum Kabhi', filepath: "Songs/aaogetumkabhi.mp3", coverPath: "lp2.jpg"},
    {songName: 'Perfect', filepath: "Songs/perfect.mp3", coverPath: "lp2.jpg"},
    {songName: 'Let Me Love You', filepath: "Songs/letmeloveyou.mp3", coverPath: "lp2.jpg"},
    {songName: 'Bumpy Ride', filepath: "Songs/bumpyride.mp3", coverPath: "lp2.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].filepath;
})


masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
        
    }
})
audioElement.addEventListener('timeupdate', ()=> {
    
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myDisplayBar.value = progress;

})

myDisplayBar.addEventListener('change', ()=> {
    audioElement.currentTime = myDisplayBar.value * audioElement.duration/100;

})