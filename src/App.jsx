import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/Home";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        {/* ROUTES APP */}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
