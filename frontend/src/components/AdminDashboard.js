import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/authService";

import { getMatBangCount } from "../services/matBangService";
import { getUserCount } from "../services/userService";


const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [matBangCount, setMatBangCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetchMatBangCount();
    fetchUserCount();
  }, []);

  const fetchMatBangCount = async () => {
    try {
      const response = await getMatBangCount();
      setMatBangCount(response.data.count);
    } catch (error) {
      console.error('Error fetching mat bang count:', error);
    }
  };

  const fetchUserCount = async () => {
    try {
      const response = await getUserCount();
      setUserCount(response.data.count);
    } catch (error) {
      console.error('Error fetching user count:', error);
    }
  };


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

  return (
    <>
      <div className="container">
        <h1>Admin Quản Lý</h1>

        <div class="dropdown col-6-6">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Quản lý - Cập nhật
          </button>
          <ul class="dropdown-menu">
            <li>
              <Link to="/user-list">
                <button class="dropdown-item" type="button">
                  Người dùng
                </button>
              </Link>
            </li>
            <li>
              <Link to="/matbang">
                <button class="dropdown-item" type="button">
                  Mặt bằng hihi
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
                Thông tin tòa nhà
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
      <th scope="col">#</th>
      <th scope="col">Người dùng</th>
      <th scope="col">Mặt Bằng</th>
      <th scope="col">Hợp đồng</th>
      <th scope="col">Báo cáo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Số lượng</th>
      <td>{userCount}</td>
      <td>{matBangCount}</td>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>
      </div>
    </>
  );
};

export default AdminDashboard;