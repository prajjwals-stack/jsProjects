
const addbtn=document.querySelector(".addNote");
const notes=JSON.parse(localStorage.getItem('notes'));

if(notes){
    notes.forEach((note)=>{
        addNewNote(note);
    })
}


addbtn.addEventListener('click',()=>{
    addNewNote();
})

function addNewNote(text=''){
    const note=document.createElement('div');
    note.classList.add('note');

    note.innerHTML= `
    <div class="notes">
        <div class="toolbar">
            <button class="edit"><i class="fas fa-pencil-alt"></i></button>
            <button class="delete"><i class="fas fa-trash"></i></button>
        </div>
        <div class="textblock ${text ? "":"hidden"}">

        </div>
        <textarea class="${text ? " hidden" :""}" ></textarea>

    </div>
    
`;
const editbtn=note.querySelector(".edit");
const deletebtn=note.querySelector(".delete");

const textblock= note.querySelector(".textblock");
const textarea= note.querySelector("textarea");

textarea.value=text;
textblock.innerHTML=marked(text);

editbtn.addEventListener('click',()=>{
    textblock.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
});
deletebtn.addEventListener('click',()=>{
    note.remove();
    updateStorage();
})
textarea.addEventListener("input",(e)=>{
    const {value}=e.target;

textblock.innerHTML=marked(value);


updateStorage();

});



    document.body.appendChild(note);


}

function updateStorage(){
    const noteBlocks=document.querySelectorAll('textarea');

    const notes=[];

    noteBlocks.forEach((note)=>{
        notes.push(note.value);
    })
    localStorage.setItem('notes',JSON.stringify(notes));
}














 
 
