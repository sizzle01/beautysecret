import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nave from "./components/Navbar/Nave";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import About from "./components/Pages/About/About";
import Services from "./components/Pages/Services/Services";
import Appointment from "./components/Pages/Appointment/Appointment";
import Contact from "./components/Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Router>
          <Switch>
            <Nave />

            <Appointment />
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;
