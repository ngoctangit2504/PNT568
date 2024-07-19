import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from '../context/AuthContext';
import AuthService from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const { isLoggedIn, user, logout } = useContext(AuthContext);
  
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      // Nên bỏ logout đây hay không
      logout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  const handleScrollToGioiThieu = (e) => {
    e.preventDefault();
    const section = document.getElementById('gioithieu');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToLienHe = (e) => {
    e.preventDefault();
    const section = document.getElementById('lienhe');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  return (
    <header>
      <div className="">

      
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
          <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-offices-icon-for-personal-and-commercial-use-png-image_4341941.jpg" alt="Logo" width={70} height={70}/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Trang chủ</a>
              </li>

              <li class="nav-item">
                <a className="nav-link" href="/#gioithieu" onClick={handleScrollToGioiThieu}>Giới thiệu</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Sự kiện</a>
              </li>

              <li class="nav-item">
                <a className="nav-link" href="/#lienhe" onClick={handleScrollToLienHe}>Liên hệ</a>
              </li>

              <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Xem thêm
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">a</a></li>
            <li><a class="dropdown-item" href="#">b</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">c</a></li>
          </ul>
        </li>
            </ul>

            <form>

              {isLoggedIn ? (
              <table>
                <tr>
                  <td>
                    <p>Chào, {user && user.name}</p>
                    <button type="button" class="btn btn-secondary" onClick={handleLogout}>Đăng xuất</button>
                  </td>
                </tr>
              </table>
              ) : (
                <table>
                <tr>
                  <td><Link to="/login"><button class="btn btn-outline-primary">Đăng nhập</button></Link></td>
                  <td><Link to="/register"><button class="btn btn-outline-primary">Đăng kí</button></Link>
                  </td>
                </tr>
              </table>
              )}
              
            </form>

            
          </div>
        </div>
      </nav>

      </div>
    </header>
  );
};

export default Header;