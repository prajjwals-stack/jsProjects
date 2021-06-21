const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
 
const btn=document.getElementById('btn');
const color=document.querySelector('.color')


btn.addEventListener('click',()=>{
    let hexa='#';
    for(let i=0;i<6;i++){
        const randomNumber=getRandomNumber();
        // console.log(randomNumber);
        hexa +=hex[randomNumber];
    }
    document.body.style.backgroundColor=hexa;
    color.textContent=hexa;
})

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}