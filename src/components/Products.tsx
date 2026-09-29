/*
 * Products.tsx — Section "Nos spécialités"
 * ----------------------------------------
 * Affiche une grille de 6 produits (pains, viennoiseries, pâtisseries)
 * avec photo, nom, description et prix.
 *
 * POUR AJOUTER / MODIFIER / SUPPRIMER UN PRODUIT :
 * Modifiez le tableau "products" ci-dessous.
 * Chaque produit a : name (nom), desc (description), price (prix), img (photo), tag (optionnel).
 *
 * POUR CHANGER LE TITRE DE LA SECTION :
 * Modifiez le texte dans la balise <h2> et le <p> ci-dessous.
 */
import { Reveal } from './Reveal';

// Type TypeScript qui décrit la structure d'un produit
type Product = {
  name: string;       // Nom du produit
  desc: string;       // Description courte
  gram: string;      // Grammage (chaîne de caractères, ex: "280g")
  img: string;        // URL de la photo
  tag?: string;       // Badge optionnel (ex: "Signature", "Best-seller")
};

// === LISTE DES PRODUITS ===
// Pour en ajouter un, copiez un bloc { ... } et ajoutez-le à la liste.
// Pour en supprimer un, effacez son bloc.
// Pour changer une photo, remplacez l'URL "img".
const products: Product[] = [
  {
    name: 'Baguette',
    desc: 'Tradition',
    gram: '280g',
    img: 'https://images.pexels.com/photos/30826792/pexels-photo-30826792.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Signature',
  },
  {
    name: 'Demi-Baguette',
    desc: 'Tradition',
    gram: '125g',
    img: 'https://images.pexels.com/photos/1387075/pexels-photo-1387075.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Pain',
    desc: 'Tradition',
    gram: '400g',
    img: 'https://images.pexels.com/photos/30853716/pexels-photo-30853716.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Best-seller',
  },
  {
    name: 'Petit Pavé',
    desc: 'Tradition',
    gram: '50g',
    img: 'https://images.pexels.com/photos/30919066/pexels-photo-30919066.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Croissant',
    desc: "Viennoiserie",
    gram: '50g',
    img: 'https://images.pexels.com/photos/2245293/pexels-photo-2245293.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Pain au chocolat',
    desc: 'Viennoiserie',
    gram: '60g',
    img: 'https://images.pexels.com/photos/35815220/pexels-photo-35815220.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Mini-croissant',
    desc: 'Mini-viennoiseries',
    gram: '20g',
    img: 'https://images.pexels.com/photos/30826792/pexels-photo-30826792.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Signature',
  },
  {
    name: 'Mini-pain au chocolat',
    desc: 'Mini-viennoiseries',
    gram: '25g',
    img: 'https://images.pexels.com/photos/1387075/pexels-photo-1387075.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Mini-pain aux raisins',
    desc: 'Mini-viennoiseries',
    gram: '25g',
    img: 'https://images.pexels.com/photos/30853716/pexels-photo-30853716.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Best-seller',
  },
  {
    name: 'Pain de mie tranché',
    desc: 'Viennoise',
    gram: '1 000g',
    img: 'https://images.pexels.com/photos/30919066/pexels-photo-30919066.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Demi-baguette viennoise',
    desc: "Viennoise",
    gram: '125g',
    img: 'https://images.pexels.com/photos/2245293/pexels-photo-2245293.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Pain a burger',
    desc: 'Restauration',
    gram: '?',
    img: 'https://images.pexels.com/photos/35815220/pexels-photo-35815220.jpeg?auto=compress&cs=tinysrgb&w=900',
  },{
    name: 'Pain a hot-dog',
    desc: 'Restauration',
    gram: '?',
    img: 'https://images.pexels.com/photos/35815220/pexels-photo-35815220.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Couronne briochée',
    desc: 'Festibités',
    gram: '400g',
    img: 'https://images.pexels.com/photos/30826792/pexels-photo-30826792.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Signature',
  },
  {
    name: 'Pain de Campagne',
    desc: 'Pains spéciaux',
    gram: '?',
    img: 'https://images.pexels.com/photos/1387075/pexels-photo-1387075.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Pains spéciaux',
    desc: 'Pains spéciaux',
    gram: '?',
    img: 'https://images.pexels.com/photos/30853716/pexels-photo-30853716.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export function Products() {
  return (
    // Section sur fond bleu foncé
    <section id="produits" className="py-24 sm:py-32 bg-[#0f2a4a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* === TITRE DE LA SECTION === */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            {/* Petit label doré au-dessus du titre */}
            <p className="text-[#e8c170] tracking-[0.25em] uppercase text-xs font-semibold mb-4">
              Nos spécialités
            </p>
            {/* Titre principal */}
            <h2 className="font-serif-display text-4xl sm:text-5xl font-semibold text-[#f7f3ec] leading-tight text-balance">
              Pains &amp; viennoiseries pour professionnels
            </h2>
            {/* Sous-titre / description */}
            <p className="text-[#f7f3ec]/60 text-lg mt-5 font-light">
              Une sélection artisanale cuite chaque matin, adaptée à vos volumes et à votre activité.
            </p>
          </div>
        </Reveal>

        {/* === GRILLE DES PRODUITS === */}
        {/* 1 colonne sur mobile, 2 sur tablette, 3 sur grand écran */}
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <article className="group bg-[#16395e] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-black/40 transition-all duration-500 hover:-translate-y-1.5">
                {/* Photo du produit — zoom au survol */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Badge optionnel (ex: "Signature", "Best-seller") */}
                  {p.tag && (
                    <span className="absolute top-4 left-4 bg-[#e8c170] text-[#0f2a4a] text-xs font-semibold px-2 py-1 rounded-full tracking-wide">
                      {p.tag}
                    </span>
                  )}
                </div>
                {/* Nom du produit + grammes */}
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-serif-display text-2xl font-semibold text-[#f7f3ec]">
                      {p.name}
                    </h3>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    {/* Description */}
                    <p className="text-[#f7f3ec]/55 text-sm leading-relaxed mt-2">{p.desc}</p>
                    <span className="text-[#e8c170] font-semibold text-sm whitespace-nowrap">
                      {p.gram}
                    </span>
                  </div>
                  
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
