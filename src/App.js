import React, { Component } from "react";
import { Routes } from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./providers/authProvider";
import './App.css';
import HeaderContainer from "./components/header/HeaderContainer";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <HeaderContainer />
        <BrowserRouter children={Routes} basename={"/"} />
      </AuthProvider>
    );
  }
}

export default App;
