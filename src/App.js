import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/index';
import ValidityCheck from './components/ValidityCheck';
import logo from './logo.svg';
import './App.css';

const store = configureStore();
class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
            <ValidityCheck/>
      </div>
    </Provider>
    );
  }
}

export default App;

