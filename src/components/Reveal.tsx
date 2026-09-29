/*
 * Reveal.tsx — Animation d'apparition au défilement
 * -------------------------------------------------
 * Ce composant enveloppe un contenu et le fait apparaître en douceur
 * quand l'utilisateur scrolle jusqu'à lui.
 *
 * Usage : <Reveal delay={100}>...votre contenu...</Reveal>
 * - delay : délai en millisecondes avant l'apparition (optionnel, 0 par défaut)
 *
 * Vous n'avez normalement pas besoin de modifier ce fichier.
 */
import { type ReactNode, useEffect, useRef, useState } from 'react';

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Détecte quand l'élément entre dans l'écran, puis déclenche l'animation
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 } // Déclenche quand 15% de l'élément est visible
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
