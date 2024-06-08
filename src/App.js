import { Link } from 'react-router-dom';
import './App.css';
import sahi from './hero_img-removebg-preview.png'

function App() {

  return (
    <div className="App">
      <div className='hero'>
        <div className='contant'>
          <h1>Discover Our Exquisite Restaurant <span>Experience!</span></h1>
          <p>Experience culinary bliss in every bite. From farm to table, we craft unforgettable flavors. Join us for an extraordinary dining adventure today!</p>
          <div className='btn'>
            <Link to={'/OurMenu'}>
            <button>Our Menu</button>
            </Link>
            <Link to={'/Location'}>
            <button>location</button>
            </Link>
          </div>
        </div>
        <div className='img'>
          <img src={sahi}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
