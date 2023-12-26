import Footer from './components/FooterSect.js';
import Hero from './components/Hero.js';
import Nav from './components/Navigation.js';
import Testimonial from './components/Testimonial.js';
import Usp from './components/USP.js';
import backgroundImage from './images/bg-tablet-pattern.svg';
import './index.css';


function App() {
  return (
    <div className='website-container'>
      <main>
        <Nav>
        </Nav>
          <img src={backgroundImage} alt='background' className='background-one'/>
        <Hero></Hero>   
        <img src={backgroundImage} alt="background" className="background-two desktop-only"/>
        <Usp></Usp>     
        <Testimonial></Testimonial>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
