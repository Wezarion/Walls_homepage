{
const welcome = () => {
  console.log("Pozdrowienia");
};

const toggleBackGrundButton = () => {
  const body = document.querySelector(".body");
  const navigation__buttonText = document.querySelector(".navigation__buttonText");
  const isDark = body.classList.toggle("bodyDark");
  navigation__buttonText.innerText = isDark ? "Włącz Jasny Motyw" : "Włącz Ciemny Motyw";
};

const init = () => {
  const navigation__switchModeButton = document.querySelector(".navigation__switchModeButton");
  navigation__switchModeButton.addEventListener("click", toggleBackGrundButton);
}

  welcome();
  init();
}