import React from 'react';
import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from 'graphiql';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { explorerPlugin } from '@graphiql/plugin-explorer';

export default function GraphQLPlayGround() {
  const {siteConfig} = useDocusaurusContext();
  
  const fetcher = createGraphiQLFetcher({
    url: siteConfig.customFields.TARGETED_API_SCHEMA_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${siteConfig.customFields.TARGETED_API_TOKEN}`,
    }
  });

  return (
    <BrowserOnly>
      {() => {
        require('graphiql/style.css');
        require('@graphiql/plugin-explorer/style.css');
        const explorer = explorerPlugin();
        return <GraphiQL fetcher={fetcher} plugins={[explorer]}/>;
      }}
    </BrowserOnly>
  );
}
