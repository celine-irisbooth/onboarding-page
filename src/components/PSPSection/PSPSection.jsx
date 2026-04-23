import './PSPSection.scss';
import { PSPPillar } from './PSPPillar/PSPPillar';
import { pillars } from '../../data/psp';

export function PSPSection() {
  return (
    <section id="psp">
      <div className="section-wrap">
        <div className="section-title">Your Success Plan</div>
        <p className="section-sub">
          After your booth is live, we build your success plan together.
        </p>
        <div className="psp-section__hero">
          <div className="psp-section__text-col">
            <div className="psp-section__title">
              Built around your goals.
              <br />
              <span>Your roadmap to results.</span>
            </div>
            <p className="psp-section__desc">
              We'll schedule a 30-minute call to walk through your Success Plan.
            </p>
          </div>
          <div className="psp-section__pillars">
            {pillars.map((pillar) => (
              <PSPPillar key={pillar.title} {...pillar} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
