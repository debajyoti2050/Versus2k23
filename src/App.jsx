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
import BGMIRegistrationSuccess from "./pages/BGMIRegistrationSuccess";
import RegistrationFail from "./pages/RegistrationFail";
import ValorantRegistrationSuccess from "./pages/ValorantRegistrationSuccess";
import BallPoolRegistrationSuccess from "./pages/BallPoolRegistrationSuccess";
import CSREgistrationSuccess from "./pages/CSREgistrationSuccess";
import NFSRegistrationSuccess from "./pages/NFSRegistrationSuccess";

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/teams' element={<Teams />} />
    {/* <Route path='/valorant-register' element={<ValorantReg />} />
    <Route path='/ballpool-register' element={<BallpoolReg />} />
    <Route path='/bgmi-register' element={<BgmiReg />} />
    <Route path='/cs-register' element={<CsReg />} />
    <Route path='/nfs-register' element={<NfsReg />} /> */}
    <Route path='/bgmi-register-success' element={<BGMIRegistrationSuccess />} />
    <Route path='/valo-register-success' element={<ValorantRegistrationSuccess />} />
    <Route path='/ballpool-register-success' element={<BallPoolRegistrationSuccess />} />
    <Route path='/cs-register-success' element={<CSREgistrationSuccess />} />
    <Route path='/nfs-register-success' element={<NFSRegistrationSuccess />} />
    <Route path='/register-fail' element={<RegistrationFail />} />

   </Routes>
  );
}

export default App;
