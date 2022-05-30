import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import {Switch, Route} from 'react-router-dom'
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch>
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
    </div>
  );
}

export default App;
