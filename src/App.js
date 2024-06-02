import React, { useState } from 'react';
import './App.css';
import cimage from './c4img.webp';
import cimage1 from './change1.webp';
import cimage2 from './lchange.jpeg';
import cimage3 from './change3.jpg';
import heart from './heart-solid.svg'
import clock from './clock-solid.svg'
import check from './circle-check-solid.svg'
import trophy from './trophy-solid.svg'
import Contact from './contact';
import next from './record-stroke-rounded.svg'
import images from './images';
import CustomCarousel from './Custom.Slider';
import Hoverimg from './Hoverimg';


function App() {
  const [showContact, setShowContact] = useState(false);
  const [imageIndex, setimageIndex] = useState(0);
  const images2 = [cimage1, cimage2, cimage3]

  const [showHCard, setShowHCard] = useState(false);
  const [hCardData, setHCardData] = useState({});

  const handleMouseEnter = (data) => {
    setHCardData(data);
    setShowHCard(true);
  };

  const handleMouseLeave = () => {
    setShowHCard(false);
  };
  const handleimg = (index) => {
    setimageIndex(index)
  }

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='contact'>
          <div className='contant'>
            <h2>AWARD WINNING</h2>
            <h1>DIGITAL MARKETING AGENCY</h1>
            <p>Morbi sed locus nec risus finibus feugia at fermantum nibh.Pellentesque vitac ante at elit fringilla ac at purus. Morbi sed locus nec risus finibus feugia at fermantum</p>
            <button onClick={toggleContact}>Contact Us</button>
          </div>
          <div className='img'>
            <img src={cimage} alt="Company" />
          </div>
        </div>
      </header>
      {showContact && <Contact />}
      <main>
        <div className='mflex'>
          <h2>WHAT WE DO</h2>
          <div className='m1flex'>
            <h1>SERVICES PROVIDED FOR YOU</h1>
            <p>Morbi sed locus nec risus finibus feugia at fermantum nibh.Pellentesque vitac ante at elit fringilla ac at purus. Morbi sed locus nec risus finibus feugia at fermantum</p>
          </div>
        </div>
        <div className='slider'>
        <CustomCarousel>
        {images.map((v, index) => {
          return <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={index} src={v.imgURL} alt={v.imgAlt} />;
        })}
        </CustomCarousel>
        {showHCard && <Hoverimg data={hCardData} />}
        </div>
      </main>
      <div className='conflex'>
        <div className='upper'>
          <h2>OUR PROject</h2>
          <h1>WHY WE ARE BEST</h1>
        </div>
        <div className='conimg'>
          <div className='left'>
            <img src={images2[imageIndex]}></img>
          </div>
          <div className='right'>
            <button onClick={() => handleimg(0)}>
              <h2>Genderless Kei- Japan's Hot</h2>
              <p>Set to lounch on the monufacturer's new A330 air craft in 2017.its offering lots of</p>
            </button>
            <button onClick={() => handleimg(1)}>
              <h2>Better Strategy & Quality</h2>
              <p>Set to lounch on the monufacturer's new A330 air craft in 2017.its offering lots of</p>
            </button>
            <button onClick={() => handleimg(2)}>
              <h2>Genderless Kei- Japan's Hot</h2>
              <p>Set to lounch on the monufacturer's new A330 air craft in 2017.its offering lots of</p>
            </button>
          </div>
        </div>
      </div>
      <div className='growth'>
        <div className='upper'>
        <h2>EXPERT GROWTHS</h2>
          <h1>OUR Company GROWTH</h1>
        </div>
        <div className='cards'>
        <div className='card'>
          <img src={heart}></img>
            <h1>199+</h1>
            <p>Staticfied Customers</p>
        </div>
        <div className='card'>
          <img src={clock}></img>
            <h1>1591+</h1>
            <p>Days of operation</p>
        </div>
        <div className='card'>
          <img src={check}></img>
            <h1>1591+</h1>
            <p>Complete Project</p>
        </div>
        <div className='card'>
          <img src={trophy}></img>
            <h1>199+</h1>
            <p>Win Award</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
