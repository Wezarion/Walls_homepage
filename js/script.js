{
console.log("Pozdrowienia");

let navigation__switchModeButton = document.querySelector(".navigation__switchModeButton");


navigation__switchModeButton.addEventListener("click", () => {
  let body = document.querySelector(".body");
  let navigation__buttonText = document.querySelector(".navigation__buttonText");
  const isDark = body.classList.toggle("bodyDark");
  navigation__buttonText.innerText = isDark ? "Włącz Jasny Motyw" : "Włącz Ciemny Motyw";
});
}