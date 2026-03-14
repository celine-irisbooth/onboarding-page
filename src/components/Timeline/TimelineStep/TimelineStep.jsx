import './TimelineStep.scss';
import { Tooltip } from '../../Tooltip/Tooltip';

function ResourceLink({ icon, label, href, external }) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a href={href} className="resource-link" {...externalProps}>
      <span className="resource-link__icon">{icon}</span>
      {label}
    </a>
  );
}

export function TimelineStep({ num, title, sections }) {
  return (
    <div className="timeline-step">
      <div className="timeline-step__header">
        <div className="timeline-step__num">{num}</div>
        <div className="timeline-step__title">{title}</div>
      </div>
      <div className="timeline-step__body">
        {sections.map((section, i) => (
          <div key={i}>
            {i > 0 && <div className="timeline-step__divider" />}
            <div
              className={`timeline-step__section-label${
                i === 0 ? ' timeline-step__section-label--first' : ''
              }`}
            >
              {section.label}
            </div>
            <p className="timeline-step__section-desc">
              {section.desc}
              {section.tooltip && <Tooltip text={section.tooltip} />}
            </p>
            <div className="timeline-step__resources">
              {section.resources.map((res) => (
                <ResourceLink key={res.label} {...res} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
