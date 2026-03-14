import './Timeline.scss';
import { TimelineStep } from './TimelineStep/TimelineStep';
import { steps } from '../../data/steps';

export function Timeline() {
  return (
    <section id="expect">
      <div className="section-wrap section-wrap--alt">
        <div className="section-title">What to Expect</div>
        <p className="section-sub">
          From your first call to your first headshot — here's how the next few weeks unfold.
        </p>
        <div className="timeline__steps">
          {steps.map((step) => (
            <TimelineStep key={step.num} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
