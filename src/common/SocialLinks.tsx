import React from 'react';
import { FacebookIcon, InstagramIcon, MailIcon, MediumIcon } from '../assets/icons';
import * as styles from './socialLinks.module.scss';

const instagramUrl = 'https://www.instagram.com/begumgoktas/';
const mailUrl = 'mailto:info@begumgoktas.com';
const mediumUrl = 'https://medium.com/@begumgoktas';

const SocialLinks = () => {
  return (
    <div className={ styles.links }>
      <MediumLink />
      <InstagramLink />
      <MailLink />
    </div>
  );
};

const MediumLink = () => {
  return (
    <li>
      <a href={ mediumUrl } target="_blank" rel="noreferrer">
        <MediumIcon className={ styles.icon } />
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
