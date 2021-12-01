import React from 'react';

import styles from './Homepage.module.scss';

import Logo from '@element/Logo';

const App = () => {
  return (
    <div className="bg-background text-primary full center">
      <Logo />
      <h1 className={styles.header}>Infotition Microfrontend Boilerplate</h1>
    </div>
  );
};

export default App;
