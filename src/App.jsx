import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import StepsComponent from "./components/StepsComponent";
import Banner from "./components/Banner";
import BannerInput from "./components/BannerInput";
import NewComponen from "./components/NewComponen";
import Header2 from "./components/Header2";
import One from "./components/one";
import Two from "./components/two";
import Three from "./components/three";
import Four from "./components/four";
import Five from "./components/five";
import Six from "./components/six";
import Seven from "./components/seven";
import Eith from "./components/eith";

function App() {
  return (
    <>
      <div className="font-sans min-h-screen bg-gradient-to-b from-pink-50 to-white">
        <One   />
        <Two  id="hero"  />
        <Three id="about" />
        <Four id="benefits"/>
        <Five id="content" />
        <Six id="testimonials"/>
        <Seven id="final" />
        <Eith />
      </div>
    </>
  );
}

export default App;
/**
  * 
  *   {/*
      <Header />
      <Banner/>
      <StepsComponent/>
      <Main />
      
      <BannerInput/> 
       <Footer />
      
  */
