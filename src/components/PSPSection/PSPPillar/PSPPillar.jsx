import './PSPPillar.scss';

export function PSPPillar({ icon, title, desc }) {
  return (
    <div className="psp-pillar">
      <div className="psp-pillar__icon">{icon}</div>
      <div className="psp-pillar__content">
        <div className="psp-pillar__title">{title}</div>
        <div className="psp-pillar__desc">{desc}</div>
      </div>
    </div>
  );
}
