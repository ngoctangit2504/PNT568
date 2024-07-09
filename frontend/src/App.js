import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Welcome from "./components/Welcome";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import Header from "./defaultLayout/Header";
import Footer from "./defaultLayout/Footer";


import MatBangListPage from './feature/matbang/MatBangListPage';
import AddMatBangPage from './feature/matbang/AddMatBangPage';



const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <div>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/user" element={<UserDashboard />} />

                <Route path="/matbang" element={<MatBangListPage/>}></Route>
                <Route path="/them-mat-bang" element={<AddMatBangPage/>}></Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
      <ToastContainer />
    </>
  );
};

export default App;
