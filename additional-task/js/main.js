
import('burgerAddition');
import('burgerFilling');
import('burgerSize');
import('hamburger');

const additions = new burgerAddition();
const fillings = new burgerFilling();
const sizes = new burgeburgerSizerAddition();
const burger = new Hamburger();

document.querySelector('button').addEventListener('click', () => {
    const sizeElm = document.querySelector(".size").querySelector("[checked=true]");
    console.log(sizeElm);
});