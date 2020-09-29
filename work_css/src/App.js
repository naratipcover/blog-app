import React from "react";
import Background from "./components/Background";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Background></Background>
      <Navbar></Navbar>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}
