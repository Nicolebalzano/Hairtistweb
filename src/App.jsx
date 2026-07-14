import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Stripe from "./components/Stripe";
import ChiSiamo from "./components/ChiSiamo";
import OurServices from "./components/OurServices";
import Esperienza from "./components/Esperienza";
import NostriLavori from "./components/NostriLavori";

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
      <section id="i-nostri-servizi">
        <OurServices />
      </section>
      <section id="esperienza">
        <Esperienza />
      </section>
      <section id="nostri-lavori">
        <NostriLavori />
      </section>

      <Footer />
    </>
  );
}
export default App;
