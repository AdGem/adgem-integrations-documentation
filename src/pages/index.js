import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

// Homepage skeleton for Gus' IA (PUB-191): three audience rails + an
// integration chooser that intentionally surfaces only the Offer Delivery axis.
// Reward Mechanism gets a single recommendation card below, because Server
// Postbacks v3 is the recommended default for nearly all publishers.

const RAILS = [
  {
    title: 'Start integrating',
    to: '/docs/get-started/quickstart',
    cta: 'Quickstart: 5-min →',
    body: 'Get a working Offer Wall + postbacks in 5 minutes.',
  },
  {
    title: 'Understand AdGem',
    to: '/docs/get-started/core-concepts',
    cta: 'Core Concepts →',
    body: 'Properties, offers, conversions, postbacks.',
  },
  {
    title: 'Evaluate AdGem',
    to: '/for-decision-makers',
    cta: 'For Decision Makers →',
    body: 'Feature matrix, security, benchmarks, RFP packet.',
  },
];

const PRE_BUILT = [
  { label: 'Web Offerwall', to: '/docs/integrate/offer-delivery/pre-built/web-offerwall', badge: 'Recommended' },
  { label: 'iOS SDK', to: '/docs/integrate/offer-delivery/pre-built/ios-sdk' },
  { label: 'Android SDK', to: '/docs/integrate/offer-delivery/pre-built/android-sdk' },
  { label: 'Unity SDK', to: '/docs/integrate/offer-delivery/pre-built/unity-sdk' },
];

const PARTNER_BUILT = [
  { label: 'Prism (GraphQL)', to: '/docs/integrate/offer-delivery/partner-built/prism', badge: 'Recommended' },
  { label: 'Offer API (REST)', to: '/docs/integrate/offer-delivery/partner-built/offer-api' },
];

const FOOTER_CARDS = [
  { label: 'Migrations', to: '/docs/resources/migrations/overview' },
  { label: 'Changelog', to: '/docs/resources/changelog' },
  { label: 'For Decision Makers', to: '/for-decision-makers' },
];

function MethodList({ items }) {
  return (
    <ul className={styles.chooserList}>
      {items.map((it) => (
        <li key={it.to}>
          <Link to={it.to}>{it.label}</Link>
          {it.badge && <span className={styles.badge}>[{it.badge}]</span>}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <Layout
      title="Integration Docs"
      description="AdGem integration documentation — pick your path, wire it up, ship rewarded offers">
      <header className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>AdGem Integration Docs</h1>
          <p className={styles.heroTagline}>Pick your path. Wire it up. Ship rewarded offers.</p>
        </div>
      </header>

      <main>
        {/* Three audience rails */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              {RAILS.map((rail) => (
                <div className="col col--4" key={rail.to}>
                  <div className={styles.card}>
                    <div className={styles.cardTitle}>{rail.title}</div>
                    <Link className={styles.cardLink} to={rail.to}>{rail.cta}</Link>
                    <p>{rail.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration chooser — Offer Delivery axis only */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Choose Your Integration Method</h2>
            <div className="row">
              <div className="col col--6">
                <div className={styles.chooserCol}>
                  <div className={styles.cardTitle}>Pre-built (Fastest)</div>
                  <p>AdGem owns the UI. You embed and pass us a player ID.</p>
                  <MethodList items={PRE_BUILT} />
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.chooserCol}>
                  <div className={styles.cardTitle}>Partner-built (Custom Experience)</div>
                  <p>You own the UI; AdGem hands you the offers.</p>
                  <MethodList items={PARTNER_BUILT} />
                </div>
              </div>
            </div>

            {/* Reward Mechanism — single recommendation card */}
            <div className={styles.rewardCard}>
              <div className={styles.cardTitle}>
                Server-to-Server Postbacks (v3)
                <span className={styles.badge}>[Recommended]</span>
              </div>
              <p>
                The reward path nearly every publisher uses. POST-based, signed, production-grade.{' '}
                <Link to="/docs/integrate/reward-mechanism">See alternatives →</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Footer cards */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              {FOOTER_CARDS.map((c) => (
                <div className="col col--4" key={c.to}>
                  <Link className={styles.card} to={c.to} style={{ display: 'block' }}>
                    <div className={styles.cardTitle}>{c.label}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <p className={styles.placeholderNote}>
          Prototype skeleton for IA validation (PUB-191). Content is placeholder.
        </p>
      </main>
    </Layout>
  );
}
