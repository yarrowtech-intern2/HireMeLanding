import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Features from "../components/Features";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Floating from "../components/Floating";
const Home = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Features />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Floating />
      <Footer />
    </>
  );
};

export default Home;
