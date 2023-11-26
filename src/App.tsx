import React from 'react';
import './App.css';
import Header from './components/Header';
import FakeStoreComponent from './components/FakeStoreComponent';
import Radioside from './components/Radioside'
import { Pardiv } from './components/styled/Radiostyled';
import { ProductsProvider } from "./Context/Context";

function App() {
  return (
    <ProductsProvider>
    <div className="App">
      <Header/>
      <Pardiv>
       <Radioside/>
       <FakeStoreComponent/>
      </Pardiv>
    </div>
    </ProductsProvider>
  );
}

export default App;
