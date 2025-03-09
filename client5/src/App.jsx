import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart'
import Checkout from './components/Checkout';
import Home from './components/Home'
import Login from './components/Login'
import Order from './components/Order'
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';
import Profile from './components/Profile';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
      <Router>
        <Navbar /> 
        <div className="app-container">
          <Switch>
           
            <Route path="/" exact>
              <h1>Welcome to the Multi-Vendor Marketplace</h1>
            </Route>
  
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/productcard" component={ProductCard} />
            <Route path="/productlist" component={ProductList} />
            <Route path="/home" component={Home} />
  
            {/* Protected Routes */}
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/order/:orderId" component={Order} />
           
          </Switch>
        </div>
        <Footer /> 
      </Router>
    );
  };
  
  export default App;