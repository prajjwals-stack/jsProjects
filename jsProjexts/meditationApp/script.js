const music =document.querySelector('.music');
const playbtn=document.querySelector('.play');
const outline=document.querySelector('.moving-outline circle');
const video =document.querySelector('.video-container video');
const soundbtn=document.querySelectorAll('.sound-selector button');

const timeDisplay=document.querySelector('.time-display');

const timeSelector=document.querySelectorAll(".time-selector button");

const outlineLength=outline.getTotalLength();
console.log(outlineLength);

//fake duration or default duration 

let fakeDuration=600;

//animating outline lets the circle
outlineAnimation();

function outlineAnimation(){

outline.style.strokeDasharray=outlineLength;
outline.style.strokeDashoffset=outlineLength;

}
// <--------------------/////------------------------->song picker
soundbtn.forEach(sound =>{
    sound.addEventListener('click',function(obj){
        music.src=  obj.target.getAttribute('data-sound');
        video.src=  obj.target.getAttribute('data-video');
        playControl(music);
    });
});














// <-------------------/////------------------>

playbtn.addEventListener('click',()=>{
        playControl(music);
})

// <-------------------/////------------------>
timeSelector.forEach(timeOptions =>{
    timeOptions.addEventListener('click',(e)=>{
        fakeDuration= e.target.getAttribute('data-time');
        timeDisplay.textContent=`${Math.floor(fakeDuration/60)}: ${Math.floor(fakeDuration%60)}`;
    });
});





// <-------------------/////------------------>


function playControl(music){
    if(music.paused){
        music.play();
        video.play();
        playbtn.src="./svg/pause.svg";
    }
    else{
        music.pause();
        video.pause();
        playbtn.src="./svg/play.svg";
    }
}
// <-------------------/////------------------>

music.ontimeupdate =()=>{
    let currentTime=music.currentTime;
    let timeElapsed=fakeDuration-currentTime;
    let seconds=Math.floor(timeElapsed % 60);
    let minutes=Math.floor(timeElapsed/60);

    // <-------------------/////------------------>
// circle animation
    let progressOfCircle =outlineLength - (currentTime/fakeDuration)*outlineLength;
    outline.style.strokeDashoffset=progressOfCircle;

    timeDisplay.textContent=`${minutes}:${seconds}`;

    if(currentTime >=  fakeDuration){
        music.pause();
        music.currentTime=0;
        playbtn.src="./svg/play.svg";
        music.pause();
    }
}