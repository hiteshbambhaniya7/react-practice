import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Menu from "./Menu";
import Home from "./Home";
import Objective from "./objective";
import Afunction from "./function";
import District from "./district";
import Support from "./support";
import Branches from "./branches";
import Hr from "./hr";
import Staff from "./faculty";
import Nopage from "./nopage";

function MyRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Menu />}>
            <Route index path="/Home" element={<Home />} />
            <Route path="/objective" element={<Objective />} />
            <Route path="/function" element={<Afunction />} />
            <Route path="/district" element={<District />} />
            <Route path="/support" element={<Support />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/hr" element={<Hr />} />
            <Route path="/faculty" element={<Staff />} />
            <Route path='*' element={<Nopage />} />
            
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyRoute />);
