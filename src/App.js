import React, { Component } from 'react'
import store from './store/index.js'
import { Provider } from 'react-redux'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          hi
        </div>
      </Provider>
    );
  }
}

export default App