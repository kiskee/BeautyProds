
import Header from "./components/Header1.0";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Content from "./components/Content";
import Testimonials from "./components/Testimonials";
import Final from "./components/Final";
import Footer from "./components/Footer1.0";
import MetaPixel from "./components/MetaPixel";

function App() {
  const pixelId = import.meta.env.VITE_YDI
  return (
    <>
      <div className="font-sans min-h-screen bg-gradient-to-b from-pink-50 to-white">
        <MetaPixel pixelId={pixelId} />
        <Header   />
        <Hero  id="hero"  />
        <About id="about" />
        <Benefits id="benefits"/>
        <Content id="content" />
        <Testimonials id="testimonials"/>
        <Final id="final" />
        <Footer />
      </div>
    </>
  );
}

export default App;
