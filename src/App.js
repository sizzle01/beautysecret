import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nave from "./components/Navbar/Nave";
import Header from "./components/Header/Header";
import Slider from "./components/Carousel/Slider";
import About from "./components/Pages/About/About";
import Services from "./components/Pages/Services/Services";
import Appointment from "./components/Pages/Appointment/Appointment";
import Breaker from "./components/Breaker/Breaker";
import Contact from "./components/Pages/Contact/Contact";
import Cards from "./components/Cards/Cards";
import Button from "./components/Button/Button";
import Details from "./components/Details/Details";
import Gallery from "./components/Gallery/Gallery";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Router>
          <Switch>
            <Route path="/">
              <Nave />
              <Slider />
              <Cards />
              <Details />
              <Gallery />
              <News />
              <Footer />
            </Route>
            <Appointment />
            <About />
            <Services />
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
