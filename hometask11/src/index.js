function createAuthorizationnPage() {
  const wraper = document.querySelector("main.wraper");
  const loginSection = createLoginSection();
  const mainImg = createImg(`../public/img/1.png`);
  wraper.append(loginSection, mainImg);

  return wraper;
}

/*Components for function createAuthorizationnPage*/
function createLoginSection() {
  const section = document.createElement("section");
  section.classList.add("login");

  const companyLogo = createCompanyLogo();
  companyLogo.classList.add("login__company-logo");

  const header = document.createElement("h1");
  header.classList.add("login__header");
  header.innerText = "Login to your account";

  const container = createLoginContainer();

  section.append(companyLogo, header, container);

  return section;
}

function createImg(src) {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add("beauty-salon-photo");

  return img;
}

/*Components for function createLoginSection*/
function createCompanyLogo() {
  const logo = document.createElement("div");
  logo.classList.add("company-logo");
  const logoCircle = document.createElement("div");
  logoCircle.classList.add("company-logo__circle");
  logoCircle.innerText = "F";
  const logoText = document.createElement("div");
  logoText.classList.add("company-logo__text");
  logoText.innerText = "FLEEK";
  logo.append(logoCircle, logoText);

  return logo;
}

function createLoginContainer() {
  const container = document.createElement("form");
  container.classList.add("login__container");

  const email = authorizationWindow("email", "Email", "email", "Enter email");
  email.classList.add("login__authorization-window");

  const password = authorizationWindow(
    "password",
    "Password",
    "password",
    "Enter password",
    {
      label: "Forgot Password?",
      url: "#",
    }
  );
  password.classList.add("login__authorization-window");

  const button = createButton();
  button.classList.add("login__main-button");

  container.append(email, password, button);
  return container;
}

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

createAuthorizationnPage();
