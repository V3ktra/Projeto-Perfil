alert("Olá Seja Bem-vindo")

let p1=prompt("Digite Seu NOME"); 
let p2=prompt("Digite, qual player você seria?"); 
let p3=prompt("Digite, onde você moraria?"); 
let p4=prompt("Digite, qual ovo você cuidaria?"); 

let msg= document.getElementById('msg'); 

msg.innerHTML=`<p>Olá ${p1} o seu você seria ${p2} você vai morar na(o) ${p3} cuidando de ${p4}`