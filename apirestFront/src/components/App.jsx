import { Route, Routes } from "react-router-dom";
import { IndexApp } from "../pages/IndexApp";
import { BarNav } from "./BarNav";
import { Users } from "../pages/Users";

function App() {
  return (
    <>
      <div className="barnav">
        <BarNav/>
      </div>
      <Routes>
        <Route path="/" element={<IndexApp />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
