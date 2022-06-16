let movimientos = [];

//chequeo si la lista aun no tiene objetos
if (movimientos.length == 0) {
  //div contenedor donde se pushean todos los movimientos
  let contenedor = document.getElementById("Movimientos");
  //creo div y le asigno clase
  let div = document.createElement("div");
  div.className = "divisor-movimientos";
  //creo elementos que voy a asignar más adelante
  let liTexto = document.createElement("li");
  let ul2 = document.createElement("ul");

  liTexto.textContent = "Todavía no has realizado ningún movimiento... :)";
  ul2.append(liTexto);
  div.append(ul2);
  contenedor.append(div);
}

function agregarMov() {
  //div contenedor donde se pushean todos los movimientos
  let contenedor = document.getElementById("Movimientos");
  //creo div y le asigno clase
  let div = document.createElement("div");
  div.className = "divisor-movimientos";
  //creo elementos que voy a asignar más adelante
  let ul2 = document.createElement("ul");
  let liFecha = document.createElement("li");
  let liTexto = document.createElement("li");
  let liMetodoPago = document.createElement("li");

  let objetoMovimiento = new Object();

  objetoMovimiento.tipoDeMovimiento = prompt("TIPO DE MOVIMIENTO SE REALIZÓ");
  objetoMovimiento.gasto = prompt("CUANTO GASTO");
  objetoMovimiento.metodo = prompt("Ingrese con qué pagó");
  objetoMovimiento.destino = prompt("DONDE O A QUIEN SE LE PAGÓ");
  objetoMovimiento.fecha = new Date().toLocaleString();

  //pusheo mi objeto con todas sus propiedades recien asignadas
  movimientos.push(objetoMovimiento);

  liTexto.textContent =
    objetoMovimiento.tipoDeMovimiento +
    " a " +
    objetoMovimiento.destino +
    ": $" +
    objetoMovimiento.gasto;
  liMetodoPago.textContent = "Pago realizado con: " + objetoMovimiento.metodo;
  liFecha.textContent = objetoMovimiento.fecha;

  ul2.append(liTexto);
  ul2.append(liMetodoPago);
  ul2.append(liFecha);
  div.append(ul2);

  if (movimientos.length == 1) {
    let divAux = document.createElement("div");
    divAux.append(div);
    contenedor.innerHTML = divAux.innerHTML;
  } else if (movimientos.length > 1) {
    contenedor.prepend(div);
  }
}
