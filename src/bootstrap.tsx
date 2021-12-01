import React from 'react';
import ReactDOM, { Container } from 'react-dom';

import App from './App';

const mount = (element: Container) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    element
  );
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_infotition-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
