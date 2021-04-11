import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nave from "./components/Navbar/Nave";
import Header from "./components/Header/Header";
import Slider from "./components/Carousel/Slider";
import About from "./components/Pages/About/About";
import Service from "./components/Pages/Service/Service";

import Contact from "./components/Pages/Contact/Contact";
import Cards from "./components/Cards/Cards";
import Button from "./components/Button/Button";
import Details from "./components/Details/Details";
import Gallery from "./components/Gallery/Gallery";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Breaker from "./components/Breaker/Breaker";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Nave />
            <Slider />
            <Cards />
            <Details />
            <Gallery />
            <News />
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
          <Route path="/services">
            <Service />
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
