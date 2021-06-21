let count=0;

const btns= document.querySelectorAll(".btn");
const value= document.getElementById('value');

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        // console.log(e.currentTarget.classList);
        const styles=e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;

        }
        else{
            count=0;
        }
        if(count >0){
            value.style.color='green';
        }
        if(count<0){
            value.style.color='red';
        }
        if(count ===0 ){
            value.style.color='black';

        }
        value.textContent=count;

})

})