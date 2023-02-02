import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import ValorantReg from "./pages/ValorantReg";

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/teams' element={<Teams />} />
    <Route path='/valorant-register' element={<ValorantReg />} />
   </Routes>
  );
}

export default App;
