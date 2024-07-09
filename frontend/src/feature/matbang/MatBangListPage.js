import React, { useState, useEffect } from "react";
import { getAllMatBang, deleteMatBang } from "../../services/matBangService";
import MatBangItem from "../../feature/matbang/MatBangItem";
import { Link } from "react-router-dom";

const MatBangListPage = () => {
  const [matBangs, setMatBangs] = useState([]);

  useEffect(() => {
    fetchMatBangs();
  }, []);

  const fetchMatBangs = async () => {
    const response = await getAllMatBang();
    setMatBangs(response.data);
  };

  const handleDelete = async (id) => {
    await deleteMatBang(id);
    fetchMatBangs();
  };

  return (
    <div>
      <h1 className="text-center">Danh sách mặt bằng</h1>
      <table>
        <tr>
          <td><Link to="/admin"><button type="button" className="btn btn-primary">Trang chủ ADMIN</button></Link></td>
          <td><Link to="/them-mat-bang"><button type="button" className="btn btn-primary">Thêm mới mặt bằng</button></Link></td>
        </tr>
      </table>

      <table className="table">
        <thead>
          <tr>
            <th>Stt</th>
            <th>Mã mặt bằng</th>
            <th>Tầng</th>
            <th>Hình ảnh</th>
            <th>Diện tích</th>
            <th>Trạng thái</th>
            <th>Công ty thuê</th>
            <th>Nhân viên quản lý</th>
            <th>Tác vụ</th>
          </tr>
        </thead>
        <tbody>
          {matBangs.map((matBang, index) => (
            <MatBangItem
              key={matBang._id}
              matBang={matBang}
              onDelete={handleDelete}
              stt={index + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatBangListPage;