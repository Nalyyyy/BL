/*
 * Hero.tsx — Bannière d'accueil plein écran
 * -----------------------------------------
 * C'est la première chose que voient les visiteurs : une grande photo
 * de pains avec le nom, le slogan et deux boutons.
 *
 * POUR MODIFIER :
 * - HERO_IMG : changez l'URL pour utiliser une autre photo de fond
 * - Le slogan et les textes sont directement dans le JSX ci-dessous
 * - Les boutons pointent vers #produits et #contact (id des sections)
 */
import { ChevronDown } from 'lucide-react';

// Image de fond — remplacez cette URL par une autre photo si besoin
const HERO_IMG =
  'https://images.pexels.com/photos/35993723/pexels-photo-35993723.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function Hero() {
  return (
    <section id="accueil" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* === IMAGE DE FOND === */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Pains artisanaux disposés sur des étagères en bois"
          className="w-full h-full object-cover scale-105 animate-[float-slow_12s_ease-in-out_infinite]"
          loading="eager"
        />
        {/* Voile sombre pour que le texte blanc soit lisible sur la photo */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* === CONTENU CENTRÉ === */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Petit label au-dessus du titre */}
        <p className="animate-fade-in text-[#e8c170] tracking-[0.35em] uppercase text-xs sm:text-sm font-medium mb-6">
          Boulangerie artisanale pour professionnels
        </p>
        {/* Titre principal */}
        <h1 className="animate-fade-up font-serif-display text-5xl sm:text-7xl md:text-8xl font-semibold text-[#f7f3ec] leading-[1.05] text-balance max-w-4xl">
          Le pain artisanal,
          <br />
          <span className="italic text-[#e8c170]">au service des professionnels</span>
        </h1>
        {/* Sous-titre / description */}
        <p className="animate-fade-up text-[#f7f3ec]/85 text-lg sm:text-xl mt-7 max-w-xl font-light leading-relaxed" style={{ animationDelay: '0.15s' }}>
          Farines Tradition Label Rouge, autolyse et pousse lente.
          Une exigence artisanale au service de vos fournées, chaque jour.
        </p>
        {/* === BOUTONS === */}
        <div className="animate-fade-up flex flex-col sm:flex-row gap-4 mt-10" style={{ animationDelay: '0.3s' }}>
          {/* Bouton principal (doré) — mène à la section produits */}
          <a
            href="#produits"
            className="px-8 py-3.5 bg-[#e8c170] text-[#0f2a4a] font-medium tracking-wide rounded-full hover:bg-[#f0d089] transition-all duration-300 hover:scale-105 shadow-lg shadow-black/20"
          >
            Découvrir nos produits
          </a>
          {/* Bouton secondaire (contour) — mène à la section contact */}
          <a
            href="#contact"
            className="px-8 py-3.5 border border-[#f7f3ec]/40 text-[#f7f3ec] font-medium tracking-wide rounded-full hover:bg-[#f7f3ec]/10 transition-all duration-300"
          >
            Nous contacter
          </a>
        </div>
      </div>

      {/* === FLÈCHE DE DÉFILEMENT === */}
      {/* Petite flèche animée en bas qui invite à scroller vers le bas */}
      <a
        href="#produits"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#f7f3ec]/70 hover:text-[#e8c170] transition-colors animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  );
}
