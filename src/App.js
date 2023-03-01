import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

import './S.css';

import ProductContextProvider from './Global/productContext';

import CartContextProvider from './Global/CartContext';
import Products from './components/Products';
import Cart from './components/Cart';

import NotFound from './components/NotFound';
function App() {
  return (
   <div>
    <ProductContextProvider>
      <CartContextProvider>
      <Router>
      <Navbar/>
    
        <Switch>
          <Route path='/' exact component={Products}/>
          <Route path='/Cart' exact component={Cart}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
      </CartContextProvider>
</ProductContextProvider>
     </div>
  );
}

export default App;
