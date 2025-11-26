/*import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/

//window.onload = function() {
//write your code here
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['mantecom', 'carnet', 'estres'];
let dom = ['com', 'net', 'es']

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < dom.length; l++) {
        if (noun[k].endsWith(dom[l])){
          console.log(pronoun[i]+adj[j]+noun[k].slice(0, -3)+'.'+dom[l]);    
        }

        //esto era todo lo que tenia, y la linea 20 fue lo que quedo arreglado con el grupo en clase
        //console.log(pronoun[i]+adj[j]+noun[k]+dom[l]);
       /* let dominios = pronoun[i] + adj[j] + noun[k];
        let dominio1 = dominios.slice(0, -2);
        let dominio2 = dominios.slice(-2);
        let domainHacks = dominio1 + "." + dominio2
        console.log(domainHacks.replace())*/
      }
    }
  }
};
//};
