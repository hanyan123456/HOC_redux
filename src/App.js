import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home'
import List from './list'
import store from './store'
import { Provider, connect } from 'react-redux'

function App() {
  // console.log(store)
  return (
    <div className="App">
      <p>redux</p>
      <Provider store={store}>
        <Home></Home>
        <List></List>
      </Provider>

    </div>
  );
}

export default App;
