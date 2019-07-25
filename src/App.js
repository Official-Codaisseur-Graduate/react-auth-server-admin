import React, { Component } from "react";
import { Routes } from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./providers/authProvider";
import './App.css';
import HeaderContainer from "./components/header/HeaderContainer";
import FooterContainer from "./components/footer/FooterContainer";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <HeaderContainer />
        <BrowserRouter children={Routes} basename={"/"} />
        <FooterContainer />
      </AuthProvider>
    );
  }
}

export default App;
