//Hace que las letras desaparescan
  $(document).ready(function(){
    $('.abc').click(function(){
      $(this).hide(600);
    });
  });
//sonido a los botones
$(".abc").hover(
    function audio1() {
     boton.play()
    }
 );

//Palabras por descubrir
var sobreviviente = ["S","O","B","R","E","V","I","V","I","E","N","T","E"];
var apocalipsis =["A","P","O","C","A","L","I","P","S","I","S"];
var escondite = ["E","S","C","O","N","D","I","T","E"];
var peligro = ["P","E","L","I","G","R","O"];
var Zombie = ["Z","O","M","B","I","E"];
var rifle = ["R","I","F","L","E"];
var corre = ["C","O","R","R","E"];


var random; //Numero al azar para seleccionar palabra
var Letra; //Adopta el valor de la letra presionada
var cadena; //Adopta el array de la palabra seleccionada

function juego(){ //Elige la palabra y reincicia el juego

//Reinicia el juego
  ganaste = 0;
  error = 0;
  cadena = 0;
  $('.old').css ("display", "none");
  $( ".etapas" ).css( "display", "none" );
  $( ".abc" ).css( "display", "block" );
  $("div").remove('.borrables');
  $('#van').css("opacity",1);
  $('#van').css("left","0");

//Pone un viejito al azar como protagonista
  var personaje;
    personaje = Math.round(Math.random()*2);
      if (personaje === 1) {
        $("#oldman").css("display", "block");
      }else if(personaje === 0){
        $("#oldman2").css("display", "block");
      }else if(personaje === 2){
        $("#oldman3").css("display", "block");
      };


//Elige la palabra
  random = Math.round(Math.random()*6);
  console.log(random);

  switch (random) {
    case 0:
      cadena = sobreviviente; //Se adapota el array seleccionado en cadena
    for (var i = 0; i < cadena.length; i++) {//Crea tantos divs como el largo del array
      var espacios = document.createElement("div");
      document.getElementById("Palabra").appendChild(espacios);//Los coloca en "#Palabra"
      espacios.id="div" + i; //Para identificar donde poner las letras
      espacios.className="borrables"; //Se van a borrar al iniciar un nuevo juego
    }
          break;
    case 1:
      cadena = apocalipsis;
      for (var i = 0; i < cadena.length; i++) {
        var espacios = document.createElement("div");
        document.getElementById("Palabra").appendChild(espacios);
        espacios.id="div" + i;
        espacios.className="borrables"
      }
            break;
    case 2:
    cadena = escondite;
    for (var i = 0; i < cadena.length; i++) {
      var espacios = document.createElement("div");
      document.getElementById("Palabra").appendChild(espacios);
      espacios.id="div" + i;
      espacios.className="borrables"
    }
            break;
    case 3:
    cadena = Zombie;
    for (var i = 0; i < cadena.length; i++) {
      var espacios = document.createElement("div");
      document.getElementById("Palabra").appendChild(espacios);
      espacios.id="div" + i;
      espacios.className="borrables"
    }
            break;
    case 4:
    cadena = rifle;
    for (var i = 0; i < cadena.length; i++) {
      var espacios = document.createElement("div");
      document.getElementById("Palabra").appendChild(espacios);
      espacios.id="div" + i;
      espacios.className="borrables"
    }
            break;
    case 5:
    cadena = corre;
    for (var i = 0; i < cadena.length; i++) {
      var espacios = document.createElement("div");
      document.getElementById("Palabra").appendChild(espacios);
      espacios.id="div" + i;
      espacios.className="borrables"
    }
            break;
    case 6:
    cadena = peligro;
    for (var i = 0; i < cadena.length; i++) {
    var espacios = document.createElement("div");
    document.getElementById("Palabra").appendChild(espacios);
    espacios.id="div" + i;
    espacios.className="borrables"
            }
                    break;
  }
}

    var error = 0; //Contador de respuestas malas
    var ganaste = 0;
function respuesta(){ //Marca que letra se apretó y si coincide con la palabra seleccionada

  Letra = document.querySelector('input[name=letra]:checked').value; //Adopta el valor de la letra que se apretó


      if (cadena.indexOf(Letra) != -1 ) { //Valida si la letra presionada esta en el array de la palabra a descubrir
        console.log(cadena.indexOf(Letra));


          for (var i = 0; i < cadena.length; i++) {
            if (Letra === cadena[i]) {
              document.getElementById("div" + i).innerHTML = Letra;
              ganaste++;
              $(".abc").click(correcta.play());
              if (cadena.length === ganaste) { //Acciones al ganar
                $('#mensaje2').css("display", "block");
                $('#oldman').css("display","none");
                $('#oldman2').css("display","none");
                $('#oldman3').css("display","none");
                $('#Scooby').css("display","none");
                $(".abc").click(gano.play());
                $('#van').animate({left:'85%',opacity:0},6000);
              }
            }
          }

      }else if (error === 0){ //Si se elige mal aparecen zombies
        $( "#Etapa1" ).css( "display", "block" );
        $(".abc").click(fail.play());
        error++;
      }else if (error === 1){
        $( "#Etapa2" ).css( "display", "block" );
        $(".abc").click(fail.play());
        error++;
      }else if (error === 2){
        $( "#Etapa3" ).css( "display", "block" );
        $("#Scooby").css("display", "block");
        $(".abc").click(fail.play());
        error++;
      }else if (error === 3){
        $( "#Etapa4" ).css( "display", "block" );
        $(".abc").click(fail.play());
        error++;
      }else if (error === 4){
        $( "#Etapa5" ).css( "display", "block" );
        $(".abc").click(fail.play());
        error++;
      }else if (error === 5){
        $( "#Etapa6" ).css( "display", "block" );
        $(".abc").click(fail.play());
        error++;
      }else if (error === 6){
        $( "#Etapa7" ).css( "display", "block" );
        $(".abc").click(fail.play());
        error++;
      }else if (error === 7){ //Acciones al perder
        $( "#Etapa8" ).css( "display", "block" );
        $( "#mensaje" ).css( "display", "block" );
        $(".abc").click(perdio.play());
        error++;
      }
    }
