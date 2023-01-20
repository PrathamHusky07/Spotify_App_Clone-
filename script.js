console.log("Welcome to Spotify")

let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myDisplayBar = document.getElementById('myDisplayBar');
let gif = document.getElementById('gif');   
let masterSongName = document.getElementById('masterSongName');   
let songItems = Array.from(document.getElementsByClassName('songItem')) ;

let songs = [
    {songName: 'Castle of Glass - Linkin Park', filepath: "Songs/1.mp3", coverPath: "Covers/lp2.jpg"},
    {songName: 'Blinding Lights - The Weeknd', filepath: "Songs/2.mp3", coverPath: "Covers/l2.jpg"},
    {songName: 'Bombay Dreams - Ft KSHMR & Kavita Seth', filepath: "Songs/3.mp3", coverPath: "Covers/l3.jpg"},
    {songName: 'Closer - The Chainsmokers', filepath: "Songs/4.mp3", coverPath: "Covers/l4.jpg"},
    {songName: 'Kesariya - Arijit Singh, Pritam & Amitabh Bhattacharya', filepath: "Songs/5.mp3", coverPath: "Covers/l5.jpg"},
    {songName: 'High on Life- Ft Martin Garrix & Bonn', filepath: "Songs/6.mp3", coverPath: "Covers/l6.jpg"},
    {songName: 'Aaoge Tum Kabhi - The Local Train', filepath: "Songs/7.mp3", coverPath: "Covers/l7.jpg"},
    {songName: 'Perfect - Ed Sheeran', filepath: "Songs/8.mp3", coverPath: "Covers/l8.jpg"},
    {songName: 'Let Me Love You - DJ Snake', filepath: "Songs/8.mp3", coverPath: "Covers/l9.jpg"},
    {songName: 'Bumpy Ride - Mohombi', filepath: "Songs/10.mp3", coverPath: "Covers/l10.jpg"},
]

songItems.forEach((element,i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})


masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
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

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
    

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click', (e)=>{
         makeAllPlays();
         
         songIndex = parseInt(e.target.id);
         console.log(e.target);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.src = `Songs/${songIndex+1}.mp3` ;
         masterSongName.innerText = songs[songIndex].songName;
         audioElement.currentTime = 0;
         audioElement.play();
         gif.style.opacity = 1;
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');

    })

    
})

document.getElementById('next').addEventListener('click ', ()=> {
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }

    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

    

})

document.getElementById('previous').addEventListener('click ', ()=> {
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }

    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    

})



