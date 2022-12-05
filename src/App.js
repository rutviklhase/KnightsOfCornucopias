import logo from './logo.svg';
import './App.scss';
import Menubar from './components/menubar/Menubar';
import HomeBody from './components/Home/HomeBody';
import React from 'react';
import { ReactDOM } from 'react';

function App() {
  return (
    <div className="App">
     <div className='backgroundimageclass'>
      <img src='../assets/images/Background.png' />

     </div>
     <Menubar />
     <HomeBody />

    </div>
  );
}

export default App;
