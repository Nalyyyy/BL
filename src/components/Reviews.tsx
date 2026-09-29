/*
 * Reviews.tsx — Section "Avis" / Témoignages
 * ------------------------------------------
 * Affiche 3 témoignages de professionnels clients de B.L.33.
 *
 * POUR MODIFIER LES AVIS :
 * Changez le tableau "reviews" ci-dessous.
 * Chaque avis a : name (nom du client), role (fonction), text (témoignage), rating (note sur 5).
 *
 * POUR AJOUTER UN AVIS :
 * Ajoutez un bloc { name, role, text, rating } au tableau.
 * (Attention : la grille est prévue pour 3 colonnes sur grand écran)
 */
import { Reveal } from './Reveal';
import { Star, Quote } from 'lucide-react';

// === LISTE DES TÉMOIGNAGES ===
const reviews = [
  {
    name: 'Amandine Lacotte',
    role: 'Chef de cuisine · Toulouse',
    text: "Je viens souvent dans cette boulangerie et n'ai jamais été déçue. Ce matin j'ai acheté deux galettes: une frangipane et une brioché. Les deux étaient très bonnes! Elles ne sont pas trop sucrées et ne sont donc pas écoeurantes.",
    rating: 5,  // Nombre d'étoiles (1 à 5)
  },
  {
    name: 'Isabelle Roumaillac',
    role: 'Responsable restauration · Collectivité',
    text: "Tous les pains sont vraiment excellent et l'accueil toujours très agréable et souriant. Je voulais écrire ça depuis longtemps. Mais samedi dernier, jai acheté pour la 1ère fois ici une galette briochée. Et bien cela faisait une éternité que je n'avais pas mangé de galette aussi bonne ! Nous étions tous unanime : parfumée, légère, et extra moelleuse. Merci beaucoup !",
    rating: 5,
  },
  {
    name: 'Christelle DAU',
    role: 'Directrice petit-déjeuner',
    text: "Venue par hasard et vraiment ravie, je reviendrai Gâteaux individuels un peu chers (5,50e pièce) mais vraiment excellents et surtout PAS TROP SUCRÉS par rapport à d’autres boulangeries donc pas de regrets, pain à l’épeautre très bon, vendeuse très agréable",
    rating: 5,
  },
];

export function Reviews() {
  return (
    // Section sur fond ivoire
    <section id="avis" className="py-24 sm:py-32 bg-[#f7f3ec] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* === TITRE DE LA SECTION === */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[#b8862d] tracking-[0.25em] uppercase text-xs font-semibold mb-4">
              Ils nous font confiance
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl font-semibold text-[#1a3a5c] leading-tight">
              Ce que disent nos clients (la faudrait trouver des avis de pro )
            </h2>
          </div>
        </Reveal>

        {/* === GRILLE DES TÉMOIGNAGES === */}
        {/* 1 colonne sur mobile, 3 sur grand écran */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <figure className="bg-white rounded-2xl p-8 shadow-lg shadow-[#0f2a4a]/5 h-full flex flex-col">
                {/* Icône guillemet décorative */}
                <Quote className="w-9 h-9 text-[#e8c170]/60 mb-4" strokeWidth={1.5} />
                {/* Texte du témoignage */}
                <blockquote className="text-[#3d5a7a] leading-relaxed flex-1">
                  "{r.text}"
                </blockquote>
                {/* Étoiles (autant que la note "rating") */}
                <div className="flex gap-1 mt-5">
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-[#e8c170] text-[#e8c170]" />
                  ))}
                </div>
                {/* Nom et fonction du client */}
                <figcaption className="mt-4 pt-4 border-t border-[#e8c170]/20">
                  <p className="font-serif-display text-xl font-semibold text-[#1a3a5c]">{r.name}</p>
                  {/* <p className="text-sm text-[#5a7a9a]">{r.role}</p> */}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
