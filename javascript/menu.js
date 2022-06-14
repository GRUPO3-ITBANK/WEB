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

  if (desplegable == "submenu1") {
    let desplegable = document.getElementById("submenu1");
    toggle(desplegable);
  } else if (desplegable == "submenu2") {
    let desplegable = document.getElementById("submenu2");
    toggle(desplegable);
  } else if (desplegable == "submenu3") {
    let desplegable = document.getElementById("submenu3");
    console.log(desplegable);
    toggle(desplegable);
  }
}
