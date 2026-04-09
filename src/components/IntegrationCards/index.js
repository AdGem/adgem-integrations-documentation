// src/components/IntegrationCards/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const preBuilt = [
  {
    title: 'Web Offerwall',
    badge: 'Recommended',
    description: 'Fastest integration — works on any platform with a webview. iOS, Android, Web.',
    to: '/docs/integrations/web-offerwall',
    featured: true,
  },
  {
    title: 'iOS SDK',
    description: 'Native iOS offerwall for iPhone and iPad apps.',
    to: '/docs/integrations/ios-sdk',
  },
  {
    title: 'Android SDK',
    description: 'Native Android offerwall for mobile apps.',
    to: '/docs/integrations/android-sdk',
  },
  {
    title: 'Unity SDK',
    description: 'Cross-platform offerwall for Unity projects.',
    to: '/docs/integrations/unity-sdk',
  },
];

const partnerBuilt = [
  {
    title: 'Offer API',
    label: 'REST',
    description: 'Retrieve untargeted offers and build your own offer experience.',
    to: '/docs/integrations/offer-api',
  },
  {
    title: 'Targeted API',
    label: 'GraphQL',
    description: 'Retrieve targeted, high-performing offers via GraphQL.',
    to: '/docs/integrations/targeted-api',
  },
];

function Card({ title, badge, label, description, to, featured }) {
  return (
    <Link to={to} className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>
          {title}
          {label && <span className={styles.label}>{label}</span>}
        </h3>
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>
      <p className={styles.cardDescription}>{description}</p>
      <span className={styles.cardLink}>Get Started →</span>
    </Link>
  );
}

export default function IntegrationCards() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Choose Your Integration Method</h2>

        <div className={styles.groupHeader}>
          <h3 className={styles.groupTitle}>Pre-built (Fastest)</h3>
          <p className={styles.groupDescription}>
            Launch quickly with AdGem's proven, high-performing offerwall.
          </p>
        </div>

        <div className={styles.featuredRow}>
          <Card {...preBuilt[0]} />
        </div>

        <div className={styles.cardGrid}>
          {preBuilt.slice(1).map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>

        <div className={styles.groupHeader}>
          <h3 className={styles.groupTitle}>Partner-built (Custom Experience)</h3>
          <p className={styles.groupDescription}>
            Full control over layout, design, and offer presentation.
            Higher engineering lift — choose when you need bespoke UX or deep product integration.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {partnerBuilt.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>

        <div className={styles.callout}>
          <p>
            Most partners start with the <strong>Pre-built Offerwall</strong>, then
            graduate to a <strong>Partner-built Experience</strong> once they've validated engagement.
          </p>
          <Link to="/docs/getting-started" className={styles.calloutLink}>
            Learn more in Getting Started →
          </Link>
        </div>
      </div>
    </section>
  );
}
