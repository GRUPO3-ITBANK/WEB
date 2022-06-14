function desplegarHamburguesa() {
  let desplegable = document.getElementById("menu");

  if (desplegable.classList.contains("menu-active")) {
    desplegable.classList.remove("menu-active");
    desplegable.classList.add("menu-inactive");
  } else if (desplegable.classList.contains("menu-inactive")) {
    desplegable.classList.add("menu-active");
    desplegable.classList.remove("menu-inactive");
  }
}

function desplegarSubmenu(desplegable) {
  console.log(desplegable);
  let submenu1 = document.getElementById("submenu1");
  let submenu2 = document.getElementById("submenu2");
  let submenu3 = document.getElementById("submenu3");

  function toggle(desplegable) {
    if (desplegable.classList.contains("submenu-active")) {
      desplegable.classList.remove("submenu-active");
      desplegable.classList.add("submenu-inactive");
    } else if (desplegable.classList.contains("submenu-inactive")) {
      desplegable.classList.add("submenu-active");
      desplegable.classList.remove("submenu-inactive");
      desplegable.classList.add("slide-in-top");
    }
  }
  function cierreDemasDesplegables(d1, d2) {
    d1.classList.remove("submenu-active");
    d1.classList.add("submenu-inactive");
    d2.classList.remove("submenu-active");
    d2.classList.add("submenu-inactive");
  }

  if (desplegable == "submenu1") {
    let desplegable = submenu1;
    toggle(desplegable);
    cierreDemasDesplegables(submenu2, submenu3);
  } else if (desplegable == "submenu2") {
    let desplegable = document.getElementById("submenu2");
    toggle(desplegable);
    cierreDemasDesplegables(submenu1, submenu3);
  } else if (desplegable == "submenu3") {
    let desplegable = document.getElementById("submenu3");
    toggle(desplegable);
    cierreDemasDesplegables(submenu1, submenu2);
  }
}
