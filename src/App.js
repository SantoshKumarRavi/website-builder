import './App.css';
// import Button from '@mui/material/Button';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Herocard from './components/Herocard';
import Notification from './components/Notification';
import About from './components/About';
import Achievements from './components/Achievements';
import UpcomingEvents from './components/UpcomingEvents';
import Gallery from './components/Gallery';
import ExtraActivity from './components/ExtraActivity';
import Cocurricular from './components/Cocurricular';
import Facility from './components/Facility';
import Curriculum from './components/Curriculum';
import Faculty from './components/Faculty';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
          <div className="flex flex-col min-h-screen overflow-hidden">
              <Header/>
              <Herocard/>
              <Notification/>
              <About/>
              <Achievements/>
              <UpcomingEvents/>
              <Gallery/>
              <ExtraActivity/>
              <Cocurricular/>
              <Facility/>
              <Curriculum/>
              <Faculty/>
              <Footer/>
          </div>
      </Router>
    </div>
  );
}

export default App;
