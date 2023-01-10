const { hash } = window.location;


document.querySelector("form").addEventListener("submit", event =>{
  event.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-link").classList.remove("hide");

  const input = document.querySelector("#message-input");
  const encryptedMessage = btoa(input.value);

  const inputLink = document.querySelector("#link-input");
  inputLink.value = `${window.location}#${encryptedMessage}`;
  inputLink.select()
})