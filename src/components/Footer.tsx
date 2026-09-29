/*
 * Footer.tsx — Pied de page
 * -------------------------
 * Affiche le logo, des liens de navigation et le copyright.
 *
 * POUR MODIFIER :
 * - Le nom "B.L.33" est dans le JSX ci-dessous
 * - Les liens du menu pointent vers les sections (#produits, #histoire, etc.)
 * - L'année du copyright se met à jour automatiquement
 */
import logo from "../assets/Logo.png"

export function Footer() {
  return (
    // Fond bleu nuit (légèrement plus sombre que le reste)
    <footer className="bg-[#0a1f38] text-[#f7f3ec]/60 py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Ligne du haut : logo + navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo (icône blé + nom) */}
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-full grid place-items-center">
              <img src={logo} alt='Logo' />
            </span>
          </div>
          {/* Liens de navigation — identiques à ceux du menu principal */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#produits" className="hover:text-[#e8c170] transition-colors">Nos pains</a>
            <a href="#histoire" className="hover:text-[#e8c170] transition-colors">Notre histoire</a>
            <a href="#avis" className="hover:text-[#e8c170] transition-colors">Avis</a>
            <a href="#contact" className="hover:text-[#e8c170] transition-colors">Contact</a>
          </nav>
        </div>
        {/* Ligne du bas : copyright — l'année se met à jour automatiquement */}
        <div className="mt-8 pt-8 border-t border-[#f7f3ec]/10 text-center text-sm">
          <p>© {new Date().getFullYear()} B.L.33 — Tous droits réservés.</p>
          <p className="mt-1 text-[#f7f3ec]/35">Boulangerie artisanale pour professionnels</p>
        </div>
      </div>
    </footer>
  );
}
