/*
 * About.tsx — Section "Notre histoire"
 * ------------------------------------
 * Présente l'histoire de B.L.33, le virage vers les professionnels,
 * les clients prioritaires et 4 valeurs clés.
 *
 * POUR MODIFIER :
 * - Le tableau "values" : changez les 4 valeurs clés (icône, titre, texte)
 * - Les paragraphes de texte sont directement dans le JSX ci-dessous
 * - L'image est à la ligne ~39 (changez l'URL pour une autre photo)
 * - Le badge "5 ans" est à la ligne ~47
 *
 * ICÔNES DISPONIBLES (bibliothèque lucide-react) :
 * Wheat (blé), Leaf (feuille), Award (médaille), Truck (camion),
 * Clock (horloge), Heart (cœur), Star (étoile), etc.
 * Voir toutes les icônes sur https://lucide.dev
 */
import { Reveal } from './Reveal';
import { Wheat, Leaf, Award, Truck } from 'lucide-react';

// Les 4 valeurs clés affichées sous le texte
// Pour changer une valeur, modifiez son titre et son texte
// Pour changer l'icône, remplacez le nom de l'icône importée ci-dessus
const values = [
  {
    icon: Award,
    title: 'Farines Tradition Label Rouge',
    text: "Farines traditionnelles et biologiques, matières premières françaises et entièrement traçables.",
  },
  {
    icon: Leaf,
    title: 'Procédés artisanaux',
    text: "Autolyse au pétrissage et pousse lente pour développer pleinement les arômes de chaque fournée.",
  },
  {
    icon: Wheat,
    title: 'Qualité artisanale',
    text: "Une exigence constante au service de vos fournées, chaque jour, malgré les volumes.",
  },
  {
    icon: Truck,
    title: 'Logistique professionnelle',
    text: "Tarifs adaptés à vos volumes et logistique exclusivement pensée pour les besoins des professionnels.",
  },
];

export function About() {
  return (
    <section id="histoire" className="py-24 sm:py-32 bg-[#f7f3ec] relative overflow-hidden">
      {/* Ligne dorée décorative en haut de la section */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e8c170]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Grille 2 colonnes sur grand écran : image à gauche, texte à droite */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* === CÔTÉ IMAGE === */}
          <Reveal>
            <div className="relative">
              {/* Photo principale — changez l'URL pour une autre image */}
              <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-[#0f2a4a]/15">
                <img
                  src="https://images.pexels.com/photos/1383908/pexels-photo-1383908.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Pains rustiques fraîchement cuits sur une planche en bois"
                  className="w-full h-[520px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Badge flottant "5 ans de savoir-faire" en bas à droite de l'image */}
              {/* Changez le chiffre "5" ou le texte selon votre besoin */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#0f2a4a] text-[#f7f3ec] rounded-2xl px-7 py-5 shadow-xl">
                <p className="font-serif-display text-4xl font-semibold text-[#e8c170]">Wouahh</p>
                <p className="text-sm tracking-wide mt-0.5">il a l'air bon ce pain</p>
              </div>
            </div>
          </Reveal>

          {/* === CÔTÉ TEXTE === */}
          <div>
            {/* Petit label doré */}
            <Reveal>
              <p className="text-[#b8862d] tracking-[0.25em] uppercase text-xs font-semibold mb-4">
                Notre histoire
              </p>
              {/* Titre de la section */}
              <h2 className="font-serif-display text-4xl sm:text-5xl font-semibold text-[#1a3a5c] leading-tight text-balance">
                Du savoir-faire artisanal au service des professionnels
              </h2>
            </Reveal>

            {/* Paragraphe 1 — présentation des 5 ans et du virage vers les pros */}
            <Reveal delay={100}>
              <p className="text-[#3d5a7a] text-lg leading-relaxed mt-6">
                Depuis cinq ans, B.L.33 met son savoir-faire de boulangerie artisanale
                au service de ses clients. Après avoir accueilli le public, nous avons
                choisi depuis juin de nous consacrer exclusivement aux professionnels.
              </p>
            </Reveal>

            {/* Paragraphe 2 — explication du contexte (franchises, tarifs, logistique) */}
            <Reveal delay={150}>
              <p className="text-[#3d5a7a] text-base leading-relaxed mt-4">
                Ce virage répond à la forte demande des professionnels et à un contexte
                local marqué par l'implantation de grandes franchises à proximité. Il nous
                permet de proposer des tarifs adaptés aux activités et aux volumes de
                chacun, tout en maintenant la qualité artisanale de nos produits et une
                logistique pensée pour les besoins des professionnels.
              </p>
            </Reveal>

            {/* Paragraphe 3 — engagements qualité (farines, autolyse, pousse lente) */}
            <Reveal delay={200}>
              <p className="text-[#3d5a7a] text-base leading-relaxed mt-4">
                Farines Tradition Label Rouge, farines biologiques, matières premières
                françaises et traçables, autolyse et pousse lente : nous mettons notre
                exigence au service de vos fournées, chaque jour.
              </p>
            </Reveal>

            {/* Encadré doré — liste des clients prioritaires */}
            <Reveal delay={250}>
              <div className="mt-6 p-5 bg-[#e8c170]/10 border-l-4 border-[#e8c170] rounded-r-xl">
                <h3 className="font-serif-display text-xl font-semibold text-[#1a3a5c]">
                  Nos clients prioritaires
                </h3>
                <p className="text-[#5a7a9a] text-sm leading-relaxed mt-1.5">
                  Établissements scolaires, collectivités, restaurants, brasseries et hôtels.
                  Les autres structures professionnelles sont également les bienvenues
                  lorsqu'elles ont des besoins en volumes importants.
                </p>
              </div>
            </Reveal>

            {/* === GRILLE DES 4 VALEURS CLÉS === */}
            {/* Chaque valeur = icône + titre + description */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={300 + i * 80}>
                  <div className="flex gap-4">
                    {/* Cercle doré avec l'icône */}
                    <span className="shrink-0 w-12 h-12 rounded-full bg-[#e8c170]/15 grid place-items-center">
                      <v.icon className="w-5 h-5 text-[#b8862d]" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-serif-display text-xl font-semibold text-[#1a3a5c]">
                        {v.title}
                      </h3>
                      <p className="text-[#5a7a9a] text-sm leading-relaxed mt-1">{v.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
