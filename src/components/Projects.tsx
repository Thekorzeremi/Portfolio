const PROJECTS = [
  {
    title: 'SNCT',
    description:
      'Clone fonctionnel de l\'application SNCF Connect effectué avec Flutter et Firebase.',
    stack: ['Flutter', 'Firebase'],
    link: 'https://github.com/Thekorzeremi/SNCT',
    external: true,
  },
  {
    title: 'FMC SYSTEM',
    description:
      "Plateforme d’aide à l’achat de voitures d’occasion avec recherche, avis et recommandations IA.",
    stack: ['Python', 'FastAPI', 'SvelteKit', 'Selenium'],
    link: 'https://github.com/Thekorzeremi/FMC_SYSTEM',
    external: true,
  },
  {
    title: 'ComplySummarize AI',
    description:
      'Application web de conseils juridiques par IA répondant aux normes de confidentialité des données.',
    stack: ['Ollama', 'Node.js', 'Python', 'React'],
    link: 'https://github.com/Thekorzeremi/ComplySummarize_IA',
    external: true,
  },
]

import { useInView } from '../hooks/useInView'

export default function Projects() {
  const { ref, inView } = useInView()
  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`projects section-reveal ${inView ? 'is-visible' : ''}`}
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="section-title">
        Mes réalisations
      </h2>
      <p className='section-subtitle'>
        Voici une sélection de mes réalisations. <a href="https://github.com/Thekorzeremi" target="_blank" rel="noopener noreferrer">Voir tous mes projets</a>  <span className="projects__link-arrow " aria-hidden>→</span>
      </p>
      <div className="projects__grid">
        {PROJECTS.map((project, i) => (
          <article key={i} className="projects__card">
            <h3 className="projects__title">{project.title}</h3>
            <p className="projects__description">{project.description}</p>
            <ul className="projects__stack">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <a
              href={project.link}
              className="projects__link"
              target={project.external ? '_blank' : undefined}
              rel={project.external ? 'noopener noreferrer' : undefined}
            >
              Voir le projet
              <span className="projects__link-arrow" aria-hidden>→</span>
            </a>
          </article>
        ))}
      </div>

      <style>{`
        .projects__grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .projects__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .projects__grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .projects__card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .projects__card:hover {
          border-color: rgba(232, 168, 74, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.25);
        }
        .projects__title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .projects__description {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          flex-grow: 1;
          margin-bottom: 1rem;
        }
        .projects__stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          list-style: none;
          margin-bottom: 1rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .projects__stack li::after {
          content: '·';
          margin-left: 0.5rem;
          color: var(--border);
        }
        .projects__stack li:last-child::after {
          display: none;
        }
        .projects__link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--accent);
        }
        .projects__link:hover {
          color: var(--accent-dim);
        }
        .projects__link-arrow {
          transition: transform 0.2s ease;
        }
        .projects__card:hover .projects__link-arrow {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  )
}
