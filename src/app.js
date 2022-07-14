import { Navbar } from "./components/navbar/navbar";
import { Body } from "./components/body/body";
import "./app.css";
import React from "react";
import { Link } from "react-router-dom";

export function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <Body />
    </React.StrictMode>
  );
}
