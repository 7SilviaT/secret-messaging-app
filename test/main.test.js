/**
 * @jest-environment jsdom
 */

const validationForm = require("../src/main");

/* test("form should return validation function" () =>{
expect(validationForm)
}) */

beforeEach(() => {
  document.body.innerHTML = "<div id='containerMessageToEncrypt'></div>";
  validationForm();
});

describe('form should return validation function', () => {
  it('Registra usuario de Google, ingresa, y lo lleva al Feed', () => {
    const validationFormDiv = validationForm();
    const buttonForm = validationFormDiv.querySelector('.btn');
    buttonForm.dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(window.location.pathname).toBe('/index.html');;
    });
  })
})