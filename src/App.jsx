import { Router, Routes, Route } from "react-router-dom";
import Alphabetic from "./pages/Alphabetic";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/alphabet" element={<Alphabetic />}></Route>
        <Route path="" element></Route>
      </Routes>
    </div>
  );
}

export default App;
