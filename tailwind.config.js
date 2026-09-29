/**
 * Configuration Tailwind CSS
 * --------------------------
 * Ce fichier definit les couleurs et polices personnalisees du site.
 * Pour changer une couleur sur tout le site, modifiez sa valeur ici.
 *
 * PALETTE DE COULEURS DU SITE :
 * - crust  : bleu profond (#0f2a4a) — fonds sombres (hero, produits, contact, footer)
 * - gold   : doré/blé (#e8c170)    — boutons, accents, prix, icônes
 * - golddeep : doré foncé (#b8862d) — petits labels, sous-titres
 * - cream  : ivoire/crème (#f7f3ec) — fonds clairs et textes sur fond bleu
 */
/** @type {import('tailwindcss').Config} */
export default {
  // Fichiers que Tailwind doit analyser pour generer le CSS
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crust: '#0f2a4a',
        gold: '#e8c170',
        golddeep: '#b8862d',
        cream: '#f7f3ec',
      },
      fontFamily: {
        // Police des titres (élégante, avec empattements)
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // Police du texte courant (moderne, lisible)
        body: ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
