const form = document.getElementById("form");

const beformSubmit = document.getElementById("befor");
const afterSubmit = document.getElementById("after");
const submitBtn = document.getElementById("btn");

 
function eventHandler(e){
    e.preventDefault();
    const formData = new FormData(form).entries();
    const {email} = Object.fromEntries(formData);
    
    const errorMessage = emailValidation(email);
    if(errorMessage){
       const erroMessageElement = document.getElementById("errorText");
       const bgEmail = document.getElementById("email");
       bgEmail.classList.remove("border-slate-300");
       bgEmail.classList.add('text-red-400','border-red-500');
        erroMessageElement.textContent =errorMessage; 
    } else{
         const btn = document.getElementById("btn");
         btn.addEventListener("hover",()=>{
             btn.classList.remove("bg-slate-800","hover:bg-slate-700");
         btn.classList.add("bg-red-500");
         });
        document.getElementById("befor").classList.add("hidden");
        document.getElementById("after").classList.remove("hidden");
        document.getElementById("showEmail").textContent = email;
    }

}
function emailValidation(email){
    if(!email){
        return "email is required";
    }
    const isvalid = /^\S+@\S+$/g;
    if(!isvalid.test(email)){
       return "email Validation required";
    }

}
form.addEventListener('submit', eventHandler);

