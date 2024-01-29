import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import DeptList from "./components/Dept";
import DocDetails from "./components/DocDetails";
import Login from "./components/login";
import ProtectedRoute from "./components/ProtectedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Routing = (
  <BrowserRouter>
    <Link to="/">Home</Link> |<Link to="/dept">Departments</Link> |
    <Link to="/doc">Doctors List</Link> |<Link to="/login">Login</Link> |
    <Routes>
      <Route path="/" element={<App />} />

      <Route
        path="/dept"
        element={
          <ProtectedRoute returnUrl="/dept">
            <DeptList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/doc"
        element={
          <ProtectedRoute returnUrl="/doc">
            <DocDetails />
          </ProtectedRoute>
        }
      />

      <Route path="/doc" element={<DocDetails />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

root.render(<React.StrictMode>{Routing}</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
