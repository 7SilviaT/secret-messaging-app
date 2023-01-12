const inputLink = document.querySelector("#link-input");

const validationForm = () =>{
  const formInput = document.querySelector("#inputMessageToEncrypt");
  const encryptedMessage = btoa(formInput.value);
  if (formInput.value ===""){
    alert("Ingrese texto");
  }else{
    inputLink.value = `${window.location}#${encryptedMessage}`;
    document.querySelector("#message-link").classList.remove("hide");
    document.querySelector("#containerMessageToEncrypt").classList.add("hide");
    inputLink.select()
  }
}

document.querySelector("form").addEventListener("submit", event =>{
  event.preventDefault();
  validationForm();
})

const { hash } = window.location;

const message = atob(hash.replace("#", ""));
if(message){
  document.querySelector("#containerMessageToEncrypt").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerHTML = message;
}

module.exports = validationForm;