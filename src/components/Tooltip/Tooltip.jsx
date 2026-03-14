import './Tooltip.scss';

export function Tooltip({ text }) {
  return (
    <span className="tooltip">
      <span className="tooltip__icon">i</span>
      <span className="tooltip__content">{text}</span>
    </span>
  );
}
