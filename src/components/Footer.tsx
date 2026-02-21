export default function Footer() {
  return (
    <>
      <footer className="main_foot">
        <p>Thekorzeremi © {new Date().getFullYear()} — Portfolio. Construit avec React & Vite.</p>
      </footer>
      <style>{`
        .main_foot {
          margin: 3rem 0;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          text-align: center;
          color: var(--text-muted);
          font-size: 0.875rem;
        }
      `}</style>
    </>
  )
}
