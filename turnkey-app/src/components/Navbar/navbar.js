import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from "next/image";
import LogImg from "./b.png";
import ProfImg from "./a.png";

export default function Navbar(props) {
  const link1 = props.href1;
  const link2 = props.href2;

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
            <div className={styles.logo}>
                <Image className={styles.image} alt="" src={LogImg} />
            </div>
            <div className={styles.dash}>
                <h2> Dashboard Kit</h2>
            </div>
        </div>
              <div className={styles.pag}>
                  <Link href={`${link1}`}>
              <a>{props.action1}</a>
            </Link>
              </div>
        <ul>
          <li>
            <div className={styles.logo2}>
                <Image className={styles.image2} alt="" src={ProfImg} />
            </div>
          </li>
          <li>
            <div className={styles.logo2}>
            <Image className={styles.image2} alt="" src={ProfImg} />
            </div>
          </li>
           <li>
            <Link href={`${link2}`}>
              <a>{props.action2}</a>
            </Link>
                  </li>
                  <div className={styles.logo2}>
                <Image className={styles.image2} alt="" src={ProfImg} />
                </div>
              </ul>
      </nav>
    </>
  );
}