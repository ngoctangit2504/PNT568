import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/authService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.register(form.name, form.email, form.password);
      notify('result');
      navigate("/"); // Điều hướng về trang Welcome sau khi đăng ký thành công
    } catch (error) {
      notify()
    }
  };

  const notify = (success,) => {
    if (success) {
      toast.success("Đăng kí người dùng thành công");
    } else {
      toast.warning("Đăng kí thất bại");
    }
};

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-4">


      <form onSubmit={handleSubmit}>
        <h3>Đăng kí người dùng</h3>
      <div class="mb-3">
    <label for="name" class="form-label">Tên</label>
    <input type="text" class="form-control" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Pham Thi E"/>
    
  </div>

      <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" name="email" value={form.email} onChange={handleChange} placeholder="Email"/>
   
  </div>

  <div class="mb-3">
    <label for="password" class="form-label">Mật khẩu</label>
    <input type="password" class="form-control" id="password" name="password" value={form.password} onChange={handleChange} placeholder="Password"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Ghi nhớ</label>
  </div>
  <button type="submit" class="btn btn-primary">Đăng kí</button>
      </form>

        </div>
      </div>
    </div>
  );
};

export default Register;
