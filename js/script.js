"use strict";

const quotes = [
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
];

// 5–8: returnér et vilkårligt quote-objekt (eller tekst hvis tomt)
function getRandomQuote() {
  // 6. tomt array?
  if (quotes.length === 0) {
    return "No quotes available";
  }
  // 7. tilfældigt index
  const randomIndex = Math.floor(Math.random() * quotes.length);
  // 8. returnér elementet ved randomIndex
  return quotes[randomIndex];
}

// 9–11: vis citatet i #quotes
function displayRandomQuote() {
  // 10. hent værdien fra getRandomQuote()
  const randomQuote = getRandomQuote();

  // 11. find elementet med id="quotes" og sæt tekst
  const outlet = document.getElementById("quotes");
  if (!outlet) {
    console.warn('Element med id="quotes" blev ikke fundet.');
    return;
  }

  if (typeof randomQuote === "string") {
    // "No quotes available"
    outlet.textContent = randomQuote;
  } else {
    outlet.textContent = `"${randomQuote.quote}" — ${randomQuote.author}`;
  }
}

// 12. find knappen og bind click → displayRandomQuote
const btn = document.getElementById("displayQuoteBtn");
if (btn) {
  btn.addEventListener("click", displayRandomQuote);
} else {
  console.warn('Element med id="displayQuoteBtn" blev ikke fundet.');
}
