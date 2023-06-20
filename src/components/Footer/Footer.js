import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <p>FoodLinx</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.options}>Affialiate Marketing</div>
            <div className={styles.options}>Privacy Policy</div>
            <div className={styles.options}>Terms & Conditions</div>
          </div>
          <div className={styles.column}>
            <div className={styles.link}>
              <Link href="/">Create an Account here</Link>
            </div>
            <div className={styles.link}>
              <Link href="/sign-up/resturant">Register your Business here</Link>
            </div>
            <div className={styles.link}>
              <Link href="/sign-up/driver">Register as a Driver here</Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.column}>
            <p>Contact Us:</p> <p>+27123456789</p> <p>+194123456789</p>
          </div>
          <div className={styles.column}>
            <p>
              This Website Is Protected. © 2023 FoodLinx. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
