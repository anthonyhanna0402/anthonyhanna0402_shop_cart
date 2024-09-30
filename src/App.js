import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import store from './store';
const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>        
        </Router>
      </Provider>      
    </React.Fragment>
  );
}

export default App;
