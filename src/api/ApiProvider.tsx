import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/graphql',
  cache: new InMemoryCache()
});

export default function ApiProvider({ children }: Props) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
