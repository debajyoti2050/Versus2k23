import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Home />} />
   </Routes>
  );
}

export default App;
