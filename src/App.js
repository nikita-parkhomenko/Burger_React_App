import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';


class App extends Component {

  
  render() {
    return (
      <BrowserRouter>
       <Layout>
          <Route path="/orders" component={Orders} />
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
       </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
