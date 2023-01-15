import React from 'react';
import { FacebookIcon, InstagramIcon, MailIcon } from '../assets/icons';
import * as styles from './socialLinks.module.scss';

const facebookUrl = 'https://www.facebook.com/begum.goktas';
const instagramUrl = 'https://www.instagram.com/begumgoktas/';
const mailUrl = 'mailto:info@begumgoktas.com';

const SocialLinks = () => {
  return (
    <div className={ styles.links }>
      <FacebookLink />
      <InstagramLink />
      <MailLink />
    </div>
  );
};

const FacebookLink = () => {
  return (
    <li>
      <a href={ facebookUrl } target="_blank" rel="noreferrer">
        <FacebookIcon className={ styles.icon } />
      </a>
    </li>
  );
};

const InstagramLink = () => {
  return (
    <li>
      <a href={ instagramUrl } target="_blank" rel="noreferrer">
        <InstagramIcon className={ styles.icon } />
      </a>
    </li>
  );
};

const MailLink = () => {
  return (
    <li>
      <a href={ mailUrl } target="_blank" rel="noreferrer">
        <MailIcon className={ styles.icon } />
      </a>
    </li>
  );
};

export default SocialLinks;
