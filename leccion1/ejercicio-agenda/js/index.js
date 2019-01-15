
var calendario = document.getElementById('calendario');
calendario.addEventListener("click",function(event){
  var mensaje = "Hiciste click en la posicion ->  X: "+event.clientX+" Y: "+event.clientY;
  console.log(mensaje);
})
/*ÇDescarga el codBase.zip que contiene la página web.
Para la primera parte del ejercicio debes crear tu código con la etiqueta script dentro del archivo HTML.
Debes seleccionar la imágen que contiene todos los meses, como lo viste en los ejemplos durante las lecciones, y almacenarla en una variable. En este caso, la imágen tiene el id “calendario”.
Asigna a la variable anterior un evento que, al hacer click, muestre un mensaje en consola. Este mensaje debe definirse en una variable. Para obtener la posición actual debes usar la palabra event en los paréntesis, después de la palabra function en el evento, y al crear la variable mensaje, usa event.clientX y event.clientY para obtener la posición en X y en Y. Estos son los valores que debes mostrar en consola.
Recuerda que la etiqueta script debe estar justo antes de que se cierre la etiqueta body, para no realizar acciones sin que se hayan cargado elementos.
Cuando hayas terminado, borra el contenido de la etiqueta script y realiza el mismo procedimiento mediante un archivo .js externo y enlázalo  al archivo HTML, justo antes del cierre de la etiqueta body.
Usa las herramientas del navegador para acceder al Debugger, en el cual debes inspeccionar tu código usando dos breakpoints para verificar el valor de las variables involucradas. Esta acción debes hacerla cada vez que encuentres problemas en la ejecución de tu script.*/
