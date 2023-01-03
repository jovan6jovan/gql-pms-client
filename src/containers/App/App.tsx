import { FC } from "react";
import Header from "../../components/Header/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "../Routes/Main";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
  cache,
});

const App: FC = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Main />
        </Router>
      </ApolloProvider>
    </>
  );
};

export default App;
