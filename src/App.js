import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Home from "./pages/Home";

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path='/profile' element={<Profile />} />
   </Routes>
  );
}

export default App;
