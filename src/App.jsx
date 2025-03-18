import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import StepsComponent from "./components/StepsComponent";
import Banner from "./components/Banner";
import BannerInput from "./components/BannerInput";

function App() {
  return (
    <>
      <Header />
      <Banner/>
      <StepsComponent/>
      <Main />
      
      <BannerInput/>

      <Footer />
    </>
  );
}

export default App;
