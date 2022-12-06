import logo from './logo.svg';
import './App.scss';
import Menubar from './components/menubar/Menubar';
import HomeBody from './components/Home/HomeBody';
import React from 'react';
import { ReactDOM } from 'react';
import BigCastle from './components/BigCastle/BigCastle';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="App">
     <div className='backgroundimageclass'>
      <img src='../assets/images/Background.png' />

     </div>
     <Menubar />
     <HomeBody />
     <BigCastle />
     <Team />

    </div>
  );
}

export default App;
