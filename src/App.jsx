import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Stripe from './components/Stripe';

function App() {
  return (
    <>
      <Header />

      <section id="home">
        <Hero />
      </section>

      <section id="stripe">
        <Stripe />
      </section>

      <Footer />
    </>
  )
}
export default App;
