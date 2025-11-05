// JavaScript Document
console.log("hi");

const STORAGE_KEY = 'theme';
const root = document.documentElement;
const btn = document.getElementById('theme-toggle');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY, theme);
  if (btn) {
    btn.textContent = theme === 'dark' ? '🌙' : '☀️';
    btn.setAttribute('aria-pressed', theme === 'dark');
  }
}

function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  // als je toch systeem wilt volgen als er niks is:
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

const current = root.getAttribute('data-theme') || getInitialTheme();
applyTheme(current);

if (btn) {
  btn.addEventListener('click', () => {
    const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });
}


/* Functie openen footer navigatie (Bedankt Sanne!) */
function checkDetails() {
    const deDetails = document.querySelectorAll("details");

    if (window.innerWidth > 1000) {    
        deDetails.forEach(eenDetails => {
            eenDetails.setAttribute("open", true);
        });
    } else {
        deDetails.forEach(eenDetails => {
            eenDetails.removeAttribute("open");
        });
    }
}


// dit doet de browser als de gebruiker het scherm schaalt
window.onresize = checkDetails;

// dit doet de browser direct na het laden van de pagina
checkDetails();