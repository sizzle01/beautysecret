import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nave from "./components/Navbar/Nave";
import Header from "./components/Header/Header";
import Slider from "./components/Carousel/Slider";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Cards from "./components/Cards/Cards";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Breaker from "./components/Breaker/Breaker";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Player from "./components/player/Player";
import Teams from "./components/Team/Team";
import Statement from "./components/Pages/Statement/Statement";
import OurTeam from "./components/Pages/OurTeam/OurTeam";
import Testimonials from "./components/Pages/Testimonials/Testimonials";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Nave />

        <Switch>
          <Route exact path="/">
            <Slider />
            <Cards />
            <Player />
            <Gallery />
            <Teams />
            <Testimonials />
            <Breaker
              head="Get In Touch"
              paragraph="For all enquiries, please contact us using the form below."
            />

            <Form />
            <Footer />
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/statement">
            <Statement />
          </Route>
          <Route path="/team">
            <OurTeam />
          </Route>
          <Route path="/testimonials">
            <Testimonials />
          </Route>
          <Route path="/services">
            <Portfolio />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
