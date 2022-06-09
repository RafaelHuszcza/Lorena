import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes'


import './index.css';

function App() {
  return (
          <Routes basename={process.env.PUBLIC_URL} />
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
