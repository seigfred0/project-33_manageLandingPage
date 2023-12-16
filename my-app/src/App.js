import Hero from './components/Hero.js';
import Nav from './components/Navigation.js';
import Testimonial from './components/Testimonial.js';
import Usp from './components/USP.js';
import './index.css';

function App() {
  return (
    <main>
      <Nav></Nav>
      <Hero></Hero>   
      <Usp></Usp>     
      <Testimonial></Testimonial>
    </main>
  );
}

export default App;
