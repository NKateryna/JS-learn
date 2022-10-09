function createButton() {
  const button = document.createElement("button");
  button.classList.add("main-button");
  button.setAttribute("type", "submit");
  button.innerText = "Log in";
  button.addEventListener("click", () => {
    button.classList.add("main-button_active");
  });

  return button;
}

export default createButton;
