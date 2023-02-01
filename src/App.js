// import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Scroll from './Components/Scroll';
import About from './Components/About';
import Bottom from './Components/Bottom';

function App() {
  return (
    <>
    <section className='bg-gray-800 h-full'>
    <Navbar></Navbar>
    <Hero></Hero>
    <Scroll></Scroll>
    <About></About>
    <Bottom></Bottom>
    </section>



    </>
  );
}

export default App;
