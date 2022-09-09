<textarea>
    function encriptar() {
        var mensaje= document.getElementById("input").value;
        var texto= mensaje.replace(/i/igm, "imes");
        var texto= texto.replace(/a/igm, "ai");
        var texto= texto.replace(/e/igm, "enter"); 
        var texto= texto.replace(/o/igm, "ober");
        var texto= texto.replace(/u/igm, "ufat");
        document.getElementById("resultado").innertHTML = texto
        document.querySelector('.area-resultado > igm').style
        document.getElementById("input").value="";
        document.querySelector('.caja-textos').style.display = 
        document.getElementById("resultado").style.display=
        document.getElementById("copiar").style.display = "input"    
    }

    function desencriptar() {
         var mensaje= document.getElementById("input").value;
         var texto= mensaje.replace(/imes/igm, "i");
         var texto= texto.replace(/ai/igm, "a");
         var texto= texto.replace(/enter/igm, "e"); 
         var texto= texto.replace(/ober/igm, "o");
         var texto= texto.replace(/ufat/igm, "u");
         document.getElementById("resultado").innertHTML = texto
         document.querySelector('.area-resultado > igm').style
         document.getElementById("input").value="";
         document.querySelector('.caja-textos').style.display = 
         document.getElementById("resultado").style.display=
         document.getElementById("copiar").style.display = "input"   
    }
</textarea>