import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './logo.module.scss';

type LogoProps = {
  width?: number;
};

const Logo = (props: LogoProps) => {
  return (
    <div className={ styles.logo }>
      <StaticImage className={ styles.image } width={ props.width } src="../assets/images/logo/line.png" alt="Begüm Göktas" />
    </div>
  );
};

export default Logo;
