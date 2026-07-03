import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Stripe from './components/Stripe';
import ChiSiamo from './components/ChiSiamo';

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
        <section id="chi-siamo">
        <ChiSiamo />
      </section>

      <Footer />
    </>
  )
}
export default App;
