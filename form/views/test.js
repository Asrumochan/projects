const sub =document.getElementById('sub');
const name1= document.getElementById("name1");
const email= document.getElementById("email");
const password= document.getElementById("pass");
sub.addEventListener("click",()=>{
     localStorage.setItem('name', name1.value)
     localStorage.setItem('password', password.value)
     localStorage.setItem('email', email.value)
})

function handler(){
     const btn=document.getElementById("btn")
     let nm = localStorage.getItem('name');
     let pa = localStorage.getItem('password');
     let em = localStorage.getItem('email');
     if (btn.textContent===pa) {
          alert("Password matched");
          
     }
}
