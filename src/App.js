import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import Footer from './components/Footer/Footer';
import { createContext, useState, useEffect } from 'react';

// courses context api
export const coursesContext = createContext();

function App() {

  // courses state
  const [courses, setCourses] = useState([]);

  // load courses data
  useEffect(() => {
    fetch('./Courses.JSON')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, []);


  return (
    <coursesContext.Provider value={[courses, setCourses]}>
      <div className="App">
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/courses">
              <Courses></Courses>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </coursesContext.Provider>
  );
}

export default App;
