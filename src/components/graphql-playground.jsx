import React from 'react';
import { GraphiQL } from 'graphiql';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

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
          url: siteConfig.customFields.PRISM_SCHEMA_URL,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });

        const explorer = explorerPlugin();

        return (
          <div>
            <div id='graphiql-info' className="alert alert--info margin-bottom--md" role="alert">
              <h4>Using the GraphQL Playground</h4>
              <p>
                You need a Prism access token to use this tool. Add it in the "Headers" tab at the bottom:
              </p>
              <pre>{'{\n  "Authorization": "Bearer YOUR_ACCESS_TOKEN" \n}'}</pre>
              <p>
                Refer to the <Link to="/docs/reference/prism/authentication">authentication guide</Link> to learn how to get an access token.
              </p>
            </div>
            <div className="prism-playground">
              <GraphiQL
                fetcher={fetcher}
                plugins={[explorer]}
                shouldPersistHeaders={true}
              />
            </div>
          </div>
        );
      }}
    </BrowserOnly>
  );
}
