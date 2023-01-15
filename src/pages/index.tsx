import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Portrait from "../homepage/Portrait";
import Logo from '../common/Logo';
import SocialLinks from '../common/SocialLinks';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div>
        <SocialLinks />
        <Logo />
        <Portrait />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Begüm Göktas</title>;
