import React from 'react';
import Layout from '@theme/Layout';
import Hero from '@site/src/components/Hero';
import IntegrationCards from '@site/src/components/IntegrationCards';
import QuickLinks from '@site/src/components/QuickLinks';

export default function Home() {
  return (
    <Layout
      title="Integration Docs"
      description="AdGem integration documentation — monetize your app with rewarded offers">
      <Hero />
      <main>
        <QuickLinks />
        <IntegrationCards />
      </main>
    </Layout>
  );
}
