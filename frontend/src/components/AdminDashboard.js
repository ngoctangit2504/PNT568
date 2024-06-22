import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../services/authService';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Access localStorage inside useEffect
        const token = JSON.parse(localStorage.getItem('user'))?.token;
        const userId = JSON.parse(localStorage.getItem('user'))?.user?._id;

        if (!token || !userId) {
          // If token or userId is not available, navigate to login page
          navigate('/login');
          return;
        }

        // Fetch user data using AuthService
        const userData = await AuthService.getUserById(userId, token);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <>
    <div className='container'>
    <h1>Admin Dashboard</h1>
      
      {/* Add more functionality here */}

      <div class="dropdown col-6-6" >
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Quản lý - Cập nhật
  </button>
  <ul class="dropdown-menu">
    <li><Link to="/customer-list"><button class="dropdown-item" type="button">Người dùng</button></Link></li>
    <li><Link to="/floor-plan"><button class="dropdown-item" type="button">Mặt bằng</button></Link></li>
    
    <li><button class="dropdown-item" type="button">Hợp đồng</button></li>
    <li><button class="dropdown-item" type="button">Thông tin tòa nhà</button></li>
    <li><button class="dropdown-item" type="button">Báo cáo</button></li>
    <li><button class="dropdown-item" type="button">Tính năng khác</button></li>
  </ul>

  
</div>
    </div>
</>
  );
};

export default AdminDashboard;