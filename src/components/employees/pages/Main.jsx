import React from "react";
import { Route,Routes } from "react-router-dom";
import { AddEmployee } from "../AddEmployee";
import { EditEmployee } from "../EditEmployee";
import { GlobalProvider } from "../reducers/GlobalState";
import Home from "./Home";

export default function Main() {
  return (
    <GlobalProvider>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddEmployee />} />
            <Route path="/edit/:id" element={<EditEmployee />} />
          </Routes>
      </div>
    </GlobalProvider>
  );
}
