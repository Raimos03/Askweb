function sim(){

    alert("Parabéns por ter aceitado meu pedido!");
    levaIG();
}

function desvia(){
   var btn = document.getElementById("btn2");
   
   console.log("Desviei");
   btn.style.position = "absolute"; 
   btn.style.bottom=geraPosicao(9,80);
   btn.style.left=geraPosicao(9,80);
   btn.style.top=geraPosicao(9,80);

   //caso fique em cima de algum elemento, ande para cima ou baixo
}
function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) +"%";
}

function validaForm(){

    var p1 = document.getElementById();
    var p2 = document.getElementById();
    var p3 = document.getElementById();
    var p4 = document.getElementById();
    
    //refresh da pagina e envio
}

function Contador(){

}

function levaIG(){

    var btn=document.getElementById("btn1");
    
    var contNamoro=document.getElementById("blocoPedidoNamoro");

    contNamoro.style.display="none";
    contNamoro.parentNode.removeChild(contNamoro);


    //vai para o IG


    //contNamoro.style.transitionDuration=
    
    //setTimeout();

    //<p>Boao de enviar pedido ao instagram</p>
    //<a href="https://www.instagram.com/limaapedro"> Clique e seja feliz x)</a>
}