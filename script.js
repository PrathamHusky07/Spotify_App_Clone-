console.log("Welcome to Spotify")

let songIndex = 0;
let audioElement = new Audio('Songs/castleofglass.mp3');
let masterPlay = document.getElementById('masterPlay');
let myDisplayBar = document.getElementById('myDisplayBar');
let gif = document.getElementById('gif');    
let songItems = Array.from(document.getElementsByClassName('songItem')) ;

let songs = [
    {songName: 'Castle of Glass - Linkin Park', filepath: "Songs/castleofglass.mp3", coverPath: "Covers/lp2.jpg"},
    {songName: 'Blinding Lights - The Weeknd', filepath: "Songs/blindinglights.mp3", coverPath: "Covers/l2.jpg"},
    {songName: 'Bombay Dreams - Ft KSHMR & Kavita Seth', filepath: "Songs/bombaydreams.mp3", coverPath: "Covers/l3.jpg"},
    {songName: 'Closer - The Chainsmokers', filepath: "Songs/closer.mp3", coverPath: "Covers/l4.jpg"},
    {songName: 'Kesariya - Arijit Singh, Pritam & Amitabh Bhattacharya', filepath: "Songs/kesariya.mp3", coverPath: "Covers/l5.jpg"},
    {songName: 'High on Life- Ft Martin Garrix & Bonn', filepath: "Songs/highonlife.mp3", coverPath: "Covers/l6.jpg"},
    {songName: 'Aaoge Tum Kabhi - The Local Train', filepath: "Songs/aaogetumkabhi.mp3", coverPath: "Covers/l7.jpg"},
    {songName: 'Perfect - Ed Sheeran', filepath: "Songs/perfect.mp3", coverPath: "Covers/l8.jpg"},
    {songName: 'Let Me Love You - DJ Snake', filepath: "Songs/letmeloveyou.mp3", coverPath: "Covers/l9.jpg"},
    {songName: 'Bumpy Ride - Mohombi', filepath: "Songs/bumpyride.mp3", coverPath: "Covers/l10.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
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