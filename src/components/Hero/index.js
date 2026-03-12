// src/components/Hero/index.js
import React from 'react';
import styles from './styles.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>AdGem Integration Docs</h1>
        <p className={styles.tagline}>Monetize your app with rewarded offers</p>
      </div>
    </header>
  );
}
