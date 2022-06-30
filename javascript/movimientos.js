let movimientos = [];

//chequeo si la lista aun no tiene objetos
if (movimientos.length == 0) {
  //div contenedor donde se pushean todos los movimientos
  let contenedor = document.getElementById("Movimientos");
  //creo div y le asigno clase
  let div = document.createElement("div");
  div.className = "divisor-movimientos";
  let liTexto = document.createElement("li");
  let ul = document.createElement("ul");
  liTexto.textContent = "Todavía no has realizado ningún movimiento... :)";
  ul.append(liTexto);
  div.append(ul);
  contenedor.append(div);
}

function generarNumeroRandom() {
  return Math.random() * (1000 - 100) + 100;
}

function agregarMov() {
  // fixAltura();
  if (movimientos.length == 8) {
    document.getElementById("Movimientos").style.height =
      document.getElementById("Movimientos").clientHeight;
  }
  //creacion de nuevo objeto
  let objetoMovimiento = new Object();
  //creo un numero random para asignarle un numero de operacion al objeto
  function nOperacion(lista) {
    if (lista.length > 0) {
      for (x in lista) {
        let nRandom = generarNumeroRandom();
        if (x.nOperacion != nRandom) {
          return nRandom;
        }
      }
    } else return generarNumeroRandom();
  }

  //asigno datos hardcodeados a cada propiedad del objeto
  objetoMovimiento.tipoDeMovimiento = prompt("TIPO DE MOVIMIENTO SE REALIZÓ");
  objetoMovimiento.gasto = prompt("CUANTO GASTO");
  objetoMovimiento.metodo = prompt("Ingrese con qué pagó");
  objetoMovimiento.destino = prompt("DONDE O A QUIEN SE LE PAGÓ");
  objetoMovimiento.fecha = new Date().toLocaleString();
  objetoMovimiento.nOperacion = nOperacion(movimientos);
  //pusheo mi objeto con todas sus propiedades recien asignadas
  movimientos.push(objetoMovimiento);
  console.log(objetoMovimiento.nOperacion);
  //div contenedor donde se pushean todos los movimientos
  let contenedor = document.getElementById("Movimientos");
  //creo div y le asigno clase
  let div = document.createElement("div");
  div.className = "divisor-movimientos";
  div.setAttribute(
    "onclick",
    "mostrar('overlay');datosDelOverlay(" + objetoMovimiento.nOperacion + ")"
  );
  //creo elementos que voy a asignar más adelante
  let ul = document.createElement("ul");
  let liFecha = document.createElement("li");
  let liTexto = document.createElement("li");
  let liMetodoPago = document.createElement("li");

  liTexto.textContent =
    objetoMovimiento.tipoDeMovimiento +
    " a " +
    objetoMovimiento.destino +
    ": $" +
    objetoMovimiento.gasto;
  liMetodoPago.textContent = "Pago realizado con: " + objetoMovimiento.metodo;
  liFecha.textContent = objetoMovimiento.fecha;

  ul.append(liTexto);
  ul.append(liMetodoPago);
  ul.append(liFecha);
  div.append(ul);

  if (movimientos.length == 1) {
    let divAux = document.createElement("div");
    divAux.append(div);
    contenedor.innerHTML = divAux.innerHTML;
  } else if (movimientos.length > 1) {
    contenedor.prepend(div);
  }
}

width = document.documentElement.clientWidth;
height = document.documentElement.clientHeight;
function reportWindowSize() {
  if (height > 1000) {
    viewportHeight = Math.round(window.innerHeight);
    altura("main-contenedor", viewportHeight);
  } else {
    altura("main-contenedor", "1000");
  }
  if (width <= 768) {
    altura("main-contenedor", "auto");
  }
}

window.onresize = reportWindowSize;

function altura(id, altura) {
  let elemento = document.getElementById(id);
  elemento.style.height = altura;
}
function ocultar(id) {
  let elemento = document.getElementById(id);
  elemento.style.display = "none";
  elemento.style.visibility = "hidden";
}
function mostrar(id) {
  let elemento = document.getElementById(id);
  elemento.style.display = "block";
  elemento.style.visibility = "visible";
}

let overlay = document.getElementById("overlay");
function datosDelOverlay(nOperacion) {
  titulo = document.getElementById("tituloModal");
  titulo.textContent = "n° de operación: " + nOperacion;
  console.log(nOperacion);
  // let contenido = document.createElement("p");

  // contenido.textContent = objeto;

  // document.getElementById("overlay-body").append(contenido);
}
