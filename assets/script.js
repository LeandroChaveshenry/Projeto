/* A função abaixo é para fazer o botão no site funcionar.*/

/*function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}*/
/* O código abaixo é uma forma simplificada de também fazer o botão funcionar*/

function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  /* primeiro pegar a tag da img*/
  const img = document.querySelector("#profile img")

  /* Depois subistituir a imagem*/
  if (html.classList.contains("light")) {
    /* se tiver na opção light, adicionar a imagem abaixo*/
    img.setAttribute("src", "./assets/Ellipse - light 1 (1).png")
  } else {
    /* caso não esteja, ira aparecer a imagem atual*/
    img.setAttribute("src", "./assets/Ellipse 1.png")
  }
}
