let movimientos = [];
let contenedor = document.getElementById("Movimientos");
let div = document.createElement("div");
div.className = "divisor-movimientos";
let ul2 = document.createElement("ul");
let liFecha = document.createElement("li");
let liTexto = document.createElement("li");
let liMetodoPago = document.createElement("li");
if (movimientos.length == 0) {
  liTexto.textContent = "Todavía no has realizado ningún movimiento... :)";
  ul2.append(liTexto);
  div.append(ul2);
  contenedor.append(div);
}

function agregarMov() {
  let objetoMovimiento = new Object();
  objetoMovimiento.tipoDeMovimiento = prompt(
    "INGRESE QUE TIPO DE MOVIMIENTO SE REALIZÓ"
  );
  objetoMovimiento.gasto = prompt("CUANTO GASTO");
  objetoMovimiento.metodo = prompt("Ingrese con qué pagó");
  objetoMovimiento.destino = prompt("DONDE O A QUIEN SE LE PAGÓ");
  objetoMovimiento.fecha = new Date().toLocaleString();
  movimientos.push(objetoMovimiento);

  liTexto.textContent =
    objetoMovimiento.tipoDeMovimiento +
    "a" +
    objetoMovimiento.destino +
    ": $" +
    objetoMovimiento.gasto;
  liMetodoPago.textContent = "Pago realizado con: " + objetoMovimiento.gasto;
  liFecha.textContent = fecha;

  ul2.append(liTexto);
  ul2.append(liMetodoPago);
  ul2.append(liFecha);
  div.append(ul2);
  if (movimientos.length == 1) {
    contenedor.innerHTML = div;
  } else {
    contenedor.append(div);
  }
}
