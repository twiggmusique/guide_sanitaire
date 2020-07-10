const leftButtons = document.getElementsByClassName("left-buttons")[0];
const link = document.createElement("a");

link.setAttribute("href", "https://www.twiggmusique.com")
link.setAttribute("class", "logo-link")

const logo = document.createElement("img");

logo.setAttribute("src", "https://cdn.shoplightspeed.com/shops/619825/themes/7009/assets/logo.png?20200430154748");
logo.setAttribute("alt", "Twigg Musique");
logo.setAttribute("class", "logo-image");

link.appendChild(logo);

leftButtons.appendChild(link);
