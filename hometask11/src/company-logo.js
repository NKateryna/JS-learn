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

export default createCompanyLogo;
