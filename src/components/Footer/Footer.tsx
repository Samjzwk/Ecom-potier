import SocialLinks from '../SocialLinks/SocialLinks';
import Styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={Styles.root}>
      <div className={Styles.footerTop}>
        <div>
          <SocialLinks />
        </div>
        {/* just for design purpose */}
        <div className={Styles.otherLinks}>
          <p>Contact</p>
          <p>Sitemap</p>
          <p>Politique de cookies</p>
        </div>
      </div>

      <span className={Styles.copyright}>
        Copyright © 2O22 Potier. Tous droits réservés
      </span>
    </footer>
  );
}

export default Footer;
