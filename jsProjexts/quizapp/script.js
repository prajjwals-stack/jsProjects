const quizData=[{
    question:"what is 2+100?",
    a:'103',
    b:'102',
    c:'98',
    d:'120',
    correct:"b"
},
{
    question:"what is server side js framework called?",
    a:'flask',
    b:'django',
    c:'.net',
    d:'node',
    correct:"d"

},
{
    question:"which of the following is a arch based linux distro",
    a:'Ubantu',
    b:'Kali linux',
    c:'Manjaro',
    d:'Endevour Os',
    correct:"c"

},
{
    question:"which of the following command helps us to create files?",
    a:'mkdir',
    b:'sudo',
    c:'touch',
    d:'gitint',
    correct:"c"

}
]

const questionQ=document.getElementById("question");
const text_a= document.getElementById("text_a");
const text_b= document.getElementById('text_b');
const text_c= document.getElementById('text_c');
const text_d= document.getElementById('text_d');
const submitbtn=document.getElementById('submitbtn');

let currentquestion=0;
let score=0;

loadquiz();

function loadquiz(){
    deselect();
    let currentquiz=quizData[currentquestion];
    questionQ.innerText=currentquiz.question;
    text_a.innerText=currentquiz.a;
    text_b.innerText=currentquiz.b;
    text_c.innerText=currentquiz.c;
    text_d.innerText=currentquiz.d;
}

function selected(){
    const answerElements= document.querySelectorAll(".answers");
    let answer=undefined;
    answerElements.forEach((answerElement) => {
        if(answerElement.checked){
            answer=answerElement.id;

        }
        });
    return answer;



}


function deselect(){
    const answerElements= document.querySelectorAll(".answers");
    answerElements.forEach((answerElement) => {
        if(answerElement.checked){
            answerElement.checked=false;

        }
        

    });

}

submitbtn.addEventListener('click',()=>{
    
    const answer=selected();
    

    if(answer){
        if(answer === quizData[currentquestion].correct){
            score++;
        }
        currentquestion++;
        if(currentquestion<quizData.length){
            loadquiz();
        }
        else{
            alert(`You have answered ${score}/${quizData.length
            } congratulations`);
        }
    }












   
})