import React from 'react';
import GlobalStyle from '../styles/globalStyle';
import Layout from './Layout';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import DealsPage from '../pages/DealsPage';
import CartPage from '../pages/CartPage';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Layout>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/deals">
          <DealsPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
