import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './logo.module.scss';

const Logo = () => {
  return (
    <StaticImage src="../assets/images/logo/line.png" alt="Begüm Göktas" />
  );
};

export default Logo;
