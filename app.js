let switchChecker = document.querySelector(".switch").children[0];
let body = document.querySelector("body");

switchChecker.addEventListener("click", (e) => {
  if (switchChecker.hasAttribute("checked")) {
    switchChecker.removeAttribute("checked");
    body.removeAttribute("style");
  } else {
    switchChecker.setAttribute("checked", "");
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
});
