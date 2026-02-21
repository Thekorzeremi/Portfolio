import { useInView } from '../hooks/useInView'

const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'SvelteKit',  'HTML/CSS', 'Tailwind', 'Flutter'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Symfony', 'Python', 'API REST'],
  },
  {
    category: 'Base de données',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase Database'],
  },
  {
    category: 'DevOps',
    items: ['Git', 'Docker', 'CI/CD', 'AWS', 'Azure', 'GCP'],
  },
  {
    category: 'Méthodologie',
    items: ['Gestion de projet', 'MERISE', 'UML', 'Agile & SCRUM'],
  },
  {
    category: 'Autres',
    items: ['Administration Linux', 'Figma', 'WordPress', 'SEO', 'Scraping'],
  },
]

export default function Skills() {
  const { ref, inView } = useInView()
  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className={`skills section-reveal ${inView ? 'is-visible' : ''}`}
      aria-labelledby="skills-heading"
    >
      <h2 id="skills-heading" className="section-title">
        Mes compétences
      </h2>
      <p className="section-subtitle">
        Voici les technologies que je maîtrise et avec lesquelles je travaille au quotidien.
      </p>
      <div className="skills__grid">
        {SKILLS.map(({ category, items }) => (
          <div key={category} className="skills__card">
            <h3 className="skills__category">{category}</h3>
            <ul className="skills__list">
              {items.map((skill) => (
                <li key={skill} className="skills__item">
                  <span className="skills__tag">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>{`
        .skills__grid {
          display: grid;
          gap: 1.25rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .skills__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 960px) {
          .skills__grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .skills__card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .skills__card:hover {
          border-color: rgba(232, 168, 74, 0.3);
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        }
        .skills__category {
          font-size: 1rem;
          font-weight: 600;
          color: var(--accent);
          margin-bottom: 1rem;
          font-family: var(--font-mono);
        }
        .skills__list {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .skills__tag {
          display: inline-block;
          padding: 0.35rem 0.75rem;
          background: var(--bg-elevated);
          border-radius: 6px;
          font-size: 0.875rem;
          color: var(--text);
          border: 1px solid var(--border);
        }
      `}</style>
    </section>
  )
}
