// Select the h1 element inside the .hero-content div and log it to the console.
const title = document.querySelector('.hero-content h1');
console.log(title);

// Select all the a elements inside the .nav-list and log them to the console.
const navLinks = document.querySelectorAll('.nav-list a');
console.log(navLinks);

// Select the .btn element and log it to the console.
const button = document.querySelector('.btn');
console.log(button);

// Change the background color of the .header element to #b5651d.
const header = document.querySelector("header");
header.style.backgroundColor = "#b5651d";

// Change the font size of the h1 element inside the .hero-content div to 3rem.
title.style.fontSize = "3rem";

// Change the text color of all a elements inside the .nav-list to #faf0e6.
navLinks.forEach(link => link.style.color = "#faf0e6");

// Select the .hero-content div and add a new p element with the text "Open daily from 7 AM to 9 PM." inside it. 
const heroContent = document.querySelector(".hero-content");
const newP = document.createElement("p");
newP.textContent = "Open daily from 7 AM to 9 PM.";
heroContent.appendChild(newP);