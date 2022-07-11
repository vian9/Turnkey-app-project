import React from 'react';
import Link from 'next/link';
import styles from './Dashboard.module.css';

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
            <div className={styles.dash}>
                <h2 className={styles.nam}> Overview</h2>
          </div>
           <div className={styles.dash}>
                <h2 className={styles.nam}> Tickets</h2>
          </div>
           <div className={styles.dash}>
                <h2 className={styles.nam}> Ideas</h2>
          </div>
           <div className={styles.dash}>
                <h2 className={styles.nam}> Contacts</h2>
          </div>
           <div className={styles.dash}>
                <h2 className={styles.nam}> Agents</h2>
          </div>
           <div className={styles.dash}>
                <h2 className={styles.nam}> Articles</h2>
          </div>
           <div className={styles.dash}>
                <h2 className={styles.nam}></h2>
          </div>
           <div className={styles.dash}>
                <h2 className={styles.nam}> Settings</h2>
          </div>
           <div className={styles.dash}>
                <h2 className={styles.nam}> Subscription</h2>
            </div>
        </div>
      </nav>
    </>
  );
}