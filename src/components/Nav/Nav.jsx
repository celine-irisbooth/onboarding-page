import { useEffect, useState } from 'react';
import logoColour from '../../assets/images/iris-booth-logo-colour-01.png';
import './Nav.scss';

const navItems = [
  { href: '#team', label: 'Meet Your Team' },
  { href: '#expect', label: 'What to Expect' },
  { href: '#psp', label: 'Your Success Plan' },
];

export function Nav() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={logoColour} alt="Iris Booth" />
      </div>
      <div className="nav__links">
        {navItems.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`nav__link${activeId === href.slice(1) ? ' nav__link--active' : ''}`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
