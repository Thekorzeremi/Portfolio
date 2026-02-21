import { useState } from 'react'

type Section = { id: string; label: string }

type NavProps = {
  items: readonly Section[]
  scrolled: boolean
}

export default function Nav({ items, scrolled }: NavProps) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      role="banner"
    >
      <div className="nav__inner">
        <a href="#hero" className="nav__logo">
          Rémi KORZENIOWSKI
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>

        <nav
          className={`nav__links ${open ? 'nav__links--open' : ''}`}
          aria-label="Navigation principale"
        >
          {items
            .filter((s) => s.id !== 'hero')
            .map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="nav__link"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
        </nav>
      </div>

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1rem 1.5rem;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .nav--scrolled {
          background: rgba(13, 13, 15, 0.85);
          backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 var(--border);
        }
        .nav__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav__logo {
          font-family: var(--font-mono);
          font-size: 1rem;
          font-weight: 500;
          color: var(--text);
          margin-left: 1rem;
        }
        .nav__logo:hover {
          color: var(--accent);
        }
        .nav__toggle {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text);
        }
        @media (min-width: 768px) {
          .nav__toggle { display: none; }
        }
        .nav__toggle-bar {
          width: 22px;
          height: 2px;
          background: currentColor;
          border-radius: 1px;
          transition: transform 0.3s ease;
        }
        .nav__links--open .nav__toggle-bar:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .nav__links--open .nav__toggle-bar:nth-child(2) {
          opacity: 0;
        }
        .nav__links--open .nav__toggle-bar:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        .nav__links {
          display: flex;
          gap: 0.5rem;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(280px, 85vw);
          flex-direction: column;
          padding: 5rem 1.5rem 1.5rem;
          background: var(--bg-elevated);
          box-shadow: -4px 0 24px rgba(0,0,0,0.4);
          transform: translateX(100%);
          transition: transform 0.3s ease;
        }
        .nav__links--open {
          transform: translateX(0);
        }
        @media (min-width: 768px) {
          .nav__links {
            position: static;
            width: auto;
            flex-direction: row;
            padding: 0;
            background: none;
            box-shadow: none;
            transform: none;
          }
        }
        .nav__link {
          padding: 0.6rem 0.9rem;
          border-radius: var(--radius);
          color: var(--text-muted);
          font-size: 0.95rem;
          font-weight: 500;
        }
        .nav__link:hover {
          color: var(--accent);
          background: rgba(232, 168, 74, 0.08);
        }
      `}</style>
    </header>
  )
}
