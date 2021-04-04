const pw_visible = document.querySelector(".pw_visible");
const pw_input = document.querySelector("#pw");

function handleClick() {
  pw_visible.classList.toggle("opened");
  if (pw_input.getAttribute("type") == "password") {
    pw_input.type = "text";
  } else {
    pw_input.type = "password";
  }
}

pw_visible.addEventListener("click", handleClick);
