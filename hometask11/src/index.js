import "./style.css";
import Image from "../public/img/1.png";
import CompanyLogo from "./company-logo";
import DefoulButton from "./default-button";
import AuthorizationWindow from "./authorization-window";

function createAuthorizationnPage() {
  const wraper = document.querySelector("main.wraper");
  const loginSection = createLoginSection();
  const mainImg = createImg(Image);
  wraper.append(loginSection, mainImg);

  return wraper;
}

/*Components for function createAuthorizationnPage*/
function createLoginSection() {
  const section = document.createElement("section");
  section.classList.add("login");

  const companyLogo = CompanyLogo();
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

function createLoginContainer() {
  const container = document.createElement("form");
  container.classList.add("login__container");

  const email = AuthorizationWindow("email", "Email", "email", "Enter email");
  email.classList.add("login__authorization-window");

  const password = AuthorizationWindow(
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

  const button = DefoulButton();
  button.classList.add("login__main-button");

  container.append(email, password, button);

  return container;
}

createAuthorizationnPage();
