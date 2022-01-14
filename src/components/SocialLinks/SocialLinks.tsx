import Link from 'next/link';
import { Icon } from '@iconify/react';
import socialData from './socialsData';
import Styles from './socialLinks.module.scss';

function SocialLinks() {
  const socialLinks = socialData.map((social) => (
    <li className={Styles.listItem} key={social.name}>
      <Link href={social.link}>
        <a className={Styles.socialLink} rel="noreferrer" target="_blank">
          <span className={Styles.srOnly}>{`Aller sur ${social.name}`}</span>
          <Icon icon={social.iconName} color="white" height="34" />
        </a>
      </Link>
    </li>
  ));

  return (
    <>
      <p className={Styles.storeName}>Potier</p>
      <ul className={Styles.links}>{socialLinks}</ul>
    </>
  );
}

export default SocialLinks;
