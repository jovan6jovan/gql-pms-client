import { ApolloProvider } from "@apollo/client";
import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "../../components/Header/Header";
import { theme } from "../../theme";
import Main from "../Routes/Main";
import { client } from "./App.config";
import { GlobalStyles } from "./App.styles";

const App: FC = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router>
            <Header />
            <Main />
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
