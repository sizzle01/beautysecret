import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nave from "./components/Navbar/Nave";
import Header from "./components/Header/Header";
import Slider from "./components/Carousel/Slider";
import About from "./components/Pages/About/About";

import Contact from "./components/Pages/Contact/Contact";
import Cards from "./components/Cards/Cards";
import Details from "./components/Details/Details";
import Gallery from "./components/Gallery/Gallery";

import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Breaker from "./components/Breaker/Breaker";
import Post from "./components/Pages/Blog/Post";
import SinglePost from "./components/Pages/Blog/SinglePost";
import BlogPage from "./components/Pages/Blog/BlogPage";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Player from "./components/player/Player";
import Teams from "./components/Team/Team";
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
            <Post />
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
            <Portfolio />
          </Route>

          <Route path="/post/:slug">
            <SinglePost />
          </Route>
          <Route path="/post">
            <BlogPage />
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
