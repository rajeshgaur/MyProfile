import React from 'react';
import { render } from 'react-dom';
import {A} from './components/header'
import './style.scss'

const App = () => {
  return (
    <div>
      <A />
    </div>
  );
}

render(<App />, document.getElementById('app'));