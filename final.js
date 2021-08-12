
var checkvianadocastelo = document.getElementById("vianadocastelo");
var checkvalença = document.getElementById("valença");
var checkparedesdecoura = document.getElementById("paredesdecoura");
var checkmonçao = document.getElementById("monçao");
var checkmelgaço = document.getElementById("melgaço");
var checkpontedelima = document.getElementById("pontedelima");
var checkarcosdevaldevez = document.getElementById("arcosdevaldevez");
var checkpontedabarca = document.getElementById("pontedabarca");
var checkcaminha = document.getElementById("caminha");
var checkcerveira = document.getElementById("cerveira");
var checktrilho = document.getElementById("trilho");
var checkpraia = document.getElementById("praia");
var checkdesporto = document.getElementById("desporto");
var checkmonumento = document.getElementById("monumento");
var checkpiquenique = document.getElementById("piquenique");
var checkhistoria = document.getElementById("historia");
let btnGet = document.querySelector('#btnbtn');
let myTable = document.querySelector('#table');
var checkmar = document.getElementById("marcheck");
var checkrio = document.getElementById("riocheck");
var checkbaixa = document.getElementById("baixacheck");
var checkmoderada = document.getElementById("moderadacheck");
var checkalta = document.getElementById("altacheck");

//function para checkar apenas um checkbox por grupo
//grupo localidade
function check(input)
{

  var checkboxes = document.getElementsByClassName("radioCheck");

  for(var i = 0; i < checkboxes.length; i++)
  {
    //uncheck all
    if(checkboxes[i].checked == true)
    {
      checkboxes[i].checked = false;
    }
  }

  //set checked of clicked object
  if(input.checked == true)
  {
    input.checked = false;
  }
  else
  {
    input.checked = true;
  }
}

//function slideshow
var slideIndex = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6",
"mySlides7", "mySlides8", "mySlides9", "mySlides10", "mySlides11", "mySlides12", "mySlides13",
"mySlides14", "mySlides15", "mySlides16", "mySlides17", "mySlides18", "mySlides19", "mySlides20",
"mySlides21", "mySlides22", "mySlides23", "mySlides24", "mySlides25", "mySlides26", "mySlides27",
"mySlides28", "mySlides29", "mySlides30", "mySlides31", "mySlides32", "mySlides33", "mySlides34",
"mySlides35", "mySlides36", "mySlides37", "mySlides38", "mySlides39", "mySlides40", "mySlides41"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);
showSlides(1, 12);
showSlides(1, 13);
showSlides(1, 14);
showSlides(1, 15);
showSlides(1, 16);
showSlides(1, 17);
showSlides(1, 18);
showSlides(1, 19);
showSlides(1, 20);
showSlides(1, 21);
showSlides(1, 22);
showSlides(1, 23);
showSlides(1, 24);
showSlides(1, 25);
showSlides(1, 26);
showSlides(1, 27);
showSlides(1, 28);
showSlides(1, 29);
showSlides(1, 30);
showSlides(1, 31);
showSlides(1, 32);
showSlides(1, 33);
showSlides(1, 34);
showSlides(1, 35);
showSlides(1, 36);
showSlides(1, 37);
showSlides(1, 38);
showSlides(1, 39);
showSlides(1, 40);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}

//para cada Localidade-Trilho
//Viana do Castelo-Trilho

btnGet.addEventListener('click', () => {


if ((checkvianadocastelo.checked == true) && (checktrilho.checked == true)){


      document.getElementById("trilhodamontaria").style.display = "block";
      document.getElementById("trilhodopincho").style.display = "block";
      document.getElementById("trilhodoscanosdeagua").style.display = "block";
      document.getElementById("trilhodossobreiros").style.display = "block";
      document.getElementById("trilhodospastores").style.display = "block";
      document.getElementById("trilhopordosol").style.display = "block";


  }

});
//Paredes de Coura-Trilho

btnGet.addEventListener('click', () => {


if ((checkparedesdecoura.checked == true) && (checktrilho.checked == true)){
    return;
  }

});
//Ponte de Lima-Trilho

btnGet.addEventListener('click', () => {


if ((checkpontedelima.checked == true) && (checktrilho.checked == true)){

      document.getElementById("trilholagoadebertiandos").style.display = "block";
      document.getElementById("percursodastapadas").style.display = "block";
      document.getElementById("percursodasveigas").style.display = "block";

  }

});
//Arcos de Valdevez-Trilho

btnGet.addEventListener('click', () => {


if ((checkarcosdevaldevez.checked == true) && (checktrilho.checked == true)){

      document.getElementById("passadiçossistelo").style.display = "block";
      document.getElementById("trilhofojodacabrita").style.display = "block";
      document.getElementById("ecoviadeermelo").style.display = "block";

  }

});

//Ponte da Barca-Trilho

btnGet.addEventListener('click', () => {


if ((checkpontedabarca.checked == true) && (checktrilho.checked == true)){

      document.getElementById("trilhoentreambososrios").style.display = "block";

  }

});
//Melgaço-Trilho

btnGet.addEventListener('click', () => {


if ((checkmelgaço.checked == true) && (checktrilho.checked == true)){

      document.getElementById("castrolaboreiroacortegada").style.display = "block";

  }

});
//para cada Localidade-Praia
//Viana do Castelo-Praia

btnGet.addEventListener('click', () => {


if ((checkvianadocastelo.checked == true) && (checkpraia.checked == true)){
      if ((checkvianadocastelo.checked == true) && (checkrio.checked == true)){
          return;}
      if ((checkvianadocastelo.checked == true) && (checkmar.checked == true)){
          return;}
      document.getElementById("praiadocabedelo").style.display = "block";
      document.getElementById("praiadaarda").style.display = "block";
    }
});


//Viana do Castelo-Mar

btnGet.addEventListener('click', () => {


  if ((checkvianadocastelo.checked == true) && (checkmar.checked == true)){
        if ((checkvianadocastelo.checked == true) && (checkrio.checked == true)){
            return;}
        document.getElementById("praiadocabedelo").style.display = "block";
        document.getElementById("praiadaarda").style.display = "block";
      }
  });

//Viana do Castelo-Mar/Rio
btnGet.addEventListener('click', () => {


if ((checkvianadocastelo.checked == true) && (checkrio.checked == true) && (checkmar.checked == true)){
  document.getElementById("praiadocabedelo").style.display = "block";
  document.getElementById("praiadaarda").style.display = "block";
    }
});

//Viana do Castelo-Rio

btnGet.addEventListener('click', () => {


if ((checkvianadocastelo.checked == true) && (checkrio.checked == true)){
      if ((checkvianadocastelo.checked == true) && (checkmar.checked == true)){
          return;}
    }
});
//Paredes de Coura-Praia

btnGet.addEventListener('click', () => {


if ((checkparedesdecoura.checked == true) && (checkpraia.checked == true)){
      if ((checkparedesdecoura.checked == true) && (checkrio.checked == true)){
          return;}
      if ((checkparedesdecoura.checked == true) && (checkmar.checked == true)){
          return;}
      document.getElementById("praiafluvialdetaboao").style.display = "block";
    }
});


//Paredes de Coura-Mar

btnGet.addEventListener('click', () => {


if ((checkparedesdecoura.checked == true) && (checkmar.checked == true)){
      if ((checkparedesdecoura.checked == true) && (checkrio.checked == true)){
          return;}
      if ((checkparedesdecoura.checked == true) && (checkrio.checked == true)){
          return;}
    }
});

//Paredes de Coura-Rio
btnGet.addEventListener('click', () => {


if ((checkparedesdecoura.checked == true) && (checkrio.checked == true)){
      if ((checkparedesdecoura.checked == true) && (checkmar.checked == true)){
          return;}
      if ((checkparedesdecoura.checked == true) && (checkmar.checked == true)){
          return;}
      document.getElementById("praiafluvialdetaboao").style.display = "block";
    }
});

//Paredes de Coura-Mar/Rio
btnGet.addEventListener('click', () => {


if ((checkparedesdecoura.checked == true) && (checkrio.checked == true) && (checkmar.checked == true)){
  document.getElementById("praiafluvialdetaboao").style.display = "block";
    }
});



//Ponte de Lima-Praia

btnGet.addEventListener('click', () => {


if ((checkpontedelima.checked == true) && (checkpraia.checked == true)){
      if ((checkpontedelima.checked == true) && (checkrio.checked == true)){
          return;}
      if ((checkpontedelima.checked == true) && (checkmar.checked == true)){
          return;}
      document.getElementById("praiafluvialdaazenhadeestoraos").style.display = "block";
    }
});


//Ponte de Lima-Mar

btnGet.addEventListener('click', () => {


if ((checkpontedelima.checked == true) && (checkmar.checked == true)){
      if ((checkpontedelima.checked == true) && (checkrio.checked == true)){
          return;}
      if ((checkpontedelima.checked == true) && (checkrio.checked == true)){
          return;}
    }
});

//Ponte de Lima-Rio
btnGet.addEventListener('click', () => {


if ((checkpontedelima.checked == true) && (checkrio.checked == true)){
      if ((checkpontedelima.checked == true) && (checkmar.checked == true)){
          return;}
      if ((checkpontedelima.checked == true) && (checkmar.checked == true)){
          return;}
      document.getElementById("praiafluvialdaazenhadeestoraos").style.display = "block";
    }
});


//Ponte de Lima-Mar/Rio
btnGet.addEventListener('click', () => {


if ((checkpontedelima.checked == true) && (checkrio.checked == true) && (checkmar.checked == true)){
  document.getElementById("praiafluvialdaazenhadeestoraos").style.display = "block";
    }
});

//Arcos de Valdevez-Praia

btnGet.addEventListener('click', () => {


if ((checkarcosdevaldevez.checked == true) && (checkpraia.checked == true)){
      if ((checkarcosdevaldevez.checked == true) && (checkrio.checked == true)){
          return;}
      if ((checkarcosdevaldevez.checked == true) && (checkmar.checked == true)){
          return;}
      document.getElementById("praiafluvialdavaleta").style.display = "block";
    }
});


//Arcos de Valdevez-Mar

btnGet.addEventListener('click', () => {


if ((checkarcosdevaldevez.checked == true) && (checkmar.checked == true)){
      if ((checkarcosdevaldevez.checked == true) && (checkrio.checked == true)){
          return;}
      if ((checkarcosdevaldevez.checked == true) && (checkrio.checked == true)){
          return;}
    }
});

//Arcos de Valdevez-Rio
btnGet.addEventListener('click', () => {


if ((checkarcosdevaldevez.checked == true) && (checkrio.checked == true)){
      if ((checkarcosdevaldevez.checked == true) && (checkmar.checked == true)){
          return;}
      if ((checkarcosdevaldevez.checked == true) && (checkmar.checked == true)){
          return;}
      document.getElementById("praiafluvialdavaleta").style.display = "block";
    }
});

//Arcos de Valdevez-Mar/Rio
btnGet.addEventListener('click', () => {


if ((checkarcosdevaldevez.checked == true) && (checkrio.checked == true) && (checkmar.checked == true)){
  document.getElementById("praiafluvialdavaleta").style.display = "block";
    }
});

//Ponte da Barca-Praia

btnGet.addEventListener('click', () => {


if ((checkpontedabarca.checked == true) && (checkpraia.checked == true)){
      if ((checkpontedabarca.checked == true) && (checkrio.checked == true)){
          return;}
      if ((checkpontedabarca.checked == true) && (checkmar.checked == true)){
          return;}
    }
});


//Ponte da Barca-Mar

btnGet.addEventListener('click', () => {


if ((checkpontedabarca.checked == true) && (checkmar.checked == true)){
      if ((checkpontedabarca.checked == true) && (checkrio.checked == true)){
          return;}
      if ((checkpontedabarca.checked == true) && (checkrio.checked == true)){
          return;}
    }
});

//Ponte da Barca-Rio
btnGet.addEventListener('click', () => {


if ((checkpontedabarca.checked == true) && (checkrio.checked == true)){
      if ((checkpontedabarca.checked == true) && (checkmar.checked == true)){
          return;}
      if ((checkpontedabarca.checked == true) && (checkmar.checked == true)){
          return;}
    }
});

//Ponte da Barca-Mar/Rio
btnGet.addEventListener('click', () => {


if ((checkpontedabarca.checked == true) && (checkrio.checked == true) && (checkmar.checked == true)){
    }
});

//Cerveira-Praia

btnGet.addEventListener('click', () => {


if ((checkcerveira.checked == true) && (checkpraia.checked == true)){
      if ((checkcerveira.checked == true) && (checkrio.checked == true)){
          return;}
      if ((checkcerveira.checked == true) && (checkmar.checked == true)){
          return;}
          document.getElementById("praiafluvialdalenta").style.display = "block";
    }
});


//Cerveira-Mar

btnGet.addEventListener('click', () => {


if ((checkcerveira.checked == true) && (checkmar.checked == true)){
      if ((checkcerveira.checked == true) && (checkrio.checked == true)){
          return;}
      if ((checkcerveira.checked == true) && (checkrio.checked == true)){
          return;}
    }
});

//Cerveira-Rio
btnGet.addEventListener('click', () => {


if ((checkcerveira.checked == true) && (checkrio.checked == true)){
      if ((checkcerveira.checked == true) && (checkmar.checked == true)){
          return;}
      if ((checkcerveira.checked == true) && (checkmar.checked == true)){
          return;}
          document.getElementById("praiafluvialdalenta").style.display = "block";
    }
});

//Cerveira-Mar/Rio
btnGet.addEventListener('click', () => {


if ((checkcerveira.checked == true) && (checkrio.checked == true) && (checkmar.checked == true)){
  document.getElementById("praiafluvialdalenta").style.display = "block";
    }
});



//Caminha-Praia

btnGet.addEventListener('click', () => {


if ((checkcaminha.checked == true) && (checkpraia.checked == true)){
      if ((checkcaminha.checked == true) && (checkrio.checked == true)){
          return;}
      if ((checkcaminha.checked == true) && (checkmar.checked == true)){
          return;}
      document.getElementById("praiavilarmouros").style.display = "block";
      document.getElementById("praiamoledo").style.display = "block";
      document.getElementById("praiafozminho").style.display = "block";
      document.getElementById("praiafortecao").style.display = "block";
      document.getElementById("praiapinheiros").style.display = "block";
    }
});


//Caminha-Mar

btnGet.addEventListener('click', () => {


if ((checkcaminha.checked == true) && (checkmar.checked == true)){
      if ((checkcaminha.checked == true) && (checkrio.checked == true)){
          return;}
      if ((checkcaminha.checked == true) && (checkrio.checked == true)){
          return;}
      document.getElementById("praiamoledo").style.display = "block";
      document.getElementById("praiafozminho").style.display = "block";
      document.getElementById("praiafortecao").style.display = "block";
    }
});

//Caminha-Rio
btnGet.addEventListener('click', () => {


if ((checkcaminha.checked == true) && (checkrio.checked == true)){
      if ((checkcaminha.checked == true) && (checkmar.checked == true)){
          return;}
      if ((checkcaminha.checked == true) && (checkmar.checked == true)){
          return;}
      document.getElementById("praiavilarmouros").style.display = "block";
      document.getElementById("praiapinheiros").style.display = "block";;
    }
});

//Caminha-Mar/Rio
btnGet.addEventListener('click', () => {


if ((checkcaminha.checked == true) && (checkrio.checked == true) && (checkmar.checked == true)){
  document.getElementById("praiavilarmouros").style.display = "block";
  document.getElementById("praiamoledo").style.display = "block";
  document.getElementById("praiafozminho").style.display = "block";
  document.getElementById("praiafortecao").style.display = "block";
  document.getElementById("praiapinheiros").style.display = "block";
    }
});

//para cada Localidade-Piquenique
//viana - piquenique

btnGet.addEventListener('click', () => {


if ((checkvianadocastelo.checked == true) && (checkpiquenique.checked == true)){

      document.getElementById("saojoao").style.display = "block";
      document.getElementById("merendassantaluzia").style.display = "block";
      document.getElementById("merendasvalinha").style.display = "block";
      document.getElementById("merendasmontaria").style.display = "block";
      document.getElementById("merendaslanheses").style.display = "block";


  }

});
//Paredes de Coura-Piquenique

btnGet.addEventListener('click', () => {


if ((checkparedesdecoura.checked == true) && (checkpiquenique.checked == true)){
      return;
  }

});
//Ponte de Lima-Piquenique

btnGet.addEventListener('click', () => {


if ((checkpontedelima.checked == true) && (checkpiquenique.checked == true)){

      document.getElementById("merendasboamorte").style.display = "block";

  }

});
//Ponte da Barca-Piquenique

btnGet.addEventListener('click', () => {


if ((checkpontedabarca.checked == true) && (checkpraia.checked == true)){


  }

});

//Valença-Piquenique

btnGet.addEventListener('click', () => {


if ((checkvalença.checked == true) && (checkpiquenique.checked == true)){

      document.getElementById("merendastaiao").style.display = "block";


  }

});


//Caminha-Piquenique

btnGet.addEventListener('click', () => {


if ((checkcaminha.checked == true) && (checkpiquenique.checked == true)){

      document.getElementById("merendasvilarmouros").style.display = "block";


  }

});

//Para cada Localidade
//Viana do Castelo


btnGet.addEventListener('click', () => {


if (checkvianadocastelo.checked == true){
    //  if ((checkvianadocastelo.checked == true) && (checkmonumento.checked == true)){
      //    return;}
      if ((checkvianadocastelo.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkvianadocastelo.checked == true) && (checkpiquenique.checked == true)){
          return;}
  //    if ((checkvianadocastelo.checked == true) && (checkhistoria.checked == true)){
        //  return;}
    //  if ((checkvianadocastelo.checked == true) && (checkdesporto.checked == true)){
      //    return;}
      if ((checkvianadocastelo.checked == true) && (checktrilho.checked == true)){
          return;}
document.getElementById("santaluzia").style.display = "block";
document.getElementById("lagoadaesturranha").style.display = "block";
document.getElementById("trilhodamontaria").style.display = "block";
document.getElementById("trilhodopincho").style.display = "block";
document.getElementById("trilhodoscanosdeagua").style.display = "block";
document.getElementById("trilhodossobreiros").style.display = "block";
document.getElementById("trilhodospastores").style.display = "block";
document.getElementById("saojoao").style.display = "block";
document.getElementById("praiadocabedelo").style.display = "block";
document.getElementById("praiadaarda").style.display = "block";
document.getElementById("merendassantaluzia").style.display = "block";
document.getElementById("merendasvalinha").style.display = "block";
document.getElementById("trilhopordosol").style.display = "block";
document.getElementById("merendasmontaria").style.display = "block";
document.getElementById("merendaslanheses").style.display = "block";

  }

});
//Para cada Localidade
//Ponte de Lima


btnGet.addEventListener('click', () => {


if (checkpontedelima.checked == true){

    //  if ((checkpontedelima.checked == true) && (checkmonumento.checked == true)){
      //    return;}
      if ((checkpontedelima.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkpontedelima.checked == true) && (checkpiquenique.checked == true)){
          return;}
//      if ((checkpontedelima.checked == true) && (checkhistoria.checked == true)){
  //        return;}
//      if ((checkpontedelima.checked == true) && (checkdesporto.checked == true)){
//          return;}
      if ((checkpontedelima.checked == true) && (checktrilho.checked == true)){
          return;}
          document.getElementById("trilholagoadebertiandos").style.display = "block";
          document.getElementById("praiafluvialdaazenhadeestoraos").style.display = "block";
          document.getElementById("percursodasveigas").style.display = "block";
          document.getElementById("percursodastapadas").style.display = "block";
          document.getElementById("praiapedonegro").style.display = "block";
          document.getElementById("merendaslanheses").style.display = "block";
          document.getElementById("merendasboamorte").style.display = "block"

  }

});
//Paredes de Coura


btnGet.addEventListener('click', () => {


if (checkparedesdecoura.checked == true){

  //    if ((checkparedesdecoura.checked == true) && (checkmonumento.checked == true)){
  //        return;}
      if ((checkparedesdecoura.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkparedesdecoura.checked == true) && (checkpiquenique.checked == true)){
          return;}
//      if ((checkparedesdecoura.checked == true) && (checkhistoria.checked == true)){
  //        return;}
//      if ((checkparedesdecoura.checked == true) && (checkdesporto.checked == true)){
  //        return;}
      if ((checkparedesdecoura.checked == true) && (checktrilho.checked == true)){
          return;}
          document.getElementById("praiafluvialdetaboao").style.display = "block";

  }

});
//Melgaço


btnGet.addEventListener('click', () => {


if (checkmelgaço.checked == true){

//      if ((checkmelgaço.checked == true) && (checkmonumento.checked == true)){
//          return;}
      if ((checkmelgaço.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkmelgaço.checked == true) && (checkpiquenique.checked == true)){
          return;}
//      if ((checkmelgaço.checked == true) && (checkhistoria.checked == true)){
//          return;}
  //    if ((checkmelgaço.checked == true) && (checkdesporto.checked == true)){
//          return;}
      if ((checkmelgaço.checked == true) && (checktrilho.checked == true)){
          return;}
          document.getElementById("castrolaboreiroacortegada").style.display = "block";

  }

});
//Ponte da Barca


btnGet.addEventListener('click', () => {


if (checkpontedabarca.checked == true){

//      if ((checkpontedabarca.checked == true) && (checkmonumento.checked == true)){
//          return;}
      if ((checkpontedabarca.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkpontedabarca.checked == true) && (checkpiquenique.checked == true)){
          return;}
//      if ((checkpontedabarca.checked == true) && (checkhistoria.checked == true)){
//          return;}
//      if ((checkpontedabarca.checked == true) && (checkdesporto.checked == true)){
//          return;}
      if ((checkpontedabarca.checked == true) && (checktrilho.checked == true)){
          return;}
          document.getElementById("trilhoentreambososrios").style.display = "block";

  }

});
//Arcos de Valdevez


btnGet.addEventListener('click', () => {


if (checkarcosdevaldevez.checked == true){

//      if ((checkarcosdevaldevez.checked == true) && (checkmonumento.checked == true)){
//          return;}
      if ((checkarcosdevaldevez.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkarcosdevaldevez.checked == true) && (checkpiquenique.checked == true)){
          return;}
//      if ((checkarcosdevaldevez.checked == true) && (checkhistoria.checked == true)){
//          return;}
//      if ((checkarcosdevaldevez.checked == true) && (checkdesporto.checked == true)){
//        return;}
      if ((checkarcosdevaldevez.checked == true) && (checktrilho.checked == true)){
          return;}
          document.getElementById("praiafluvialdavaleta").style.display = "block";
          document.getElementById("trilhofojodacabrita").style.display = "block";
          document.getElementById("ecoviadeermelo").style.display = "block";
          document.getElementById("passadiçossistelo").style.display = "block";
          document.getElementById("praiagondariz").style.display = "block";
          document.getElementById("trilhobrandassistelo").style.display = "block";


  }

});
//Monção


btnGet.addEventListener('click', () => {


if (checkmonçao.checked == true){

//      if ((checkmonçao.checked == true) && (checkmonumento.checked == true)){
//          return;}
      if ((checkmonçao.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkmonçao.checked == true) && (checkpiquenique.checked == true)){
          return;}
//      if ((checkmonçao.checked == true) && (checkhistoria.checked == true)){
//          return;}
//      if ((checkmonçao.checked == true) && (checkdesporto.checked == true)){
//          return;}
      if ((checkmonçao.checked == true) && (checktrilho.checked == true)){
          return;}
          document.getElementById("praiapinheiros").style.display = "block";
  }

});
//Valença


btnGet.addEventListener('click', () => {


if (checkvalença.checked == true){

//      if ((checkvalença.checked == true) && (checkmonumento.checked == true)){
//          return;}
      if ((checkvalença.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkvalença.checked == true) && (checkpiquenique.checked == true)){
          return;}
//      if ((checkvalença.checked == true) && (checkhistoria.checked == true)){
//          return;}
//      if ((checkvalença.checked == true) && (checkdesporto.checked == true)){
//          return;}
      if ((checkvalença.checked == true) && (checktrilho.checked == true)){
          return;}

  }

});
//Cerveira


btnGet.addEventListener('click', () => {


if (checkcerveira.checked == true){

//      if ((checkcerveira.checked == true) && (checkmonumento.checked == true)){
//          return;}
      if ((checkcerveira.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkcerveira.checked == true) && (checkpiquenique.checked == true)){
          return;}
//      if ((checkcerveira.checked == true) && (checkhistoria.checked == true)){
//          return;}
//      if ((checkcerveira.checked == true) && (checkdesporto.checked == true)){
//          return;}
      if ((checkcerveira.checked == true) && (checktrilho.checked == true)){
          return;}
          document.getElementById("praiafluvialdalenta").style.display = "block";

  }

});
//Caminha


btnGet.addEventListener('click', () => {


if (checkcaminha.checked == true){

//      if ((checkcaminha.checked == true) && (checkmonumento.checked == true)){
//          return;}
      if ((checkcaminha.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkcaminha.checked == true) && (checkpiquenique.checked == true)){
          return;}
//      if ((checkcaminha.checked == true) && (checkhistoria.checked == true)){
//          return;}
//      if ((checkcaminha.checked == true) && (checkdesporto.checked == true)){
//          return;}
      if ((checkcaminha.checked == true) && (checktrilho.checked == true)){
          return;}
          document.getElementById("merendasnossasenhoracabeça").style.display = "block";
          document.getElementById("praiavilarmouros").style.display = "block";
          document.getElementById("praiafortecao").style.display = "block";
          document.getElementById("praiamoledo").style.display = "block";
          document.getElementById("praiafozminho").style.display = "block";
          document.getElementById("merendasvilarmouros").style.display = "block";

  }

});


//Para cada actividade
//Trilho


btnGet.addEventListener('click', () => {


if (checktrilho.checked == true){

      if ((checktrilho.checked == true) && (checkvianadocastelo.checked == true)){
          return;}
      if ((checktrilho.checked == true) && (checkparedesdecoura.checked == true)){
          return;}
      if ((checktrilho.checked == true) && (checkpontedelima.checked == true)){
          return;}
      if ((checktrilho.checked == true) && (checkpontedabarca.checked == true)){
          return;}
      if ((checktrilho.checked == true) && (checkmelgaço.checked == true)){
          return;}
      if ((checktrilho.checked == true) && (checkarcosdevaldevez.checked == true)){
          return;}
      if ((checktrilho.checked == true) && (checkmonçao.checked == true)){
          return;}
      if ((checktrilho.checked == true) && (checkvalença.checked == true)){
          return;}
      if ((checktrilho.checked == true) && (checkcerveira.checked == true)){
          return;}
      if ((checktrilho.checked == true) && (checkcaminha.checked == true)){
          return;}
      if ((checktrilho.checked == true) && (checkbaixa.checked == true)){
          return;
              }
      if ((checktrilho.checked == true) && (checkmoderada.checked == true)){
          return;
              }
      if ((checktrilho.checked == true) && (checkalta.checked == true)){
          return;
                      }
          document.getElementById("passadiçossistelo").style.display = "block";
          document.getElementById("trilholagoadebertiandos").style.display = "block";
          document.getElementById("trilhofojodacabrita").style.display = "block";
          document.getElementById("percursodastapadas").style.display = "block";
          document.getElementById("percursodasveigas").style.display = "block";
          document.getElementById("castrolaboreiroacortegada").style.display = "block";
          document.getElementById("trilhodamontaria").style.display = "block";
          document.getElementById("ecoviadeermelo").style.display = "block";
          document.getElementById("trilhodopincho").style.display = "block";
          document.getElementById("trilhodoscanosdeagua").style.display = "block";
          document.getElementById("trilhodossobreiros").style.display = "block";
          document.getElementById("trilhodospastores").style.display = "block";
          document.getElementById("trilhopreguiça").style.display = "block";
          //document.getElementById("trilhofenda").style.display = "block";
          //document.getElementById("trilhosetelagoas").style.display = "block";
          //document.getElementById("trilhomisarela").style.display = "block";
          document.getElementById("trilhobrandassistelo").style.display = "block";
          document.getElementById("trilhopordosol").style.display = "block";
          document.getElementById("trilhoentreambososrios").style.display = "block";
  }

});


//Baixa


btnGet.addEventListener('click', () => {


if (checkbaixa.checked == true){
  if ((checkbaixa.checked == true) && (checkvianadocastelo.checked == true)){
      return;}
  if ((checkbaixa.checked == true) && (checkpontedelima.checked == true)){
      return;}
  if ((checkbaixa.checked == true) && (checkcaminha.checked == true)){
      return;}
      if ((checkbaixa.checked == true) && (checkcerveira.checked == true)){
          return;}
          if ((checkbaixa.checked == true) && (checkmonçao.checked == true)){
              return;}
              if ((checkbaixa.checked == true) && (checkvalença.checked == true)){
                  return;}
                  if ((checkbaixa.checked == true) && (checkarcosdevaldevez.checked == true)){
                      return;}
                      if ((checkbaixa.checked == true) && (checkpontedabarca.checked == true)){
                          return;}
                          if ((checkbaixa.checked == true) && (checkmelgaço.checked == true)){
                              return;}
                              if ((checkbaixa.checked == true) && (checkparedesdecoura.checked == true)){
                                  return;}



console.log('aaa');
          document.getElementById("percursodasveigas").style.display = "block";
          document.getElementById("percursodastapadas").style.display = "block";
          document.getElementById("ecoviadeermelo").style.display = "block";
          document.getElementById("trilholagoadebertiandos").style.display = "block";
          document.getElementById("trilhodoscanosdeagua").style.display = "block";
          document.getElementById("trilhobrandassistelo").style.display = "block";
          document.getElementById("trilhoentreambososrios").style.display = "block";
    }
  }

);

//Moderada


btnGet.addEventListener('click', () => {


if (checkmoderada.checked == true){
  if ((checkmoderada.checked == true) && (checkvianadocastelo.checked == true)){
      return;}
  if ((checkmoderada.checked == true) && (checkpontedelima.checked == true)){
      return;}
  if ((checkmoderada.checked == true) && (checkcaminha.checked == true)){
      return;}
      if ((checkmoderada.checked == true) && (checkcerveira.checked == true)){
          return;}
          if ((checkmoderada.checked == true) && (checkmonçao.checked == true)){
              return;}
              if ((checkmoderada.checked == true) && (checkvalença.checked == true)){
                  return;}
                  if ((checkmoderada.checked == true) && (checkarcosdevaldevez.checked == true)){
                      return;}
                      if ((checkmoderada.checked == true) && (checkpontedabarca.checked == true)){
                          return;}
                          if ((checkmoderada.checked == true) && (checkmelgaço.checked == true)){
                              return;}
                              if ((checkmoderada.checked == true) && (checkparedesdecoura.checked == true)){
                                  return;}



console.log('aaa');
          document.getElementById("trilhofojodacabrita").style.display = "block";
          document.getElementById("trilhodamontaria").style.display = "block";
          document.getElementById("passadicosdesistelo").style.display = "block";
          document.getElementById("trilhodopincho").style.display = "block";
          document.getElementById("trilhodossobreiros").style.display = "block";
          document.getElementById("trilhodospastores").style.display = "block";
          document.getElementById("trilhopordosol").style.display = "block";
    }
  }

);


//Alta


btnGet.addEventListener('click', () => {


if (checkalta.checked == true){
  if ((checkalta.checked == true) && (checkvianadocastelo.checked == true)){
      return;}
  if ((checkaltaalta.checked == true) && (checkpontedelima.checked == true)){
      return;}
  if ((checkalta.checked == true) && (checkcaminha.checked == true)){
      return;}
      if ((checkalta.checked == true) && (checkcerveira.checked == true)){
          return;}
          if ((checkalta.checked == true) && (checkmonçao.checked == true)){
              return;}
              if ((checkalta.checked == true) && (checkvalença.checked == true)){
                  return;}
                  if ((checkalta.checked == true) && (checkarcosdevaldevez.checked == true)){
                      return;}
                      if ((checkalta.checked == true) && (checkpontedabarca.checked == true)){
                          return;}
                          if ((checkmalta.checked == true) && (checkmelgaço.checked == true)){
                              return;}
                              if ((checkalta.checked == true) && (checkparedesdecoura.checked == true)){
                                  return;}



console.log('aaa');
          document.getElementById("castrolaboreiroacortegada").style.display = "block";
          document.getElementById("trilhodamontaria").style.display = "block";
    }
  }

);

//Praia


btnGet.addEventListener('click', () => {


if (checkpraia.checked == true){

      if ((checkpraia.checked == true) && (checkvianadocastelo.checked == true)){
          return;}
      if ((checkpraia.checked == true) && (checkparedesdecoura.checked == true)){
          return;}
      if ((checkpraia.checked == true) && (checkpontedelima.checked == true)){
          return;}
      if ((checkpraia.checked == true) && (checkpontedabarca.checked == true)){
          return;}
      if ((checkpraia.checked == true) && (checkmelgaço.checked == true)){
          return;}
      if ((checkpraia.checked == true) && (checkarcosdevaldevez.checked == true)){
          return;}
      if ((checkpraia.checked == true) && (checkmonçao.checked == true)){
          return;}
      if ((checkpraia.checked == true) && (checkvalença.checked == true)){
          return;}
      if ((checkpraia.checked == true) && (checkcerveira.checked == true)){
          return;}
      if ((checkpraia.checked == true) && (checkcaminha.checked == true)){
          return;}
      if ((checkpraia.checked == true) && (checkmar.checked == true)){
          return;
          }
      if ((checkpraia.checked == true) && (checkrio.checked == true)){
          return;
          }
          document.getElementById("praiafluvialdetaboao").style.display = "block";
          document.getElementById("praiafluvialdaazenhadeestoraos").style.display = "block";
          document.getElementById("praiafluvialdavaleta").style.display = "block";
          document.getElementById("praiafluvialdalenta").style.display = "block";
          document.getElementById("praiadocabedelo").style.display = "block";
          document.getElementById("praiadaarda").style.display = "block";
          document.getElementById("praiavilarmouros").style.display = "block";
          document.getElementById("praiafortecao").style.display = "block";
          document.getElementById("praiamoledo").style.display = "block";
          document.getElementById("praiafozminho").style.display = "block";
          document.getElementById("praiagondariz").style.display = "block";
          document.getElementById("praiapedonegro").style.display = "block";
  }

});

//Mar


btnGet.addEventListener('click', () => {


if (checkmar.checked == true){
  if ((checkmar.checked == true) && (checkvianadocastelo.checked == true)){
      return;}
  if ((checkmar.checked == true) && (checkpontedelima.checked == true)){
      return;}
  if ((checkmar.checked == true) && (checkcaminha.checked == true)){
      return;}
      if ((checkmar.checked == true) && (checkcerveira.checked == true)){
          return;}
          if ((checkmar.checked == true) && (checkmonçao.checked == true)){
              return;}
              if ((checkmar.checked == true) && (checkvalença.checked == true)){
                  return;}
                  if ((checkmar.checked == true) && (checkarcosdevaldevez.checked == true)){
                      return;}
                      if ((checkmar.checked == true) && (checkpontedabarca.checked == true)){
                          return;}
                          if ((checkmar.checked == true) && (checkmelgaço.checked == true)){
                              return;}
                              if ((checkmar.checked == true) && (checkparedesdecoura.checked == true)){
                                  return;}



console.log('aaa');
          document.getElementById("praiadocabedelo").style.display = "block";
          document.getElementById("praiadaarda").style.display = "block";
          document.getElementById("praiafortecao").style.display = "block";
          document.getElementById("praiamoledo").style.display = "block";
          document.getElementById("praiafozminho").style.display = "block";
    }
  }

);

//Rio


btnGet.addEventListener('click', () => {


if (checkrio.checked == true){
  if ((checkrio.checked == true) && (checkvianadocastelo.checked == true)){
      return;}
  if ((checkrio.checked == true) && (checkpontedelima.checked == true)){
      return;}
  if ((checkrio.checked == true) && (checkcaminha.checked == true)){
      return;}
      if ((checkrio.checked == true) && (checkcerveira.checked == true)){
          return;}
          if ((checkrio.checked == true) && (checkmonçao.checked == true)){
              return;}
              if ((checkrio.checked == true) && (checkvalença.checked == true)){
                  return;}
                  if ((checkrio.checked == true) && (checkarcosdevaldevez.checked == true)){
                      return;}
                      if ((checkrio.checked == true) && (checkpontedabarca.checked == true)){
                          return;}
                          if ((checkrio.checked == true) && (checkmelgaço.checked == true)){
                              return;}
                              if ((checkrio.checked == true) && (checkparedesdecoura.checked == true)){
                                  return;}


          document.getElementById("praiafluvialdalenta").style.display = "block";
          document.getElementById("praiafluvialdavaleta").style.display = "block";
          document.getElementById("praiafluvialdetaboao").style.display = "block";
          document.getElementById("praiafluvialdaazenhadeestoraos").style.display = "block";
          document.getElementById("praiagondariz").style.display = "block";
          document.getElementById("praiavilarmouros").style.display = "block";
    }
  }

);


//Piquenique


btnGet.addEventListener('click', () => {


if (checkpiquenique.checked == true){

      if ((checkpiquenique.checked == true) && (checkvianadocastelo.checked == true)){
          return;}
      if ((checkpiquenique.checked == true) && (checkparedesdecoura.checked == true)){
          return;}
      if ((checkpiquenique.checked == true) && (checkpontedelima.checked == true)){
          return;}
      if ((checkpiquenique.checked == true) && (checkpontedabarca.checked == true)){
          return;}
      if ((checkpiquenique.checked == true) && (checkmelgaço.checked == true)){
          return;}
      if ((checkpiquenique.checked == true) && (checkarcosdevaldevez.checked == true)){
          return;}
      if ((checkpiquenique.checked == true) && (checkmonçao.checked == true)){
          return;}
      if ((checkpiquenique.checked == true) && (checkvalença.checked == true)){
          return;}
      if ((checkpiquenique.checked == true) && (checkcerveira.checked == true)){
          return;}
      if ((checkpiquenique.checked == true) && (checkcaminha.checked == true)){
          return;}
          document.getElementById("merendassantaluzia").style.display = "block";
          document.getElementById("merendasnossasenhoracabeça").style.display = "block";
          document.getElementById("merendaslanheses").style.display = "block";
          document.getElementById("merendasvilarmouros").style.display = "block";
          //document.getElementById("merendasnossasenhoraconceiçao").style.display = "block";
          document.getElementById("merendasboamorte").style.display = "block";
          document.getElementById("merendastaiao").style.display = "block";
          document.getElementById("merendasarvore").style.display = "block";
          document.getElementById("merendastaiao").style.display = "block";
          document.getElementById("merendasvalinha").style.display = "block";
          document.getElementById("merendasverdoejo").style.display = "block";
          document.getElementById("merendasmontaria").style.display = "block";
          document.getElementById("saojoao").style.display = "block";

  }

});
//Ponte da Barca


btnGet.addEventListener('click', () => {


if (checkpontedabarca.checked == true){

      //if ((checkpontedabarca.checked == true) && (checkmonumento.checked == true)){
      //    return;}
      if ((checkpontedabarca.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkpontedabarca.checked == true) && (checkpiquenique.checked == true)){
          return;}
    //  if ((checkpontedabarca.checked == true) && (checkhistoria.checked == true)){
  //        return;}
//      if ((checkpontedabarca.checked == true) && (checkdesporto.checked == true)){
//          return;}
      if ((checkpontedabarca.checked == true) && (checktrilho.checked == true)){
          return;}
        document.getElementById("trilhoentreambososrios").style.display = "block";

  }

});
//Arcos de Valdevez


btnGet.addEventListener('click', () => {


if (checkarcosdevaldevez.checked == true){

//      if ((checkarcosdevaldevez.checked == true) && (checkmonumento.checked == true)){
//          return;}
      if ((checkarcosdevaldevez.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkarcosdevaldevez.checked == true) && (checkpiquenique.checked == true)){
          return;}
//      if ((checkarcosdevaldevez.checked == true) && (checkhistoria.checked == true)){
//          return;}
//      if ((checkarcosdevaldevez.checked == true) && (checkdesporto.checked == true)){
//          return;}
      if ((checkarcosdevaldevez.checked == true) && (checktrilho.checked == true)){
          return;}
          document.getElementById("praiafluvialdavaleta").style.display = "block";
          document.getElementById("ecoviadeermelo").style.display = "block";
          document.getElementById("passadiçossistelo").style.display = "block";

  }

});
//Monção

btnGet.addEventListener('click', () => {


if (checkmonçao.checked == true){

//      if ((checkmonçao.checked == true) && (checkmonumento.checked == true)){
//          return;}
      if ((checkmonçao.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkmonçao.checked == true) && (checkpiquenique.checked == true)){
          return;}
//      if ((checkmonçao.checked == true) && (checkhistoria.checked == true)){
//          return;}
//      if ((checkmonçao.checked == true) && (checkdesporto.checked == true)){
//          return;}
      if ((checkmonçao.checked == true) && (checktrilho.checked == true)){
          return;}

  }

});
//Valença


btnGet.addEventListener('click', () => {


if (checkvalença.checked == true){

//      if ((checkvalença.checked == true) && (checkmonumento.checked == true)){
//          return;}
      if ((checkvalença.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkvalença.checked == true) && (checkpiquenique.checked == true)){
          return;}
//      if ((checkvalença.checked == true) && (checkhistoria.checked == true)){
//          return;}
//      if ((checkvalença.checked == true) && (checkdesporto.checked == true)){
//          return;}
      if ((checkvalença.checked == true) && (checktrilho.checked == true)){
          return;}
          document.getElementById("merendastaiao").style.display = "block";
          document.getElementById("merendasverdoejo").style.display = "block";

  }

});
//Cerveira


btnGet.addEventListener('click', () => {


if (checkcerveira.checked == true){

//      if ((checkcerveira.checked == true) && (checkmonumento.checked == true)){
//          return;}
      if ((checkcerveira.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkcerveira.checked == true) && (checkpiquenique.checked == true)){
          return;}
//      if ((checkcerveira.checked == true) && (checkhistoria.checked == true)){
//          return;}
//      if ((checkcerveira.checked == true) && (checkdesporto.checked == true)){
//          return;}
      if ((checkcerveira.checked == true) && (checktrilho.checked == true)){
          return;}
          document.getElementById("praiafluvialdalenta").style.display = "block";

  }

});
//Caminha


btnGet.addEventListener('click', () => {


if (checkcaminha.checked == true){

//      if ((checkcaminha.checked == true) && (checkmonumento.checked == true)){
//          return;}
      if ((checkcaminha.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkcaminha.checked == true) && (checkpiquenique.checked == true)){
          return;}
//      if ((checkcaminha.checked == true) && (checkhistoria.checked == true)){
//          return;}
//      if ((checkcaminha.checked == true) && (checkdesporto.checked == true)){
//          return;}
      if ((checkcaminha.checked == true) && (checktrilho.checked == true)){
          return;}
          document.getElementById("merendasarvore").style.display = "block";

  }

});

//Arcos de Valdevez


btnGet.addEventListener('click', () => {


if (checkarcosdevaldevez.checked == true){

      if ((checkarcosdevaldevez.checked == true) && (checkpraia.checked == true)){
          return;}
      if ((checkarcosdevaldevez.checked == true) && (checkpiquenique.checked == true)){
          return;}
//      if ((checkcaminha.checked == true) && (checkhistoria.checked == true)){
//          return;}
//      if ((checkcaminha.checked == true) && (checkdesporto.checked == true)){
//          return;}
      if ((checkarcosdevaldevez.checked == true) && (checktrilho.checked == true)){
          return;}
document.getElementById("passadiçossistelo").style.display = "block";



  }

});




btnGet.addEventListener('click', () => {
  document.getElementById("btnbtn").style.display = "none";
  document.getElementById("btn2").style.display = "block";
});


function refreshPage(){
    window.location.reload();

}
if (window.innerWidth < 960) {
  btnGet.addEventListener('click', () => {
    var F = document.getElementById("filtro-container");
    F.style.marginLeft = "-310px";
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "block";
  });

  //hide and show filters


  function TestsFunction() {

    window.location.reload();
      var T = document.getElementById("filtro-container");
      if (T.style.marginLeft === "-310px") {
      T.style.marginLeft = "30px";
      document.getElementById("show").style.display = "none";
      document.getElementById("hide").style.display = "block";
    } else {
      T.style.marginLeft = "-310px";
      document.getElementById("hide").style.display = "none";
      document.getElementById("show").style.display = "block";
    }
  }

}
function fullsize(){
    document.getElementById("slideshow-container").style.width = "300px";

}

function praiaops() {
  var checkBox = document.getElementById("praia");
  if (checkBox.checked == true){
    document.getElementById("mar").style.display = "block";
    document.getElementById("rio").style.display = "block";
  } else {
     document.getElementById("mar").style.display = "none";
     document.getElementById("rio").style.display = "none";
  }
}

function dificuldadeops() {
  var checkBox1 = document.getElementById("trilho");
  if (checkBox1.checked == true){
    document.getElementById("baixa").style.display = "block";
    document.getElementById("moderada").style.display = "block";
    document.getElementById("alta").style.display = "block";
  } else {
     document.getElementById("baixa").style.display = "none";
     document.getElementById("moderada").style.display = "none";
     document.getElementById("alta").style.display = "none";
  }
}
