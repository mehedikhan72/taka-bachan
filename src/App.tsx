import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/expense/expense";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";

function App() {
  return (
    <div className="App">
      <Expenses />
      <Login />
      <Logout />
    </div>
  );
}

export default App;
