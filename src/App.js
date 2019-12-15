import React, { useState } from 'react';
import { take } from 'lodash';
import { Admin } from './pages/administration/Admin'
import { Home } from './pages/home/Home'
import { Products } from './pages/products/Products';
import { Purchases } from './pages/purchases/Purchases'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu.js'
import ApiFactory from './mock';
import './index.scss';

export default function App() {
  const [value, setValue] = useState('');
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
        <Route path="/products" component={Products} />
        <Route path="/purchases" component={Purchases} />
      </Switch>
    </Router>
  );

  function getIsAdmin() {
    ApiFactory.getInstance().get('/api/is-admin')
      .then(({ data }) => {
        setValue(beautify(data));
      })
      .catch((error) => {
        console.log(error.response);
      }).catch((error) => {
        // TODO: Display nice error message.
        console.log(error.response);
      });
  }

  function getAllProducts() {
    ApiFactory.getInstance().get('/api/products')
      .then(({ data }) => {
        setValue(beautify({ products: take(data, 3) }));
      })
      .catch((error) => {
        console.log(error.response);
      }).catch((error) => {
        // TODO: Display nice error message.
        console.log(error.response);
      });
  }

  function getProduct(id) {
    ApiFactory.getInstance().get(`/api/products/${id}`)
      .then(({ data }) => {
        setValue(beautify({ products: data }));
      })
      .catch((error) => {
        console.log(error.response);
      }).catch((error) => {
        // TODO: Display nice error message.
        console.log(error.response);
      });
  }

  function deleteProduct(id) {
    ApiFactory.getInstance().delete(`/api/products/${id}`).then(
      () => { getAllProducts() }
    ).catch((error) => {
      // TODO: Display nice error message.
      console.log(error.response);
    });
  }

  function updateProduct(id, data) {
    ApiFactory.getInstance().put(`/api/products/${id}`, data).then(
      () => { getAllProducts() }
    ).catch((error) => {
      // TODO: Display nice error message.
      console.log(error.response);
    });
  }

  function buyItems(items) {
    ApiFactory.getInstance().post('/api/buy', { itemsToBuy: items }).then(function () {
      alert('Bought Items. This is fake API that do nothing.');
    }).catch((error) => {
      // TODO: Display nice error message.
      console.log(error.response);
    });
  }

  function beautify(val) {
    return JSON.stringify(val, null, 2);
  }
}
