import './TeamCard.scss';

const EmailIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 7L2 7" />
  </svg>
);

export function TeamCard({ initials, role, name, email }) {
  return (
    <div className="team-card">
      <div className="team-card__avatar">
        <div className="team-card__initials">{initials}</div>
      </div>
      <div className="team-card__body">
        <div className="team-card__badge">{role}</div>
        <div className="team-card__name">{name}</div>
        <a href={`mailto:${email}`} className="team-card__email">
          <EmailIcon />
          {email}
        </a>
      </div>
    </div>
  );
}
