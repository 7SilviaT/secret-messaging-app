const inputMessageLinkToShare = document.querySelector("#inputMessageLinkToShare");

const validationForm = () =>{
  const inputMessageToEncrypt = document.querySelector("#inputMessageToEncrypt");
  const encryptedMessage = btoa(inputMessageToEncrypt.value);
  if (inputMessageToEncrypt.value ===""){
    alert("Ingrese texto");
  }else{
    inputMessageLinkToShare.value = `${window.location}#${encryptedMessage}`;
    document.querySelector("#containerMessageLink").classList.remove("hide");
    document.querySelector("#containerMessageToEncrypt").classList.add("hide");
    inputMessageLinkToShare.select()
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
  document.querySelector("#containerDecryptedMessage").classList.remove("hide");

  document.querySelector("h1").innerHTML = message;
}

//module.exports = validationForm;