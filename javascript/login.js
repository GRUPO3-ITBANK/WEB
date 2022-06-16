const login = document.getElementById("login");
const inputs = document.querySelectorAll("#login input");
let select = document.getElementById("select");

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
  dni: /^[0-9]{4,15}$/,
  pasaporte: /^[a-zA-Z0-9]{4,16}$/,
  password: /^.{7,16}$/,
};
const campos = {
  usuario: false,
  dni: false,
  pasaporte: false,
  password: false,
};

function validarCampo(expresion, e, grupo, claseGrupoCorrecto, campo) {
  let idGrupo = document.getElementById(grupo);
  if (expresion.test(e.target.value)) {
    idGrupo.classList.add(claseGrupoCorrecto);
    idGrupo.querySelector("i").classList.add("fa-check-circle");
    campos[campo] = true;
  } else {
    idGrupo.classList.add(claseGrupoCorrecto);
    idGrupo.querySelector("i").classList.remove("fa-check-circle");
    campos[campo] = false;
  }
}
const validarFormulario = (e) => {
  switch (e.target.name) {
    case "identificacion":
      if (select.value == "DNI") {
        validarCampo(
          expresiones.dni,
          e,
          "grupo__identificacion",
          "login__grupo-correcto",
          "dni"
        );
      } else if (select.value == "USER") {
        validarCampo(
          expresiones.usuario,
          e,
          "grupo__identificacion",
          "login__grupo-correcto",
          "usuario"
        );
      } else if (select.value == "PAS") {
        validarCampo(
          expresiones.pasaporte,
          e,
          "grupo__identificacion",
          "login__grupo-correcto",
          "pasaporte"
        );
      }
      break;
    case "password":
      validarCampo(
        expresiones.password,
        e,
        "grupo__password",
        "login__grupo-correcto",
        "password"
      );
      break;
  }
};

let submit = document.getElementById("submit");
submit.classList.contains("ingresar-inactivo");

function activaboton() {
  if (select.value == "USER") {
    if (campos.usuario && campos.password) {
      if (submit.classList.contains("ingresar-inactivo")) {
        submit.classList.remove("ingresar-inactivo");
      }
    } else {
      if (!submit.classList.contains("ingresar-inactivo")) {
        submit.classList.add("ingresar-inactivo");
      }
    }
  }
  if (select.value == "DNI") {
    if (campos.dni && campos.password) {
      if (submit.classList.contains("ingresar-inactivo")) {
        submit.classList.remove("ingresar-inactivo");
      }
    } else {
      if (!element.classList.contains("ingresar-inactivo")) {
        submit.classList.add("ingresar-inactivo");
      }
    }
  }
  if (select.value == "PAS") {
    if (campos.pasaporte && campos.password) {
      if (submit.classList.contains("ingresar-inactivo")) {
        submit.classList.remove("ingresar-inactivo");
      }
    } else {
      if (submit.classList.contains("ingresar-inactivo")) {
        submit.classList.add("ingresar-inactivo");
      }
    }
  }
}

const habilitarBoton = (e) => {
  switch (e.target.name) {
    case "identificacion":
      activaboton();
      break;

    case "password":
      activaboton();
      break;
  }
};

function limpiarCampos() {
  submit.classList.add("ingresar-inactivo");
  document
    .getElementById("grupo__identificacion")
    .querySelector("i")
    .classList.remove("fa-check-circle");

  document.getElementById("identificacion").value = "";
}

function cambiarIdentificacion() {
  limpiarCampos();
}

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("keyup", habilitarBoton);
  input.addEventListener("change", validarFormulario);
  input.addEventListener("change", habilitarBoton);
});

login.addEventListener("submit", (e) => {
  e.preventDefault();
  if (select.value == "DNI") {
    if (campos.dni && campos.password) {
      login.reset();
    }
  }
  if (select.value == "USER") {
    if (campos.usuario && campos.password) {
      login.reset();
    }
  }
  if (select.value == "PAS") {
    if (campos.pasaporte && campos.password) {
      login.reset();
    }
  }
});
