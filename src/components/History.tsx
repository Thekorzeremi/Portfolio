const TIMELINE = [
  {
    period: 'Décembre 2025 – Aujourd’hui',
    role: 'Alternant Développeur Fullstack',
    company: 'My.Facturation',
    description:
      'Conception et développement d’applications web, participation à l’architecture technique et à l’amélioration continue.',
  },
  {
    period: 'Septembre 2024 – Septembre 2025',
    role: 'Alternant Développeur Fullstack & Responsable IT',
    company: 'CFP GROUP & Cash Flow Positif',
    description:
      'Développement frontend et backend, intégration d’APIs, travail en équipe agile. Responsable de la gestion du pôle IT (365, infrastructure, téléphonie, réseau, etc.).',
  },
  {
    period: 'Juin 2024 – Août 2024',
    role: 'Stagiaire Développeur Fullstack',
    company: 'Cash Flow Positif',
    description:
      'Découverte du métier de développeur. Participation à l\'amélioration du site gestionnaire de l’entreprise.',
  },
]

import { useInView } from '../hooks/useInView'

export default function History() {
  const { ref, inView } = useInView()
  return (
    <section
      id="history"
      ref={ref as React.RefObject<HTMLElement>}
      className={`history section-reveal ${inView ? 'is-visible' : ''}`}
      aria-labelledby="history-heading"
    >
      <h2 id="history-heading" className="section-title">
        Mon parcours
      </h2>
      <p className="section-subtitle">
        Voici mon parcours professionnel et mon parcours scolaire.
      </p>
      <div className="history__timeline">
        {TIMELINE.map((item, i) => (
          <article
            key={i}
            className="history__item"
          >
            <div className="history__line" aria-hidden />
            <div className="history__card">
              <span className="history__period">{item.period}</span>
              <h3 className="history__role">{item.role}</h3>
              <p className="history__company">{item.company}</p>
              <p className="history__description">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .history__timeline {
          position: relative;
        }
        .history__item {
          position: relative;
          padding-left: 2rem;
          padding-bottom: 2rem;
        }
        .history__item:last-child {
          padding-bottom: 0;
        }
        .history__line {
          position: absolute;
          left: 6px;
          top: 0.5rem;
          bottom: 0;
          width: 2px;
          background: linear-gradient(
            to bottom,
            var(--accent),
            var(--border)
          );
          border-radius: 1px;
        }
        .history__item:last-child .history__line {
          display: none;
        }
        .history__card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          position: relative;
          transition: border-color 0.2s ease;
        }
        .history__card::before {
          content: '';
          position: absolute;
          left: -2rem;
          top: 1.75rem;
          width: 14px;
          height: 14px;
          background: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 0 4px var(--bg-elevated);
        }
        .history__card:hover {
          border-color: rgba(232, 168, 74, 0.3);
        }
        .history__period {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent);
          margin-bottom: 0.35rem;
        }
        .history__role {
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .history__company {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 0.75rem;
        }
        .history__description {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  )
}
