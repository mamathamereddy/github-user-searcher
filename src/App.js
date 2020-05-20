import React from 'react';
import Header from './components/Header'
import SearchUser from './components/SearchUser'
import './App.css';
//import Renderprop from './Renderprop';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchUser/>
     {/* <Renderprop/>*/ } 
    </div>
  );
}

export default App;
