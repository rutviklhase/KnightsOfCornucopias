import logo from './logo.svg';
import './App.scss';
import Menubar from './components/menubar/Menubar';
import HomeBody from './components/Home/HomeBody';
import React from 'react';
import { ReactDOM } from 'react';
import BigCastle from './components/BigCastle/BigCastle';
import SmallCastle from './components/SmallCastle/SmallCastle';
import Roadmap from './components/Roadmap/Roadmap';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="App">
      <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
      <script type="text/javascript" src="dist/js/timeline.min.js"></script>
     <div className='backgroundimageclass'>
      <img src='../assets/images/Background.png' />

     </div>
     <Menubar />
     <HomeBody />
     <BigCastle />
     <SmallCastle size = "300px"/>
     <Roadmap />
     <Team />

    </div>
  );
}

export default App;
