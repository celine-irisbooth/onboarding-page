import './Hero.scss';

export function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__heading">
        Welcome to <span className="hero__heading-accent">Iris Booth!</span>
      </h1>
      <p className="hero__subtitle">You're in good hands.</p>
      <p className="hero__desc">
        Everything you need to go from box arrival to your first headshot.
      </p>
    </div>
  );
}
