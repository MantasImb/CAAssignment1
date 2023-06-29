// burger selector
const burger = document.querySelector(".header__burger");
// navigation selector
const navigation = document.querySelector(".navigation__list");

// event listener for burger
burger.addEventListener("click", () => {
  console.log("clicked");
  // open navigation
  navigation.classList.toggle("active");
});
