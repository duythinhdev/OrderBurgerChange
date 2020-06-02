import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
class App extends Component{
  render() {
    return (
          <div>
            <Layout>
              <BurgerBuilder />
            </Layout>
          </div>
    );
  }

}

export default App;
