/*
 * Contact.tsx — Section "Contact"
 * -------------------------------
 * Affiche les coordonnées de la boulangerie (adresse, téléphone, email,
 * horaires) et une carte intégrée (OpenStreetMap).
 *
 *
 * POUR TROUVER VOS COORDONNÉES GPS :
 * Allez sur https://www.openstreetmap.org, cherchez votre adresse,
 * puis regardez les chiffres dans l'URL (lat=...&lon=...).
 */
import { Reveal } from './Reveal';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';

// === COORDONNÉES DE LA BOULANGERIE ===
// ⚠️ Remplacez ces valeurs par les vôtres
const BAKERY = {
  name: 'B.L.',
  address: '24 Av. Descartes, 33160 Saint-Médard-en-Jalles',
  phone: '+33 5 57 65 27 04',
  email: 'contact@bl33.fr',
  // Horaires d'ouverture — un objet par ligne
  // Pour changer un jour, modifiez "day" ou "time"
  // Si fermé, mettez time: 'Fermé' (le texte sera automatiquement grisé et italique)
  hours: [
    { day: 'Lundi — Dimanche', time: '05h — 11h' },
  ],
  // Coordonnées GPS — remplacez par les vôtres
  lat: 44.886997,
  lng: -0.696371,
};

export function Contact() {
  // Génération automatique des liens de carte (ne pas modifier)
  // Lien pour la carte intégrée (iframe)
  const mapsEmbed = `https://www.openstreetmap.org/export/embed.html?bbox=${BAKERY.lng - 0.008}%2C${BAKERY.lat - 0.005}%2C${BAKERY.lng + 0.008}%2C${BAKERY.lat + 0.005}&layer=mapnik&marker=${BAKERY.lat}%2C${BAKERY.lng}`;
  // Lien pour ouvrir la carte dans un nouvel onglet
  const mapsLink = `https://www.google.com/maps/place/Boulangerie+BL+-+Artisan+boulanger+pour+les+professionnels/@44.886947,-0.696395,17z/data=!4m15!1m8!3m7!1s0xd54d17469d835e9:0xf4493916eafa968e!2sBoulangerie+BL+-+Artisan+boulanger+pour+les+professionnels!8m2!3d44.8869746!4d-0.6962881!10e5!16s%2Fg%2F11t9nn4nn2!3m5!1s0xd54d17469d835e9:0xf4493916eafa968e!8m2!3d44.8869746!4d-0.6962881!16s%2Fg%2F11t9nn4nn2?entry=ttu&g_ep=EgoyMDI2MDkyNy4wIKXMDSoASAFQAw%3D%3D`;

  return (
    // Section sur fond bleu foncé
    <section id="contact" className="py-24 sm:py-32 bg-[#0f2a4a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* === TITRE DE LA SECTION === */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[#e8c170] tracking-[0.25em] uppercase text-xs font-semibold mb-4">
              Nous trouver
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl font-semibold text-[#f7f3ec] leading-tight">
              Venez nous rendre visite
            </h2>
          </div>
        </Reveal>

        {/* === GRILLE 2 COLONNES : infos à gauche, carte à droite === */}
        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {/* === CARTE D'INFORMATIONS === */}
          <Reveal>
            <div className="bg-[#16395e] rounded-2xl p-8 sm:p-10 h-full flex flex-col">
              <div className="space-y-7 flex-1">

                {/* --- ADRESSE --- */}
                <div className="flex gap-4">
                  <span className="shrink-0 w-12 h-12 rounded-full bg-[#e8c170]/15 grid place-items-center">
                    <MapPin className="w-5 h-5 text-[#e8c170]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-[#f7f3ec]/50 text-xs uppercase tracking-wider font-semibold mb-1">
                      Adresse
                    </h3>
                    <p className="text-[#f7f3ec] text-lg">{BAKERY.address}</p>
                    {/* Liens vers la carte et l'itinéraire GPS */}
                    <div className="flex flex-wrap gap-3 mt-2">
                      <a
                        href={mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#e8c170] hover:text-[#f0d089] text-sm transition-colors"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        Voir sur la carte
                      </a>
                    </div>
                  </div>
                </div>

                {/* --- TÉLÉPHONE --- */}
                <div className="flex gap-4">
                  <span className="shrink-0 w-12 h-12 rounded-full bg-[#e8c170]/15 grid place-items-center">
                    <Phone className="w-5 h-5 text-[#e8c170]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-[#f7f3ec]/50 text-xs uppercase tracking-wider font-semibold mb-1">
                      Téléphone
                    </h3>
                    {/* Cliquez pour appeler directement (lien tel:) */}
                    <a
                      href={`tel:${BAKERY.phone.replace(/\s/g, '')}`}
                      className="text-[#f7f3ec] text-lg hover:text-[#e8c170] transition-colors"
                    >
                      {BAKERY.phone}
                    </a>
                  </div>
                </div>

                {/* --- EMAIL --- */}
                <div className="flex gap-4">
                  <span className="shrink-0 w-12 h-12 rounded-full bg-[#e8c170]/15 grid place-items-center">
                    <Mail className="w-5 h-5 text-[#e8c170]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-[#f7f3ec]/50 text-xs uppercase tracking-wider font-semibold mb-1">
                      Email
                    </h3>
                    {/* Cliquez pour ouvrir le client email (lien mailto:) */}
                    <a
                      href={`mailto:${BAKERY.email}`}
                      className="text-[#f7f3ec] text-lg hover:text-[#e8c170] transition-colors break-all"
                    >
                      {BAKERY.email}
                    </a>
                  </div>
                </div>

                {/* --- HORAIRES D'OUVERTURE --- */}
                <div className="flex gap-4">
                  <span className="shrink-0 w-12 h-12 rounded-full bg-[#e8c170]/15 grid place-items-center">
                    <Clock className="w-5 h-5 text-[#e8c170]" strokeWidth={1.75} />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[#f7f3ec]/50 text-xs uppercase tracking-wider font-semibold mb-3">
                      Horaires d'ouverture
                    </h3>
                    {/* Liste des horaires — générée automatiquement depuis BAKERY.hours */}
                    <ul className="space-y-2">
                      {BAKERY.hours.map((h) => (
                        <li key={h.day} className="flex justify-between items-baseline text-[#f7f3ec]">
                          <span className="text-base">{h.day}</span>
                          {/* "Fermé" s'affiche en gris italique, sinon en doré */}
                          <span
                            className={`text-base ${
                              h.time === 'Fermé'
                                ? 'text-[#f7f3ec]/35 italic'
                                : 'text-[#e8c170]'
                            }`}
                          >
                            {h.time}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* === CARTE INTÉGRÉE (OpenStreetMap) === */}
          {/* La carte se centre automatiquement sur les coordonnées GPS de BAKERY */}
          <Reveal delay={120}>
            <div className="rounded-2xl overflow-hidden h-full min-h-[420px] shadow-2xl shadow-black/30 border border-[#e8c170]/15">
              <iframe
                title="Carte de la boulangerie"
                src={mapsEmbed}
                className="w-full h-full grayscale-[0.3] contrast-[1.05]"
                loading="lazy"
                style={{ minHeight: 420, border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
