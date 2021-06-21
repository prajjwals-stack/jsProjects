const dayselement= document.getElementById('days');
const hourselement= document.getElementById('hours');

const minselement= document.getElementById('mins');

const secondselement= document.getElementById('seconds');

let birthDay;

const form=document.querySelector("#input")
form.addEventListener('submit', async function(e){
    e.preventDefault()
    birthDay=form.elements.dateUsed.value;
    await countdown();
    await setInterval(countdown, 1000);
})

// const birthDay=" 23 Oct 2021";

function countdown(){
    const birthDate= new Date(birthDay);
    const currentDate= new Date();
    

    const totalseconds= (birthDate - currentDate)/1000;
    const days= Math.floor(totalseconds/3600/24);
    const hours=Math.floor(totalseconds/3600)% 24;
    const minute=Math.floor(totalseconds/60)%60;
    const seconds= Math.floor(totalseconds)%60;

    dayselement.innerHTML=format(days);
    hourselement.innerHTML=format(hours);
    minselement.innerHTML=format(minute);
    secondselement.innerHTML=format(seconds);


   
}
function format(time){
    return time<10?(`0${time}`):time;
}



// countdown();
// setInterval(countdown, 1000);