console.log("hi")

// Initialize the variables

let songIndex=0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar');

let songs = [
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}
]
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('cliick', ()=>{
    if(audioElement.pused || audioElement.currentTime<=0){
        audioElement.play()
    }
})

// Listen to events
myProgressBar.addEventListener('timeUpdate', ()=>{
    console.log('timeUpdate')
    //Update Seekbar
})

