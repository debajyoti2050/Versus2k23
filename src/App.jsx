import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import ValorantReg from "./pages/ValorantReg";
import BallpoolReg from "./pages/BallpoolReg";
import BgmiReg from "./pages/BgmiReg";
import CsReg from "./pages/CsReg";
import NfsReg from "./pages/NfsReg";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import RegistrationFail from "./pages/RegistrationFail";

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/teams' element={<Teams />} />
    <Route path='/valorant-register' element={<ValorantReg />} />
    <Route path='/ballpool-register' element={<BallpoolReg />} />
    <Route path='/bgmi-register' element={<BgmiReg />} />
    <Route path='/cs-register' element={<CsReg />} />
    <Route path='/nfs-register' element={<NfsReg />} />
    <Route path='/register-success' element={<RegistrationSuccess />} />
    <Route path='/register-fail' element={<RegistrationFail />} />

   </Routes>
  );
}

export default App;
