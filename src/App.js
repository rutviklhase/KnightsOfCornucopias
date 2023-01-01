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
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from "./components/Footer/Footer"
import NFT from './components/NFTs/NFT';
import Faq from './components/Faq/Faq';
import YoutubeVideos from './components/youtube/YoutubeVideos';
function App() {
  return (
    
      <ParallaxProvider>
          <div className="App">
          <div className='backgroundimageclass'>
          <img src='../assets/images/Background.png' />

        </div>
        <Menubar />
        <HomeBody />
        <BigCastle />
        <SmallCastle/>
        <Roadmap />
        <Team />
        <NFT/>
        <YoutubeVideos/>
        <Faq/>
       
        <Footer/>
        
        

    </div>



      </ParallaxProvider>
    
  );
}

export default App;
