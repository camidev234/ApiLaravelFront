import { Route, Routes } from "react-router-dom";
import { IndexApp } from "../pages/IndexApp";
import { BarNav } from "./BarNav";
import { Users } from "../pages/Users";
import { ShowUserPage } from "../pages/ShowUserPage";

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
      </Routes>
    </>
  );
}

export default App;
