import logoNegative from '../../assets/images/iris-booth-logo-negative-01.png';
import './Footer.scss';

export function Footer() {
  return (
    <>
      <div className="footer-bar" />
      <footer className="footer">
        <div className="footer__left">
          <div className="footer__logo">
            <img src={logoNegative} alt="Iris Booth" />
          </div>
          <div className="footer__tagline">
            Making professional headshots accessible — for everyone, everywhere.
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__copy">&copy; 2026 Iris Booth. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
