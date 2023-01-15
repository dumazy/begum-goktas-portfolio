import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./portrait.module.scss";



const Portrait = () => {

    return (
        <div className={ styles.portrait }>
            <StaticImage className={ styles.bw } src="../assets/images/portrait_bw.jpg" alt="Portrait Begüm Göktas" />
            <StaticImage className={ styles.color } src="../assets/images/portrait_color.jpg" alt="Portrait Begüm Göktas" />
        </div>
    );
};

export default Portrait;
