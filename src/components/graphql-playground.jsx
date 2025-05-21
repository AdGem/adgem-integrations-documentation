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
        return (
          <div>
            <div id='graphiql-info' className="alert alert--info margin-bottom--md" role="alert">
              <h4>Using the GraphQL Playground</h4>
              <p>
                To authenticate your requests, add your API token in the "Headers" tab at the bottom:
                <pre>{'{\n  "Authorization": "Bearer YOUR_TOKEN_HERE" \n}'}</pre>
              </p>
            </div>
            <GraphiQL 
              fetcher={fetcher} 
              plugins={[explorer]} 
              shouldPersistHeaders={true} 
              defaultHeaders={'{"Authorization": "Bearer YOUR_TOKEN_HERE"}'} 
            />
          </div>
        );
      }}
    </BrowserOnly>
  );
}
