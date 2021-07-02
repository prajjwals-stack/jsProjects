 const githubAPI="https://api.github.com/users/";

const main= document.getElementById('main');
const form= document.getElementById('form');
const search= document.getElementById('search');



 async function getUserData(user){
     const resp=await fetch(githubAPI + user);
     const respData= await resp.json();

     createUser(respData);


 }






 function createUser(user){
     const card=document.createElement('div');
     card.classList.add('card');

     const cardHTML=`
     <div class="card">
            <div>
                    <img class="avatar" src="${user.avatar_url}" alt="${user.name}">

                    <ul class="followers">
                        <li>follwers : ${user.followers}</li>
                        <li>following : ${user.following}</li>
                        <li>Repositories : ${user.public_repos}</li>
                    </ul>

            </div>

            <div class="userInfo">
                    <h2> ${user.name} </h2>
                    <p>${user.bio}</p>

                
                
            
            </div>
     </div>
`;

main.innerHTML=cardHTML;
 }

 




 form.addEventListener('submit',(e)=>{
     e.preventDefault();

     const user=search.value;
     if(user){
         getUserData(user);
         search.value="";
     }
 })