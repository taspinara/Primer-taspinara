// 1 - Create the HTML Structure:
//Create a header element with a nav inside it.
const body = document.querySelector("body");
console.log(body);
const header = document.createElement("header");
const nav = document.createElement("nav");
header.appendChild(nav);
body.appendChild(header);

//Inside the nav, create an a element with the class logo and the text "Coffee Shop".
const logo = document.createElement("a");
logo.className = "logo";
logo.textContent = "Coffee Shop";
nav.appendChild(logo);

//Create a ul element with the class nav-list. Inside the ul, create four li elements with the class nav-item, each containing an a element with text "Home", "Menu", "About", and "Contact".
const ul = document.createElement("ul");
ul.className = "nav-list";
nav.appendChild(ul);

const li1 = document.createElement("li");
li1.className = "nav-item";
const a1 = document.createElement("a");
a1.textContent = "Home";
li1.appendChild(a1);
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.className = "nav-item";
const a2 = document.createElement("a");
a2.textContent = "Menu";
li2.appendChild(a2);
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.className = "nav-item";
const a3 = document.createElement("a");
a3.textContent = "About";
li3.appendChild(a3);
ul.appendChild(li3);

const li4 = document.createElement("li");
li4.className = "nav-item";
const a4 = document.createElement("a");
a4.textContent = "Contact";
li4.appendChild(a4);
ul.appendChild(li4);

// 2 - Create the Hero Section:
// Create a section element with the class hero.
const section = document.createElement("section");
section.className = "hero";
body.appendChild(section);

// Inside the hero, create a div with the class hero-content.
const divHero = document.createElement("div");
divHero.className = "hero-content";
section.appendChild(divHero);

// Inside the div, create an h1 element with the text "Welcome to Our Coffee Shop".
const h1 = document.createElement("h1");
h1.textContent = "Welcome to Our Coffee Shop";
divHero.appendChild(h1);

// Add a p element with the text "Enjoy the best coffee in town."
const p = document.createElement("p");
p.textContent = "Enjoy the best coffee in town.";
divHero.appendChild(p);

// Add an a element with the class btn and the text "Explore Our Menu".
const btn = document.createElement("a");
btn.className = "btn";
btn.textContent = "Explore Our Menu";
divHero.appendChild(btn);

// 3 - Create the Footer:
// Create a footer element with the class footer.
const footer = document.createElement("footer");
footer.className = "footer";
body.appendChild(footer);

// Inside the footer, create a p element with the text "© 2024 Coffee Shop. All rights reserved.".
const pFooter = document.createElement("p");
pFooter.textContent = "© 2024 Coffee Shop. All rights reserved.";
footer.appendChild(pFooter);

// 4 - Apply CSS Styles Using JavaScript:
// Use JavaScript to apply the following CSS styles to the elements using element.style:
// .header: background-color: #fff, box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), padding: 1rem 0.
header.style.backgroundColor = "#fff";
header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
header.style.padding = "1rem 0";

//.nav: display: flex, justify-content: space-between, align-items: center, max-width: 1200px, margin: 0 auto, padding: 0 1rem.
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.maxWidth = "1200px";
nav.style.margin = "0 auto";
nav.style.padding = "0 1rem";

// .logo: font-size: 1.5rem, font-weight: bold, color: #333, text-decoration: none.
logo.style.fontSize = "1.5rem";
logo.style.fontWeight = "bold";
logo.style.color = "#333";
logo.style.textDecoration = "none";

// .nav-list: display: flex, list-style: none.
ul.style.display = "flex";
ul.style.listStyle = "none";

// .nav-item: margin-left: 1.5rem.
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach(navItem => navItem.style.marginLeft = "1.5rem");

// .nav-item a: text-decoration: none, color: #333, font-weight: bold.
const navLinks = document.querySelectorAll(".nav-item a");
navLinks.forEach(navLink => {
    navLink.style.textDecoration = "none";
    navLink.style.color = "#333";
    navLink.style.fontWeight = "bold";
})

// .hero: height: 560px, background: url("https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1") no-repeat center center/cover, color: #fff.
section.style.height = "560px";
section.style.background = "url('https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1') no-repeat center center/cover";
section.style.color = "#fff";
section.style.margin = "0 auto";

// .hero-content: max-width: 600px, height: 100%, display: flex, flex-direction: column, justify-content: space-around, align-items: center, text-align: center.
divHero.style.maxWidth = "600px";
divHero.style.height = "100%";
divHero.style.display = "flex";
divHero.style.flexDirection = "column";
divHero.style.justifyContent = "space-around";
divHero.style.alignItems = "center";
divHero.style.textAlign = "center";

// .hero-content h1: font-size: 2.5rem, margin-bottom: 1rem.
h1.style.fontSize = "2.5rem";
h1.style.marginBottom = "1rem";

// .hero-content p: font-size: 1.2rem, margin-bottom: 2rem.
p.style.fontSize = "1.2rem";
p.style.marginBottom = "2rem";

// .btn: background-color: #333, color: #fff, padding: 0.75rem 1.5rem, text-decoration: none, border-radius: 5px, transition: background-color 0.3s ease.
btn.style.backgroundColor = "#333";
btn.style.color = "#fff";
btn.style.padding = "0.75rem 1.5rem";
btn.style.textDecoration = "none";
btn.style.borderRadius = "5px";
btn.style.transition = "background-color 0.3s ease";

// .btn:hover: background-color: #555. (tip: you can set a mouseover and a mouseout event for this)
btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#555";
})

btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "#333";
})

// .footer: background-color: #333, color: #fff, text-align: center, padding: 1rem 0, margin-top: auto.
footer.style.backgroundColor = "#333";
footer.style.color = "#fff";
footer.style.textAlign = "center";
footer.style.padding = "1rem 0";
footer.style.marginTop = "auto";