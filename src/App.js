import React, { useState } from 'react';
import { take } from 'lodash';
import { Admin } from './pages/administration/Admin'
import { Home } from './pages/home/Home'
import { Products } from './pages/products/Products';
import { Purchases } from './pages/purchases/Purchases'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NewProduct } from './pages/administration/NewProduct';
import NavMenu from './components/NavMenu.js';
import ApiFactory from './mock';
import './index.scss';
import products from './mock/products'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: products,
      purchases: [],
      activePotato: null,
    }
  }

  handleBuyProduct = (potato) => {
    const purchases = [...this.state.purchases]
    const potatoInPurchases = purchases.find(p => p.id === potato.id)
    if (potatoInPurchases) {
      potatoInPurchases.count += 1;
    } else {
      potato.count = 1;
      purchases.push(potato)
    }
    this.setState({ purchases })
  }

  addNewProduct = (product) => {
    console.log(product)
    const products = [...this.state.products]
    if (product.id) {
      const productIndex = products.findIndex(p => p.id === product.id)
      products[productIndex] = product
      console.log(products)

      this.setState({ products })

    } else {
      const newId = Math.max(...products.map(p => p.id))
      product.id = newId + 1
      this.setState({ products: [...this.state.products, product] })
    }
    this.setState({
      activePotato: null
    })
  }

  decreaseProductCount = (potato) => {
    let purchases = [...this.state.purchases]
    const potatoInPurchases = purchases.find(p => p.id === potato.id)
    if (potatoInPurchases) {
      potatoInPurchases.count -= 1;
    }
    if (potatoInPurchases.count === 0) {
      purchases = purchases.filter(p => p.id !== potatoInPurchases.id);
    }
    this.setState({ purchases })
  }

  clearCart = () => {
    this.setState({ purchases: [] })
  }

  onDeleteProduct = (id) => {
    const products = [...this.state.products]
    const purchases = [...this.state.purchases]
    this.setState({
      products: products.filter(p => p.id !== id),
      purchases: purchases.filter(p => p.id !== id),
    })
  }

  setActivePotato = (potato) => {
    this.setState({
      activePotato: potato
    })
  }



  render() {
    const { products, purchases, activePotato } = this.state
    return (
      <Router>
        <NavMenu />
        <Switch>
          <Route exact path="/" render={() => <Home products={products} />} />
          <Route path="/admin" render={() => <Admin products={products} onDeleteProduct={this.onDeleteProduct} setActivePotato={this.setActivePotato} />} />
          <Route path="/products" render={() => <Products products={products} handleBuyProduct={this.handleBuyProduct} purchases={purchases} />} />
          <Route path="/purchases" render={() => <Purchases purchases={purchases}
            handleBuyProduct={this.handleBuyProduct}
            decreaseProductCount={this.decreaseProductCount}
            clearCart={this.clearCart} />} />
          <Route path="/newproduct" render={() => <NewProduct potato={activePotato} products={products} addNewProduct={this.addNewProduct} />} />
        </Switch>
      </Router >
    );
  }
}

// function getIsAdmin() {
//   ApiFactory.getInstance().get('/api/is-admin')
//     .then(({ data }) => {
//       setValue(beautify(data));
//     })
//     .catch((error) => {
//       console.log(error.response);
//     }).catch((error) => {
//       // TODO: Display nice error message.
//       console.log(error.response);
//     });
// }

// function getAllProducts() {
//   ApiFactory.getInstance().get('/api/products')
//     .then(({ data }) => {
//       setValue(beautify({ products: take(data, 3) }));
//     })
//     .catch((error) => {
//       console.log(error.response);
//     }).catch((error) => {
//       // TODO: Display nice error message.
//       console.log(error.response);
//     });
// }

// function getProduct(id) {
//   ApiFactory.getInstance().get(`/api/products/${id}`)
//     .then(({ data }) => {
//       setValue(beautify({ products: data }));
//     })
//     .catch((error) => {
//       console.log(error.response);
//     }).catch((error) => {
//       // TODO: Display nice error message.
//       console.log(error.response);
//     });
// }

// function deleteProduct(id) {
//   ApiFactory.getInstance().delete(`/api/products/${id}`).then(
//     () => { getAllProducts() }
//   ).catch((error) => {
//     // TODO: Display nice error message.
//     console.log(error.response);
//   });
// }

// function updateProduct(id, data) {
//   ApiFactory.getInstance().put(`/api/products/${id}`, data).then(
//     () => { getAllProducts() }
//   ).catch((error) => {
//     // TODO: Display nice error message.
//     console.log(error.response);
//   });
// }

// function buyItems(items) {
//   ApiFactory.getInstance().post('/api/buy', { itemsToBuy: items }).then(function () {
//     alert('Bought Items. This is fake API that do nothing.');
//   }).catch((error) => {
//     // TODO: Display nice error message.
//     console.log(error.response);
//   });
// }

// function beautify(val) {
//   return JSON.stringify(val, null, 2);
// }

export default App;
