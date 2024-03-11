import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LeftSection from "./components/LeftSection/LeftSection";
import LowerSection from "./components/LowerSection/LowerSection";
import RightSection from "./components/RightSection/RightSection";

function App() {
  return (
    <div className="main">
      <div className="innerDiv">
        <Header />
        <section className="section">
          <div className="innersection">
            <LeftSection />
            <h4>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h4>
          </div>
          <RightSection />
        </section>
        <LowerSection />

        <div className="HorizonalLine" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
