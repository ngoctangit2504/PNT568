import React, { useState } from 'react';
import { createMatBang } from '../../services/matBangService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddMatBangPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    maMatBang:'',
    tang: '',
    hinhAnh: '',
    dienTich: '',
    trangThai: 'Còn trống',
    congTyThue: '',
    nhanVienQuanLy: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMatBang(formData);
      navigate('/matbang');
    } catch (error) {
      console.error('Error creating mat bang:', error);
    }
  };

  return (
    <div>
      <h1>Thêm mặt bằng mới</h1>
      <form onSubmit={handleSubmit}>
        <table class="table container">

        <tr>
            <th>Mã mặt bằng</th>
            <td>
            <input name="maMatBang" value={formData.maMatBang} onChange={handleChange} placeholder="Mã mặt bằng" class="form-control" required />
            </td>
          </tr>

          <tr>
            <th>Tầng</th>
            <td>
            <input name="tang" value={formData.tang} onChange={handleChange} placeholder="Tầng" class="form-control" required />
            </td>
          </tr>

          <tr>
            <th>Url hình ảnh</th>
            <td>
            <input name="hinhAnh" value={formData.hinhAnh} onChange={handleChange} placeholder="URL hình ảnh" class="form-control" required />
            </td>
          </tr>

          <tr>
            <th>Diện tích</th>
            <td>
            <input name="dienTich" value={formData.dienTich} onChange={handleChange} placeholder="Diện tích" class="form-control" required />
            </td>
          </tr>

          <tr>
            <th>Trạng thái</th>
            <td>
            <select name="trangThai" value={formData.trangThai} onChange={handleChange} required>
          <option value="Còn trống">Còn trống</option>
          <option value="Đang sửa chữa">Đang sửa chữa</option>
          <option value="Đã sử dụng">Đã sử dụng</option>
        </select>
            </td>
          </tr>

          <tr>
            <th>Công ty thuê</th>
            <td>
            <input name="congTyThue" value={formData.congTyThue} onChange={handleChange} placeholder="Công ty thuê" class="form-control" />
            </td>
          </tr>

          <tr>
            <th>Nhân viên quản lý</th>
            <td>
            <input name="nhanVienQuanLy" value={formData.nhanVienQuanLy} onChange={handleChange} placeholder="Nhân viên quản lý" class="form-control" required />
            </td>
          </tr>

          <tr>
            <th>...</th>
            <td>
              <table>
                <tr>
                  <td><button type="submit" class="btn btn-primary">Thêm mới</button></td>
                  <td><Link to="/matbang"><button type='button'>Hủy</button></Link></td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </form>
    </div>
  );
};

export default AddMatBangPage;