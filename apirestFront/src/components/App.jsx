import { Route, Routes } from "react-router-dom";
import { IndexApp } from "../pages/IndexApp";
import { BarNav } from "./BarNav";
import { Users } from "../pages/Users";
import { ShowUserPage } from "../pages/ShowUserPage";
import { Occupations } from "../pages/Occupations";
import { ShowOccupationPage } from "../pages/ShowOccupationPage";

function App() {
  return (
    <>
      <div className="barnav">
        <BarNav/>
      </div>
      <Routes>
        <Route path="/" element={<IndexApp />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<ShowUserPage/>}/>
        <Route path="/occupations" element={<Occupations/>}/>
        <Route path="/occupation/:id" element={<ShowOccupationPage/>}/>
      </Routes>
    </>
  );
}

export default App;
