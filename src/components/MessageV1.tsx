
import { useState } from "react";
import { Reveal } from "./Reveal";

export function Messagev1() {
  const [formData, setFormData] = useState({
    structure: "",
    secteur: "",
    nom: "",
    email: "",
    telephone: "",
    produits: "",
    volumes: "",
    commune: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Demande de devis :", formData);

    // Pour l'instant, le formulaire ne fait qu'afficher les données
    // dans la console.
    // On pourra ensuite le connecter à un service d'envoi d'e-mails.
  };

  return (
    <section id="devis" className="py-24 sm:py-32 bg-[#f7f3ec] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre */}
        <Reveal>
        <div className="mb-10 text-center">
          <p className="text-[#b8862d] tracking-[0.25em] uppercase text-xs font-semibold mb-4">
              Nous contacter
            </p>
          <h2 className="font-serif-display text-4xl sm:text-5xl font-semibold text-[#1a3a5c] leading-tight text-balance">
            Demander un devis
          </h2>

          <p className="text-[#1a3a5c] text-lg mt-5 font-light">
            Vous êtes une entreprise, une association ou une collectivité ?
            <br />
            Décrivez-nous votre besoin et nous vous répondrons rapidement.
          </p>
        </div>
        </Reveal>

        <Reveal>
        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-gray-50 p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-6 md:grid-cols-2">

            {/* Nom de la structure */}
            <div>
              <label
                htmlFor="structure"
                className="mb-2 block font-medium text-[#1a3a5c]"
              >
                Nom de la structure *
              </label>

              <input
                id="structure"
                name="structure"
                type="text"
                required
                value={formData.structure}
                onChange={handleChange}
                placeholder="Ex. Restaurant Le Petit Gourmet"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            {/* Secteur */}
            <div>
              <label
                htmlFor="secteur"
                className="mb-2 block font-medium text-[#1a3a5c]"
              >
                Secteur d'activité *
              </label>

              <select
                id="secteur"
                name="secteur"
                required
                value={formData.secteur}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
              >
                <option value="">Sélectionnez un secteur</option>
                <option value="restaurant">Etablissement Scolaire</option>
                <option value="hotel">Collectivité</option>
                <option value="cafe">Restaurant</option>
                <option value="epicerie">Brasserie</option>
                <option value="association">Hôtel</option>
                <option value="collectivite">Epicerie/Commerce</option>
                <option value="entreprise">Association</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            {/* Nom */}
            <div>
              <label
                htmlFor="nom"
                className="mb-2 block font-medium text-[#1a3a5c]"
              >
                Nom et prénom *
              </label>

              <input
                id="nom"
                name="nom"
                type="text"
                required
                value={formData.nom}
                onChange={handleChange}
                placeholder="Jean Dupont"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-[#1a3a5c]"
              >
                Adresse e-mail *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="contact@entreprise.fr"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            {/* Téléphone */}
            <div>
              <label
                htmlFor="telephone"
                className="mb-2 block font-medium text-[#1a3a5c]"
              >
                Téléphone *
              </label>

              <input
                id="telephone"
                name="telephone"
                type="tel"
                required
                value={formData.telephone}
                onChange={handleChange}
                placeholder="06 12 34 56 78"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            {/* Commune */}
            <div>
              <label
                htmlFor="commune"
                className="mb-2 block font-medium text-[#1a3a5c]"
              >
                Commune de livraison *
              </label>

              <input
                id="commune"
                name="commune"
                type="text"
                required
                value={formData.commune}
                onChange={handleChange}
                placeholder="Ex. Bordeaux"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            {/* Produits */}
            <div className="md:col-span-2">
              <label
                htmlFor="produits"
                className="mb-2 block font-medium text-[#1a3a5c]"
              >
                Produits souhaités *
              </label>

              <textarea
                id="produits"
                name="produits"
                required
                rows={4}
                value={formData.produits}
                onChange={handleChange}
                placeholder="Ex. Croissants, pains au chocolat, baguettes tradition..."
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            {/* Volumes */}
            <div className="md:col-span-2">
              <label
                htmlFor="volumes"
                className="mb-2 block font-medium text-[#1a3a5c]"
              >
                Volumes estimés *
              </label>

              <textarea
                id="volumes"
                name="volumes"
                required
                rows={3}
                value={formData.volumes}
                onChange={handleChange}
                placeholder="Ex. 50 croissants par semaine, 100 baguettes par semaine..."
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block font-medium text-[#1a3a5c]"
              >
                Votre message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Précisez votre besoin, vos contraintes ou toute autre information utile..."
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
              />
            </div>
          </div>

          {/* Bouton */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="rounded-lg bg-[#b8862d] px-8 py-3 font-semibold text-white transition hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Demander un devis
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500">
            * Champs obligatoires
          </p>
        </form>
        </Reveal>
      </div>
    </section>
  );
}

