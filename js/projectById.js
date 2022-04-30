const home = document.getElementById("home");
const backHome = () => {
  window.location.href = "./home.html";
};

home.addEventListener("click", () => {
  backHome();
});
