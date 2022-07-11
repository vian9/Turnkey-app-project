import React from 'react';
import Link from 'next/link';
import styles from './Dashboard.module.css';

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
            <div className={styles.dash}>
                      <h2> Dashboard Kit</h2>
                  </div>
        </div>
      </nav>
    </>
  );
}