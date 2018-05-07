import React from 'react';
import { render } from 'react-dom';
import {Header} from './components/header'
import './style.scss'

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
}

render(<App />, document.getElementById('app'));