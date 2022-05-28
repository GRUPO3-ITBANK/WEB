const login = document.getElementById("login");
const inputs = document.querySelectorAll("#login input");

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
  dni: /^[0-9]{4,15}$/,
  pasaporte: /^[a-zA-Z0-9]{4,16}$/,
  password: /^.{4,12}$/,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "identificacion":
      if ($("#select").val() == "DNI") {
        if (expresiones.dni.test(e.target.value)) {
          //saco que era incorrecto
          document
            .getElementById("grupo__identificacion")
            .classList.remove("login__grupo-incorrecto");
          document
            .querySelector("#grupo__identificacion i")
            .classList.remove("fa-times-circle");

          // agrego grupo correcto
          document
            .getElementById("grupo__identificacion")
            .classList.add("login__grupo-correcto");
          document
            .querySelector("#grupo__identificacion i")
            .classList.add("fa-check-circle");
        } else {
          //o sea si no cumple...
          //le agrego grupo incorrecto y remuevo el correcto
          document
            .getElementById("grupo__identificacion")
            .classList.add("login__grupo-incorrecto");
          document
            .querySelector("#grupo__identificacion i")
            .classList.add("fa-times-circle");
          document
            .getElementById("grupo__identificacion")
            .classList.remove("login__grupo-correcto");
          document
            .querySelector("#grupo__identificacion i")
            .classList.remvoe("fa-check-circle");

          document
            .querySelector("#grupo__identificacion .login__input-error")
            .classList.add("formulario__input-error-activo");
        }
      } else if ($("#select").val() == "USER") {
        document
          .getElementById("grupo__identificacion")
          .classList.remove("login__grupo-incorrecto");
        document
          .querySelector("#grupo__identificacion i")
          .classList.remove("fa-times-circle");

        if (expresiones.usuario.test(e.target.value)) {
          //si cumple...
          //saco grupo incorrecto y agrego grupo correcto
          document
            .getElementById("grupo__identificacion")
            .classList.remove("login__grupo-incorrecto");
          document
            .querySelector("#grupo__identificacion i")
            .classList.remove("fa-times-circle");
          document
            .getElementById("grupo__identificacion")
            .classList.add("login__grupo-correcto");
          document
            .querySelector("#grupo__identificacion i")
            .classList.add("fa-check-circle");
        } else {
          document
            .getElementById("grupo__identificacion")
            .classList.add("login__grupo-incorrecto");
          document
            .querySelector("#grupo__identificacion i")
            .classList.add("fa-times-circle");
        }
      } else if ($("#select").val() == "PAS") {
        document
          .getElementById("grupo__identificacion")
          .classList.remove("login__grupo-incorrecto");
        document
          .querySelector("#grupo__identificacion i")
          .classList.remove("fa-times-circle");

        if (expresiones.pasaporte.test(e.target.value)) {
          //si cumple...
          //saco grupo incorrecto y agrego grupo correcto
          document
            .getElementById("grupo__identificacion")
            .classList.remove("login__grupo-incorrecto");
          document
            .querySelector("#grupo__identificacion i")
            .classList.remove("fa-times-circle");
          document
            .getElementById("grupo__identificacion")
            .classList.add("login__grupo-correcto");
          document
            .querySelector("#grupo__identificacion i")
            .classList.add("fa-check-circle");
        } else {
          document
            .getElementById("grupo__identificacion")
            .classList.add("login__grupo-incorrecto");
          document
            .querySelector("#grupo__identificacion i")
            .classList.add("fa-times-circle");
        }
      }
      break;

    case "password":
      console.log("funciona password");
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

login.addEventListener("submit", (e) => {
  e.preventDefault();
});

function cambiarIdentificacion() {
  if ($("#select").val() == "DNI") {
    $("#usernameLogin").attr("maxlength", 10);
  } else if ($("#select").val() == "PAS") {
  }
}
