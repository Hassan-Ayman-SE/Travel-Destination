import Home from "./components/home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TourDetails from "./components/TourDetails/TourDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/city/:id" element={<TourDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
