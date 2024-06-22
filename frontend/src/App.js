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
import customerRoutes from "./routes/customeRoutes";
import CustomerList from "./components/CustomerList";

import FloorPlanList from './feature/floorplan/FloorPlanList';
import AddFloorPlanForm from './feature/floorplan/AddFloorPlan';


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

                <Route path="/customer-list" element={<CustomerList/>}></Route>


                <Route path="/floor-plan" element={<FloorPlanList/>}></Route>
                <Route path="/add-floor-plan" element={<AddFloorPlanForm/>} />

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
