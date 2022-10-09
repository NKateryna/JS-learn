function authorizationWindow(name, text, type, placeholder, sideLink = null) {
  const box = document.createElement("div");
  box.classList.add("authorization-window");

  const label = document.createElement("label");
  label.classList.add("authorization-window__title");
  label.setAttribute("for", name);
  label.innerText = text;

  const input = document.createElement("input");
  input.classList.add("authorization-window__input");
  input.setAttribute("type", type);
  input.setAttribute("name", name);
  input.setAttribute("placeholder", placeholder);

  box.append(label, input);

  if (sideLink) {
    const link = document.createElement("a");
    link.classList.add("login__link-help");
    link.innerText = sideLink.label;
    box.appendChild(link);
  }

  return box;
}

export default authorizationWindow;
