import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/authService";
import { AuthContext} from '../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(form.email, form.password);
      if (response && response.user) {
        localStorage.setItem("user", JSON.stringify(response));
      login();
      navigate(response.user.isAdmin ? "/admin" : "/user");
      } else {
        alert ("Đăng nhập không hợp lệ")
      }
       
    } catch (error) {
      notify()
    }
  };

  const notify = (success,) => {
    if (success) {
      toast.success("Oke!");
    } else {
      toast.warning("Đăng nhập thất bại");
    }
};

  return (
   
<div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-4">

    <form onSubmit={handleSubmit}>
      <h3>Đăng nhập</h3>
  <div class="mb-3">
    <label for="" class="form-label">Email</label>
    <input type="email" class="form-control" id="" name="email" value={form.email} onChange={handleChange} placeholder="Email"/>
    
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Mật khẩu</label>
    <input type="password" class="form-control" id="" name="password" value={form.password} onChange={handleChange} placeholder="Password"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Ghi nhớ</label>
  </div>
  <button type="submit" class="btn btn-primary">Đăng nhập</button>
</form>

</div>
      </div>
    </div>
  );
};

export default Login;
