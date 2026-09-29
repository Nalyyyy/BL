/*
 * Navbar.tsx — Barre de navigation fixe en haut du site
 * -----------------------------------------------------
 * Contient le logo "B.L.33" et les liens du menu.
 * La barre devient bleu foncé avec un fond opaque quand on scrolle vers le bas.
 * Sur mobile, le menu se replie dans un bouton hamburger.
 *
 * POUR MODIFIER LES LIENS DU MENU :
 * Changez le tableau "links" ci-dessous (label = texte affiché, href = section cible).
 * Les href correspondent aux id des sections (#accueil, #produits, etc.)
 */
import { useEffect, useState } from 'react';
import { Menu, X, Wheat } from 'lucide-react';
import logo from "../assets/Logo.png"

// Liens du menu — label = texte affiché, href = section cible (avec #)
const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Nos pains', href: '#produits' },
  { label: 'Notre histoire', href: '#histoire' },
  { label: 'Avis', href: '#avis' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  // "scrolled" : true quand l'utilisateur a défilé vers le bas (change le style de la barre)
  const [scrolled, setScrolled] = useState(false);
  // "open" : true quand le menu mobile est déplié
  const [open, setOpen] = useState(false);

  // Écoute le scroll de la page pour changer l'apparence de la barre
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0f2a4a]/95 backdrop-blur-md py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* === LOGO === */}
        {/* Icône blé doré + nom "B.L.33" — pour changer le nom, modifiez le texte ci-dessous */}
        <a href="#accueil" className="flex items-center gap-2.5 group">
          <span
            className={`w-14 h-14 rounded-full grid place-items-center transition-colors duration-500`}
          >
            <img src={logo} alt='Logo' />
          </span>
        </a>

        {/* === MENU BUREAU === */}
        {/* Affiché uniquement sur grand écran (md et plus) */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[#f7f3ec]/90 hover:text-[#e8c170] transition-colors duration-300 text-sm tracking-wide uppercase font-medium after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-px after:bg-[#e8c170] hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* === BOUTON MENU MOBILE === */}
        {/* Affiché uniquement sur petit écran — icône hamburger ou croix */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[#f7f3ec] p-1"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* === MENU DÉROULANT MOBILE === */}
      {/* S'affiche en dessous de la barre quand on clique sur le hamburger */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 pt-4 pb-6 space-y-3 bg-[#0f2a4a]/95 backdrop-blur-md">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-[#f7f3ec]/90 hover:text-[#e8c170] transition-colors text-base font-medium py-1"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
