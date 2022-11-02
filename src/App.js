import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/icons/style.css'

import { useState } from 'react';

import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';


function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <div className='h-100 d-flex flex-column'>
      {showCart && <Cart onClose={hideCartHandler} />}
      <div>
        <Header onShowCart={showCartHandler} />
      </div>
      <main className='flex-grow-1'>
        <Meals />
      </main>
    </div>
  );
}

export default App;
