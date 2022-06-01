const login = document.getElementById("login");
const inputs = document.querySelectorAll("#login input");

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

function validarCampo(expresion, e, grupo, grupocorrecto, campo) {
  if (expresion.test(e.target.value)) {
    $(grupo).addClass(grupocorrecto);
    $(grupo + " i").addClass("fa-check-circle");
    campos[campo] = true;
  } else {
    $(grupo).removeClass(grupocorrecto);
    $(grupo + " i").removeClass("fa-check-circle");
    campos[campo] = false;
  }
}

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "identificacion":
      if ($("#select").val() == "DNI") {
        validarCampo(
          expresiones.dni,
          e,
          "#grupo__identificacion",
          "login__grupo-correcto",
          "dni"
        );
      } else if ($("#select").val() == "USER") {
        validarCampo(
          expresiones.usuario,
          e,
          "#grupo__identificacion",
          "login__grupo-correcto",
          "usuario"
        );
      } else if ($("#select").val() == "PAS") {
        validarCampo(
          expresiones.pasaporte,
          e,
          "#grupo__identificacion",
          "login__grupo-correcto",
          "pasaporte"
        );
      }
      break;
    case "password":
      validarCampo(
        expresiones.password,
        e,
        "#grupo__password",
        "login__grupo-correcto",
        "password"
      );
      break;
  }
};

let element = document.getElementById("submit");
element.classList.contains("ingresar-inactivo");

function activaboton() {
  if ($("#select").val() == "USER") {
    if (campos.usuario && campos.password) {
      if (element.classList.contains("ingresar-inactivo")) {
        $("#submit").removeClass("ingresar-inactivo");
      }
    } else {
      if (!element.classList.contains("ingresar-inactivo")) {
        $("#submit").addClass("ingresar-inactivo");
      }
    }
  }
  if ($("#select").val() == "DNI") {
    if (campos.dni && campos.password) {
      if (element.classList.contains("ingresar-inactivo")) {
        $("#submit").removeClass("ingresar-inactivo");
      }
    } else {
      if (!element.classList.contains("ingresar-inactivo")) {
        $("#submit").addClass("ingresar-inactivo");
      }
    }
  }
  if ($("#select").val() == "PAS") {
    if (campos.pasaporte && campos.password) {
      if (element.classList.contains("ingresar-inactivo")) {
        $("#submit").removeClass("ingresar-inactivo");
      }
    } else {
      if (!element.classList.contains("ingresar-inactivo")) {
        $("#submit").addClass("ingresar-inactivo");
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

function Clear() {
  console.log("entra");
  $("#identificacion").removeClass("fa-check-circle");
  $("#password").removeClass("fa-check-circle");
}

function cambiarIdentificacion() {
  console.log("entra1");
  Clear();
  document
    .getElementById("select")
    .addEventListener("change", validarFormulario);

  document.getElementById("select").addEventListener("change", activaboton);
}

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
  input.addEventListener("keyup", habilitarBoton);
  input.addEventListener("blur", habilitarBoton);
});

login.addEventListener("submit", (e) => {
  e.preventDefault();

  if ($("#select").val() == "DNI") {
    if (campos.dni && campos.password) {
      login.reset();
    }
  }
  if ($("#select").val() == "USER") {
    if (campos.usuario && campos.password) {
      login.reset();
    }
  }
  if ($("#select").val() == "PAS") {
    if (campos.pasaporte && campos.password) {
      login.reset();
    }
  }
});
