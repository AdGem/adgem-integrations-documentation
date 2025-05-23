import React from 'react';
import { GraphiQL } from 'graphiql';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function GraphQLPlayGround() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <BrowserOnly fallback={<div>Loading GraphiQL...</div>}>
      {() => {
        const { createGraphiQLFetcher } = require('@graphiql/toolkit');
        const { explorerPlugin } = require('@graphiql/plugin-explorer');
        require('graphiql/style.css');
        require('@graphiql/plugin-explorer/style.css');

        const fetcher = createGraphiQLFetcher({
          url: siteConfig.customFields.TARGETED_API_SCHEMA_URL,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${siteConfig.customFields.TARGETED_API_TOKEN}`,
          },
        });

        const explorer = explorerPlugin();

        return (
          <div>
            <div id='graphiql-info' className="alert alert--info margin-bottom--md" role="alert">
              <h4>Using the GraphQL Playground</h4>
              <p>
                To use your own API token, add your API token in the "Headers" tab at the bottom:
                <pre>{'{\n  "Authorization": "Bearer YOUR_TOKEN_HERE" \n}'}</pre>
              </p>
            </div>
            <GraphiQL
              fetcher={fetcher}
              plugins={[explorer]}
              shouldPersistHeaders={true}
            />
          </div>
        );
      }}
    </BrowserOnly>
  );
}
