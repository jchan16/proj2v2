import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Location from './pages/location.js';
import League from './pages/league.js';
import Coaches from './pages/coaches.js';
import Contact from './pages/contact.js';
import Gloves from './pages/gloves.js';
import Balls from './pages/balls.js';
import Cleats from './pages/cleats.js';
import Register from './pages/register_league';
import Home from './pages/home.js';
import RL_conf from './pages/reg_league_conf';
import Rent_P from './pages/rent_page';
import E_conf from './pages/rent_conf';
import Homef from './pages/homef';

function App() {
  return (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/location" element={<Location />}/>
        <Route path="/league" element={<League />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/coaches" element={<Coaches />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/gloves" element={<Gloves />}/>
        <Route path="/cleats" element={<Cleats />}/>
        <Route path="/balls" element={<Balls />}/>
        <Route path="/league_conf" element={<RL_conf />} />
        <Route path="/equip_rent" element={<Rent_P />} />
        <Route path="/equip_conf" element={<E_conf />} />
        <Route path="/homef" element={<Homef />} />
      </Routes>
    </div>
   
  </HashRouter>
  );
}

export default App;
