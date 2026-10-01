import { useState } from "react";
import type { FormEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Reveal } from "./Reveal";

type FormErrors = {
  structure?: string;
  secteur?: string;
  nom?: string;
  email?: string;
  telephone?: string;
  commune?: string;
  produits?: string;
  volumes?: string;
};

export function Message() {
  const [state, handleSubmit] = useForm("xppwngod");

  const [errors, setErrors] = useState<FormErrors>({});

  // --------------------------------------------------
  // VALIDATION DU FORMULAIRE
  // --------------------------------------------------

  const validateForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const structure = String(formData.get("structure") || "").trim();
    const secteur = String(formData.get("secteur") || "").trim();
    const nom = String(formData.get("nom") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const telephone = String(formData.get("telephone") || "").trim();
    const commune = String(formData.get("commune") || "").trim();
    const produits = String(formData.get("produits") || "").trim();
    const volumes = String(formData.get("volumes") || "").trim();

    const newErrors: FormErrors = {};

    // --------------------------------------------------
    // NOM DE LA STRUCTURE
    // --------------------------------------------------

    if (!structure) {
      newErrors.structure =
        "Veuillez renseigner le nom de votre structure.";
    } else if (structure.length < 2) {
      newErrors.structure =
        "Le nom de la structure doit contenir au moins 2 caractères.";
    }

    // --------------------------------------------------
    // SECTEUR D'ACTIVITÉ
    // --------------------------------------------------

    if (!secteur) {
      newErrors.secteur =
        "Veuillez sélectionner votre secteur d'activité.";
    }

    // --------------------------------------------------
    // NOM ET PRÉNOM
    // --------------------------------------------------

    if (!nom) {
      newErrors.nom =
        "Veuillez renseigner votre nom et prénom.";
    } else if (nom.length < 2) {
      newErrors.nom =
        "Votre nom et prénom doivent contenir au moins 2 caractères.";
    }

    // --------------------------------------------------
    // EMAIL
    // --------------------------------------------------

    if (!email) {
      newErrors.email =
        "Veuillez renseigner votre adresse e-mail.";
    } else {
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

      if (!emailRegex.test(email)) {
        newErrors.email =
          "Veuillez renseigner une adresse e-mail valide. Exemple : contact@entreprise.fr";
      }
    }

    // --------------------------------------------------
    // TÉLÉPHONE
    // --------------------------------------------------

    if (!telephone) {
      newErrors.telephone =
        "Veuillez renseigner votre numéro de téléphone.";
    } else {
      const phoneDigits = telephone.replace(/\D/g, "");

      if (phoneDigits.length < 10) {
        newErrors.telephone =
          "Veuillez renseigner un numéro de téléphone valide.";
      }
    }

    // --------------------------------------------------
    // COMMUNE
    // --------------------------------------------------

    if (!commune) {
      newErrors.commune =
        "Veuillez renseigner la commune de livraison.";
    } else if (commune.length < 2) {
      newErrors.commune =
        "Le nom de la commune doit contenir au moins 2 caractères.";
    }

    // --------------------------------------------------
    // PRODUITS
    // --------------------------------------------------

    if (!produits) {
      newErrors.produits =
        "Veuillez indiquer les produits que vous souhaitez.";
    } else if (produits.length < 3) {
      newErrors.produits =
        "Veuillez préciser les produits souhaités.";
    }

    // --------------------------------------------------
    // VOLUMES
    // --------------------------------------------------

    if (!volumes) {
      newErrors.volumes =
        "Veuillez indiquer les volumes estimés.";
    } else if (volumes.length < 2) {
      newErrors.volumes =
        "Veuillez préciser les volumes estimés.";
    }

    // --------------------------------------------------
    // ENREGISTREMENT DES ERREURS
    // --------------------------------------------------

    setErrors(newErrors);

    // --------------------------------------------------
    // S'IL Y A DES ERREURS
    // --------------------------------------------------

    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = Object.keys(
        newErrors
      )[0] as keyof FormErrors;

      document
        .getElementById(firstErrorField)
        ?.focus();

      return;
    }

    // --------------------------------------------------
    // FORMULAIRE VALIDE
    // --------------------------------------------------

    handleSubmit(event);
  };

  // --------------------------------------------------
  // CLASSE DES CHAMPS
  // --------------------------------------------------

  const inputClass = (field: keyof FormErrors) => {
    if (errors[field]) {
      return "w-full rounded-lg border border-red-500 bg-white px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100";
    }

    return "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100";
  };

  // --------------------------------------------------
  // MESSAGE APRÈS ENVOI RÉUSSI
  // --------------------------------------------------

  if (state.succeeded) {
    return (
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-2xl bg-green-50 p-8 text-center">
          <div className="mb-4 text-4xl">✓</div>

          <h2 className="text-2xl font-bold text-gray-900">
            Demande envoyée !
          </h2>

          <p className="mt-3 text-gray-600">
            Merci pour votre demande de devis.
            <br />
            Nous reviendrons vers vous rapidement.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="devis"
      className="relative overflow-hidden bg-[#f7f3ec] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* --------------------------------------------------
            TITRE
        -------------------------------------------------- */}

        <Reveal>
          <div className="mb-10 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#b8862d]">
              Nous contacter
            </p>

            <h2 className="font-serif-display text-4xl font-semibold leading-tight text-[#1a3a5c] sm:text-5xl">
              Demander un devis
            </h2>

            <p className="mt-5 text-lg font-light text-[#1a3a5c]">
              Vous êtes une entreprise, une association ou une collectivité ?
              <br />
              Décrivez-nous votre besoin et nous vous répondrons rapidement.
            </p>
          </div>
        </Reveal>

        {/* --------------------------------------------------
            FORMULAIRE
        -------------------------------------------------- */}

        <Reveal>
          <form
            onSubmit={validateForm}
            noValidate
            className="rounded-2xl bg-gray-50 p-6 shadow-sm md:p-8"
          >
            <div className="grid gap-6 md:grid-cols-2">

              {/* --------------------------------------------------
                  NOM DE LA STRUCTURE
              -------------------------------------------------- */}

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
                  placeholder="Ex. Restaurant Le Petit Gourmet"
                  className={inputClass("structure")}
                />

                {errors.structure && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.structure}
                  </p>
                )}

                <ValidationError
                  prefix="Nom de la structure"
                  field="structure"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-600"
                />
              </div>

              {/* --------------------------------------------------
                  SECTEUR D'ACTIVITÉ
              -------------------------------------------------- */}

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
                  defaultValue=""
                  className={inputClass("secteur")}
                >
                  <option value="" disabled>
                    Sélectionnez un secteur
                  </option>

                  <option value="restaurant">
                    Etablissement Scolaire
                  </option>

                  <option value="hotel">
                    Collectivité
                  </option>

                  <option value="cafe">
                    Restaurant
                  </option>

                  <option value="epicerie">
                    Brasserie
                  </option>

                  <option value="association">
                    Hôtel
                  </option>

                  <option value="collectivite">
                    Epicerie/Commerce
                  </option>

                  <option value="entreprise">
                    Association
                  </option>

                  <option value="autre">
                    Autre
                  </option>
                </select>

                {errors.secteur && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.secteur}
                  </p>
                )}

                <ValidationError
                  prefix="Secteur d'activité"
                  field="secteur"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-600"
                />
              </div>

              {/* --------------------------------------------------
                  NOM ET PRÉNOM
              -------------------------------------------------- */}

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
                  placeholder="Jean Dupont"
                  className={inputClass("nom")}
                />

                {errors.nom && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.nom}
                  </p>
                )}

                <ValidationError
                  prefix="Nom et prénom"
                  field="nom"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-600"
                />
              </div>

              {/* --------------------------------------------------
                  EMAIL
              -------------------------------------------------- */}

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
                  placeholder="contact@entreprise.fr"
                  className={inputClass("email")}
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}

                <ValidationError
                  prefix="E-mail"
                  field="email"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-600"
                />
              </div>

              {/* --------------------------------------------------
                  TÉLÉPHONE
              -------------------------------------------------- */}

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
                  placeholder="06 12 34 56 78"
                  className={inputClass("telephone")}
                />

                {errors.telephone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.telephone}
                  </p>
                )}

                <ValidationError
                  prefix="Téléphone"
                  field="telephone"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-600"
                />
              </div>

              {/* --------------------------------------------------
                  COMMUNE DE LIVRAISON
              -------------------------------------------------- */}

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
                  placeholder="Ex. Bordeaux"
                  className={inputClass("commune")}
                />

                {errors.commune && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.commune}
                  </p>
                )}

                <ValidationError
                  prefix="Commune de livraison"
                  field="commune"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-600"
                />
              </div>

              {/* --------------------------------------------------
                  PRODUITS SOUHAITÉS
              -------------------------------------------------- */}

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
                  rows={4}
                  placeholder="Ex. Croissants, pains au chocolat, baguettes tradition..."
                  className={inputClass("produits")}
                />

                {errors.produits && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.produits}
                  </p>
                )}

                <ValidationError
                  prefix="Produits souhaités"
                  field="produits"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-600"
                />
              </div>

              {/* --------------------------------------------------
                  VOLUMES
              -------------------------------------------------- */}

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
                  rows={3}
                  placeholder="Ex. 50 croissants par semaine, 100 baguettes par semaine..."
                  className={inputClass("volumes")}
                />

                {errors.volumes && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.volumes}
                  </p>
                )}

                <ValidationError
                  prefix="Volumes estimés"
                  field="volumes"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-600"
                />
              </div>

              {/* --------------------------------------------------
                  MESSAGE
              -------------------------------------------------- */}

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
                  maxLength={2000}
                  placeholder="Précisez votre besoin, vos contraintes ou toute autre information utile..."
                  className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-600"
                />
              </div>
            </div>

            {/* --------------------------------------------------
                ERREUR GÉNÉRALE FORMSPREE
            -------------------------------------------------- */}

            {state.errors && (
              <ValidationError
                errors={state.errors}
                className="mt-6 rounded-lg bg-red-50 p-4 text-center text-sm text-red-700"
              />
            )}

            {/* --------------------------------------------------
                BOUTON
            -------------------------------------------------- */}

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="rounded-lg bg-[#b8862d] px-8 py-3 font-semibold text-white transition hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting
                  ? "Envoi en cours..."
                  : "Demander un devis"}
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
