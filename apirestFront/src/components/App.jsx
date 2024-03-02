import { Route, Routes } from "react-router-dom";
import { IndexApp } from "../pages/IndexApp";
import { BarNav } from "./BarNav";

function App() {
  return (
    <>
      <div className="barnav">
        <BarNav/>
      </div>
      <Routes>
        <Route path="/" element={<IndexApp />} />
      </Routes>
    </>
  );
}

export default App;
