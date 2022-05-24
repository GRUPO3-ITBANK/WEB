//function toggleUserMenu() {
//console.log("TEST");
//$("#divDesplegable").show;
//   $(".cd-main-content").toggleClass("user-is-visible");
//   $(".cd-main-header").toggleClass("user-is-visible");
//   $(".header-user-menu").toggleClass("is-visible");
//   //close search
//   $(".cd-search").removeClass("is-visible");
//   $(".cd-search-trigger").removeClass("search-is-visible");
//   $(".cd-overlay").removeClass("search-is-visible is-visible");
//   if ($(".user-menu-overlay").hasClass("is-visible")) {
//     $(".user-menu-overlay").removeClass("is-visible");
//   } else {
//     $(".user-menu-overlay").addClass("is-visible");
//   }
//}

//Prueba de Login
function recogeDatos(e) {
  e.preventDefault();

  let usernameLogin = document.querySelector("#usernameLogin").value;
  console.log(username + " ah iniciado sesión");
  let usernameLogged = document.querySelector("#usernameLogged");
  usernameLogged.textContent = usernameLogin;
}

let miForm = document.querySelector("#inicio-sesion");

miForm.addEventListener("submit", recogeDatos);

//Perfil
function menuToggle() {
  const toggleMenu = document.querySelector(".menu-p");
  toggleMenu.classList.toggle("active-p");
}
