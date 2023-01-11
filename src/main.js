document.querySelector("form").addEventListener("submit", event =>{
  event.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-link").classList.remove("hide");

  const formInput = document.querySelector("#message-form_input");
  const encryptedMessage = btoa(formInput.value);

  const inputLink = document.querySelector("#link-input");
  inputLink.value = `${window.location}#${encryptedMessage}`;
  inputLink.select()
})

const { hash } = window.location;

const message = atob(hash.replace("#", ""));
if(message){
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerHTML = message;
}