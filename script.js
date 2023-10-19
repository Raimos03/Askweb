function sim(){

    alert("Parabéns por ter aceitado meu pedido!");
}

function desvia(){
   
 
   var btn = document.getElementById("btn2");
   
   console.log("Desviei");
//    console.log(btn);

 

   btn.style.position = "absolute"; 
   btn.style.bottom=geraPosicao(9,80);
   btn.style.left=geraPosicao(9,80);
   btn.style.top=geraPosicao(9,80);

   //caso fique em cima de algum elemento, ande para cima ou baixo
}
function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) +"%";
}
