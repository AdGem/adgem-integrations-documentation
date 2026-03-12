// src/components/QuickLinks/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const links = [
  {
    title: 'New to AdGem?',
    description: 'Understand key concepts before you integrate.',
    to: '/docs/getting-started',
    cta: 'Getting Started',
  },
  {
    title: 'Webhooks & Postbacks',
    description: 'Receive real-time reward notifications.',
    to: '/docs/webhooks',
    cta: 'Set Up Postbacks',
  },
];

export default function QuickLinks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {links.map((link) => (
            <Link key={link.title} to={link.to} className={styles.card}>
              <h3 className={styles.cardTitle}>{link.title}</h3>
              <p className={styles.cardDescription}>{link.description}</p>
              <span className={styles.cardLink}>{link.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
