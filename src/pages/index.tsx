import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Portrait from "../homepage/Portrait";
import Logo from '../common/Logo';
import SocialLinks from '../common/SocialLinks';
import * as styles from './index.module.scss';
import { Squigle, Stain } from '../assets/icons';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className={ styles.container }>
        <div className={ styles.content }>
          <div className={ styles.header }>
            <SocialLinks />
          </div>
          <div className={ styles.main }>

            <div className={ styles.title }>
              <Logo width={ 450 } />
            </div>
            <div className={ styles.description }>
              <p>Designing with the user in mind, we strive to create clean, user-friendly, visually appealing interfaces that simplify and enhance people's daily lives.</p>
            </div>
          </div>
          <div></div>
        </div>
        <Visuals />
      </div>
    </main>
  );
};


const Visuals = () => {
  return (
    <div className={ styles.visuals }>
      <div className={ styles.squigle }>
        <Squigle />
      </div>
      <div className={ styles.bottom }>
        <div className={ styles.stain }>
          <Stain />
        </div>
        <div className={ styles.portrait }>
          <Portrait />
        </div>
      </div>
    </div>
  );
};



export default IndexPage;

export const Head: HeadFC = () => <title>Begüm Göktas</title>;
