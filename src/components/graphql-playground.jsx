import React from 'react';
import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from 'graphiql';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { explorerPlugin } from '@graphiql/plugin-explorer';

export default function GraphQLPlayGround() {
  const {siteConfig} = useDocusaurusContext();

  if (!siteConfig.customFields.TARGETED_API_SCHEMA_URL) {
    return (
      <div className="alert alert--danger" role="alert">
        <h4>Configuration Missing</h4>
        <p>
          GraphQL Playground requires API configuration. Please set the 
          TARGETED_API_SCHEMA_URL environment variable.
        </p>
      </div>
    );
  }
  
  const fetcher = createGraphiQLFetcher({
    url: siteConfig.customFields.TARGETED_API_SCHEMA_URL || '',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  });

  return (
    <BrowserOnly>
      {() => {
        require('graphiql/style.css');
        require('@graphiql/plugin-explorer/style.css');
        const explorer = explorerPlugin();
        return <GraphiQL fetcher={fetcher} plugins={[explorer]} shouldPersistHeaders={true} defaultHeaders={'{"Authorization": "Bearer token"}'}/>;
      }}
    </BrowserOnly>
  );
}
