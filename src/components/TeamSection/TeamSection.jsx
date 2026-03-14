import './TeamSection.scss';
import { TeamCard } from './TeamCard/TeamCard';
import { team } from '../../data/team';

export function TeamSection() {
  return (
    <section id="team">
      <div className="section-wrap">
        <div className="section-title">Meet Your Team</div>
        <p className="section-sub">
          Your dedicated Iris Booth team. Reach out any time; we're in your corner.
        </p>

        <div className="team-section__grid">
          {team.map((member) => (
            <TeamCard key={member.email} {...member} />
          ))}
        </div>

        <div className="team-section__support">
          <div className="team-section__support-icon">🎧</div>
          <div className="team-section__support-body">
            <div className="team-section__support-label">General Support</div>
            <div className="team-section__support-title">Need help? Email us.</div>
            <a href="mailto:support@irisbooth.com" className="team-section__support-email">
              support@irisbooth.com
            </a>
            <div className="team-section__support-desc">
              For technical issues, troubleshooting, and general questions. Your ticket will be
              logged and tracked automatically.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
