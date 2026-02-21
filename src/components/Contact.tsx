import { useInView } from '../hooks/useInView'

export default function Contact() {
  const { ref, inView } = useInView()
  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`contact section-reveal ${inView ? 'is-visible' : ''}`}
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="section-title">
        Contact
      </h2>
      <p className="section-subtitle">
        Un projet, une question ? Envoyez-moi un message.
      </p>
      <div className="contact__box">
        <p className="contact__text">
          Je suis ouvert aux opportunités en développement fullstack, aux
          collaborations sur des projets web et aux échanges techniques.
        </p>
        <div className="contact__links">
          <a
            href="mailto:vous@exemple.com"
            className="contact__btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Envoyer un email
          </a>
          <a
            href="https://linkedin.com"
            className="contact__btn contact__btn--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            className="contact__btn contact__btn--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <style>{`
        .contact {
          background: var(--bg-elevated);
        }
        .contact__box {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 2rem;
          text-align: center;
          max-width: 560px;
          margin: 0 auto;
        }
        .contact__text {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 1.75rem;
        }
        .contact__links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }
        .contact__btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 1.5rem;
          border-radius: var(--radius);
          font-weight: 500;
          font-size: 0.95rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .contact__btn:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
        }
        .contact__btn:not(.contact__btn--outline) {
          background: var(--accent);
          color: var(--bg);
        }
        .contact__btn:not(.contact__btn--outline):hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px var(--accent-glow);
        }
        .contact__btn--outline {
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
        }
        .contact__btn--outline:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
      `}</style>
    </section>
  )
}
