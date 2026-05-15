import './Hero.scss';

export function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__heading">
        Welcome to <span className="hero__heading-accent">Iris Booth!</span>
      </h1>
      <p className="hero__subtitle">You're in good hands.</p>
      <p className="hero__desc">
        Everything you need to go from delivery to your first headshot.
      </p>
      <a
        className="hero__pdf-link"
        href="https://drive.google.com/file/d/1Ucq7ptVaddOQLsmMsn4wpckCD4E72rBG/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download a PDF copy of this page
      </a>
    </div>
  );
}
