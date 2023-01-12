/**
 * @jest-environment jsdom
 */

const validationForm = require("../src/main");

/* test("form should return validation function" () =>{
expect(validationForm)
}) */

beforeEach(() => {
  document.body.innerHTML = `<div id='containerMessageToEncrypt'>
  <form>
  <label>Enter a secret message</label>
  <input id="inputMessageToEncrypt" autocomplete="off"/>
  <button class="btn" type="submit">Create</button>
</form>
</div>`;
  validationForm();
});

describe('form should return validation function', () => {
  it('retorna div', () => {
    const validationFormDiv = validationForm();
    const buttonForm = validationFormDiv.querySelector('.btn');
    buttonForm.dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(window.location.pathname).toBe('/index.html');;
    });
  })
})