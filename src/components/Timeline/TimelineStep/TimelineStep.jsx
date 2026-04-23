import './TimelineStep.scss';
import { Tooltip } from '../../Tooltip/Tooltip';

function ResourceLink({ icon, label, desc, href, external }) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a href={href} className="resource-link" {...externalProps}>
      <span className="resource-link__icon">{icon}</span>
      <span className="resource-link__text">
        {label}
        {desc && <span className="resource-link__desc">{desc}</span>}
      </span>
    </a>
  );
}

function SubCard({ subNum, title, desc, tooltip, resources, warning }) {
  return (
    <div className={`timeline-step__sub-card${warning ? ' timeline-step__sub-card--warning' : ''}`}>
      <div className="timeline-step__sub-card-header">
        {subNum && <span className="timeline-step__sub-card-num">{subNum}</span>}
        {warning && <span className="timeline-step__sub-card-warning-icon">⚠️</span>}
        <span className="timeline-step__sub-card-title">{title}</span>
      </div>
      {desc && (
        <p className="timeline-step__section-desc">
          {desc.split('\n\n').map((part, k, arr) => {
            const hasBold = part.includes('<strong>') || part.includes('<span');
            return (
              <span key={k}>
                {hasBold ? (
                  <span dangerouslySetInnerHTML={{ __html: part }} />
                ) : (
                  part
                )}
                {k < arr.length - 1 && <><br /><br /></>}
              </span>
            );
          })}
          {tooltip && <Tooltip text={tooltip} />}
        </p>
      )}
      {resources && (
        <div className="timeline-step__resources">
          {resources.map((res) => (
            <ResourceLink key={res.label} {...res} />
          ))}
        </div>
      )}
    </div>
  );
}

export function TimelineStep({ num, title, tip, sections, subCards }) {
  return (
    <div className="timeline-step">
      <div className="timeline-step__header">
        <div className="timeline-step__num">{num}</div>
        <div className="timeline-step__title">{title}</div>
      </div>
      {subCards ? (
        <div className="timeline-step__sub-cards">
          {subCards.map((card, i) => (
            <SubCard key={card.subNum || i} {...card} />
          ))}
        </div>
      ) : (
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
              {section.checklist && (
                <ul className="timeline-step__checklist">
                  {section.checklist.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
              {section.desc && (
                <p className="timeline-step__section-desc">
                  {section.desc.split('\n\n').map((part, k, arr) => (
                    <span key={k}>
                      {part}
                      {k < arr.length - 1 && <><br /><br /></>}
                    </span>
                  ))}
                  {section.tooltip && <Tooltip text={section.tooltip} />}
                </p>
              )}
              <div className="timeline-step__resources">
                {section.resources.map((res) => (
                  <ResourceLink key={res.label} {...res} />
                ))}
              </div>
            </div>
          ))}
          {tip && (
            <>
              <div className="timeline-step__divider" />
              {tip.title && (
                <div className="timeline-step__section-label" style={{ marginBottom: '10px' }}>
                  {tip.title}
                </div>
              )}
              <div className="timeline-step__tip">
                <ul className="timeline-step__checklist">
                  {tip.items.map((item, i) => (
                    <li key={i}>
                      {item.text}
                      {item.tooltip && <Tooltip text={item.tooltip} />}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
