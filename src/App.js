import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import {Switch, Route, useLocation} from 'react-router-dom'
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import {AnimatePresence} from "framer-motion";

function App() {
    const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
      <Switch key={location.pathname} location={location}>
          <Route exact path='/'>
              <AboutUs/>
          </Route>
          <Route exact path='/work'>
              <OurWork/>
          </Route>
          <Route exact path='/contact'>
              <ContactUs/>
          </Route>
          <Route path='/work/:id'>
              <MovieDetail/>
          </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
