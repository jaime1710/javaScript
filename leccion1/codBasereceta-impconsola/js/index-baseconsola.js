//jaime inprime en consola
document.getElementById("boton_receta1").addEventListener("click", function(){
 var ingredientes=["Claras de huevo", "Azucar Blanca", "Leche Condensada", "Gelatina sin sabor", "Limones"];

var unidadesClaraDeHuevo = 5;
var gramosazucar = 150;
var gramoslecheCondensada = 200;
var sobresGelatina = 1;
var unidadeslimon = 4;

console.log("Adicionar las "+unidadesClaraDeHuevo+" "+ingredientes[0]+"en bol y batir con los "+gramosazucar+"gramos de "+ingredientes[1]);
//jaime
console.log("Adicionar los"+gramoslecheCondensada+" gramos de " +ingredientes[2]+" y batir bien");
//jaime
console.log("Adicionar el zumo de "+unidadeslimon+" "+ingredientes[4]+" y "+sobresGelatina+" sobre de "+ingredientes[3]+"hidratada en el agua tibia");
//jaime
console.log("Deposita la mescla en el moldes individuales y colocalos a refrigerar");
})
document.getElementById("boton_receta2").addEventListener("click", function(){
  var ingredientes= ["Ginebra", "Vermouth seco", "Aceituna"];
  var onzasGine = 2.5;
  var onzasVermouth = 0.5;
  var unidadesAceituna = 1;

console.log("Verter las "+onzasGine+"onzas de "+ingredientes[0]+" en una coctelera");
//
console.log("Añadir "+onzasVermouth+" onzas de "+ingredientes[1]);
//
console.log("Servir en una copa tipo Martini y añadir "+unidadesAceituna+" "+ingredientes[2]);
})

/*
Descarga el codBase.zip que contiene la página web.
Dentro de la carpeta, ubica el archivo recetas.txt pues allí encontrarás la información de los ingredientes y la preparación de las dos opciones.
Enlaza el archivo index.js que se encuentra en la carpeta js, al documento HTML. No olvides hacerlo justo antes del cierre de la etiqueta body.
En el archivo index.js encontrarás dos eventos de tipo click definidos, pero sin ningún código en ellos. El primero corresponde al botón del postre de limón y el segundo al del Martini.
Crea varias variables en para almacenar los ingredientes de la preparación. Esto lo debes hacer una vez por cada preparación.
Crea así mismo variables que contengan las cantidades por cada ingrediente que debe usar en la preparación. Dichas variables sólo podrán almacenar datos numéricos.
Crea un algoritmo para describir la receta, imprimiendo cada uno de los pasos en consola. Cuando se mencione un ingrediente y su cantidad, debes usar las variables de ingredientes y las variables de cantidad definidas previamente.
Recuerda que para imprimir cadenas y variables usas el operador +.


Por ejemplo:
*/
