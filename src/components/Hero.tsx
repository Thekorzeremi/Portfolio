export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Présentation">
      <div className="hero__bg" aria-hidden />
      <div className="hero__content">
        <p className="hero__greeting">Bonjour, je suis</p>
        <h1 className="hero__name">Rémi KORZENIOWSKI</h1>
        <p className="hero__title">Développeur Fullstack</p>
        <p className="hero__intro">
          Développeur fullstack passionné par la création d'applications web modernes et performantes. 
          Polyvalent et curieux, je suis capable de travailler sur tous les aspects d'un projet web (frontend, backend, base de données, déploiement, etc.).
        </p>
        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            Voir mes projets               
          </a>
          {/* <a href="#contact" className="hero__btn hero__btn--secondary">
            Me contacter
          </a> */}
        </div>
      </div>
      <div className="hero__scroll" aria-hidden>
        <span className="hero__scroll-dot" />
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 6rem 1.5rem 4rem;
          position: relative;
          overflow: hidden;
        }
        .hero__bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 50% at 50% -20%, var(--accent-glow), transparent),
            radial-gradient(ellipse 60% 40% at 80% 50%, rgba(232,168,74,0.06), transparent);
          pointer-events: none;
        }
        .hero__content {
          position: relative;
          z-index: 1;
          max-width: 640px;
        }
        .hero__greeting {
          color: var(--accent);
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          font-family: var(--font-mono);
        }
        .hero__name {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 0.25rem;
        }
        .hero__title {
          color: var(--text-muted);
          font-size: clamp(1.1rem, 2.5vw, 1.35rem);
          margin-bottom: 1.25rem;
        }
        .hero__intro {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }
        .hero__btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 1.5rem;
          border-radius: var(--radius);
          font-weight: 500;
          font-size: 0.95rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hero__btn:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
        }
        .hero__btn--primary {
          background: var(--accent);
          color: var(--bg);
        }
        .hero__btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px var(--accent-glow);
          color: black;
        }
        .hero__btn--secondary {
          background: var(--bg-card);
          color: var(--text);
          border: 1px solid var(--border);
        }
        .hero__btn--secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .hero__scroll {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
        }
        .hero__scroll-dot {
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--text-muted);
          animation: hero-scroll 2s ease-in-out infinite;
        }
        @keyframes hero-scroll {
          0%, 100% { opacity: 0.4; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(8px); }
        }
      `}</style>
    </section>
  )
}
