/*
 * App.tsx — Structure principale du site
 * ---------------------------------------
 * Ce fichier assemble toutes les sections du site dans l'ordre d'affichage.
 * Pour réorganiser l'ordre des sections, changez l'ordre des composants ci-dessous.
 * Pour enlever une section, commentez-la (ajoutez // devant).
 *
 * ORDRE DES SECTIONS (de haut en bas) :
 * 1. Navbar  — barre de navigation fixe en haut
 * 2. Hero    — grande bannière d'accueil avec photo plein écran
 * 3. About   — section "Notre histoire" (texte de présentation)
 * 4. Products— section "Nos spécialités" (grille de produits)
 * 5. Reviews — section "Avis" (témoignages de professionnels)
 * 6. Contact — section contact (adresse, téléphone, horaires, carte)
 * 7. Footer  — pied de page
 */
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Products } from '@/components/Products';
import { Reviews } from '@/components/Reviews';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    // Conteneur principal — couleur de fond ivoire, couleur de texte bleu
    <div className="min-h-screen bg-[#f7f3ec] font-body text-[#1a3a5c]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
