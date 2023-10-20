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

    var danca1 = document.getElementById("idr1");
    var p2 = document.getElementById("idr5");
    var c4 = document.getElementById("idr11");
    var g4 = document.getElementById("idr15");
    var h4 = document.getElementById("idr18")
    
    console.log(danca1);
    console.log(danca1.checked);
    console.log(danca1.value);

    console.log(p2.checked);
    console.log(c4.checked);

    console.log(g4.checked);

    if(danca1.checked && p2.checked && c4.checked && g4.checked && h4.checked){

        alert(" *** PARABENS BEBEZONA x)  VOCE ACERTOU ******");
        // setTimeout(function() {
        //     window.location.href = "/pedido.html";
        // }, 1000);
        window.location.href= "https://raimos.netlify.app/pagina2.html";
        //alert(" *** PARABENS BEBEZONA x)  VOCE ACERTOU ******");
    }
    else{
        alert("Resposta Errada, tente novamente.x/")
    }


    
    //refresh da pagina e envio
}

function Contador(){

}

function enviaPedido(){
    window.location.href= "https://raimos.netlify.app/pedido.html";
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
