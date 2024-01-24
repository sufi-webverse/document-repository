import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { Button } from '@fluentui/react-components';
import { FileList } from './FileList';

function App() {
  return (
    <div className="App">
      <Button appearance="primary">Get started</Button>

      <FileList />
    </div>
  );
}

export default App;
