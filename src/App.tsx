import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link } from "react-router-dom";

import '@ionic/react/css/'

import { setupIonicReact } from "@ionic/react/dist/types/components";

function App() {
  return (
    <div className="App">
      <Link to="/login">Click to login</Link>
      <Link to="/dashboard">Click for Dashboard</Link>
      <Link to="/location">Click for Lcoation</Link>
    </div>
  );
}

export default App;
