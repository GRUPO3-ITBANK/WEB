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

  let div = document.createElement("div");
  div.className = "divisor-movimientos";

  //creacion de nuevo objeto

  let objetoMovimiento = new Object();

  //creo un numero random para hardcoedar un numero de operacion al objeto

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
  objetoMovimiento.nOperacion = nOperacion(movimientos);
  objetoMovimiento.tipoDeMovimiento = prompt("TIPO DE MOVIMIENTO SE REALIZÓ");
  objetoMovimiento.gasto = prompt("CUANTO GASTO");
  objetoMovimiento.metodo = prompt("Ingrese con qué pagó");
  objetoMovimiento.destino = prompt("DONDE O A QUIEN SE LE PAGÓ");
  objetoMovimiento.fecha = new Date().toLocaleString();

  div.setAttribute(
    "onclick",
    "mostrar('overlay');datosDelOverlay('" +
      objetoMovimiento.nOperacion +
      "','" +
      objetoMovimiento.tipoDeMovimiento +
      "','" +
      objetoMovimiento.gasto +
      "','" +
      objetoMovimiento.metodo +
      "','" +
      objetoMovimiento.destino +
      "','" +
      objetoMovimiento.fecha +
      "')"
  );

  movimientos.push(objetoMovimiento);

  let ul = document.createElement("ul");
  let liFecha = document.createElement("li");
  let liTexto = document.createElement("li");
  let liMetodoPago = document.createElement("li");
  ul.setAttribute("id", "liUltMov");

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
    document.getElementById("Movimientos").innerHTML = divAux.innerHTML;
  } else if (movimientos.length > 1) {
    document.getElementById("Movimientos").prepend(div);
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
  elemento.style.display = "flex";
  elemento.style.visibility = "visible";
}

function datosDelOverlay(nOp, tipoMovimiento, valor, metodo, destino, fecha) {
  let titulo = document.getElementById("tituloModal");
  titulo.textContent = "n° de operación: " + nOp;
  let body = document.getElementById("detalleOperacion");
  body.innerHTML =
    tipoMovimiento +
    " a: " +
    destino +
    "<br />" +
    "Monto: $" +
    valor +
    "<br />" +
    "Pagaste con: " +
    metodo +
    "<br />" +
    fecha;
}

document.addEventListener(
  "click",
  function (event) {
    // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
    if (
      !event.target.closest("#overlayHijo") &&
      !event.target.closest("#liUltMov")
    ) {
      ocultar("overlay");
    }
  },
  false
);
