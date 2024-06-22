import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/authService";

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Access localStorage inside useEffect
        const token = JSON.parse(localStorage.getItem("user"))?.token;
        const userId = JSON.parse(localStorage.getItem("user"))?.user?._id;

        if (!token || !userId) {
          // If token or userId is not available, navigate to login page
          navigate("/login");
          return;
        }

        // Fetch user data using AuthService
        const userData = await AuthService.getUserById(userId, token);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      
      <button onClick={handleLogout}>Logout</button>

      <div class="dropdown col-6-6">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Nhân viên quản lý
        </button>
        <ul class="dropdown-menu">
          <li>
            <Link to="/customer-list">
              <button class="dropdown-item" type="button">
                Khách hàng
              </button>
            </Link>
          </li>

          <li>
            <button class="dropdown-item" type="button">
              Hợp đồng
            </button>
          </li>
          <li>
            <button class="dropdown-item" type="button">
              Vật chất
            </button>
          </li>
          <li>
            <button class="dropdown-item" type="button">
              Báo cáo
            </button>
          </li>
          <li>
            <button class="dropdown-item" type="button">
              Tính năng khác
            </button>
          </li>
        </ul>
      </div>

      <table class="table">
  <thead>
    <tr>
      <th colSpan={9}>Khách hàng</th>
    </tr>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Địa chỉ</th>
      <th scope="col">Tên</th>
      <th scope="col">Giới tính</th>
      <th scope="col">Ngày sinh</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
      <th scope="col">Tên công ty</th>
      <th scope="col">Tác vụ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
    </tr>
  </tbody>
</table>
    </div>
  );
};

export default UserDashboard;
