/*import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let dom = ['.com', '.net', '.es']

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
         let dominios = pronoun[i] + adj[j] + noun[k];
          let dominio1 = dominios.slice(0, -2);
          let dominio2 = dominios.slice(-2);
          let domainHacks = dominio1 + "." + dominio2

          console.log(domainHacks.replace());

       for (let l = 0; l < dom.length; l++) {
          let myNuevaVariable = pronoun[i] + adj[j] + noun[k] + dom[l];
          console.log (myNuevaVariable.replace());

        }  
      }
    } 
  };
};
