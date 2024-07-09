import React, { useState, useEffect } from 'react';
import { getAllMatBang, deleteMatBang } from '../../services/matBangService';
import MatBangItem from '../../feature/matbang/MatBangItem';
import { Link } from 'react-router-dom';

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
      <h1>Danh sách mặt bằng</h1>
      <table>
        <tr>
          <td><Link to="/admin"><button type="button" class="btn btn-primary">Trang chủ ADMIN</button></Link></td>
          <td><Link to="/them-mat-bang"><button type="button" class="btn btn-primary">Thêm mới mặt bằng</button></Link></td>
        <tr>

          </tr>
        </tr>
      </table>

      {matBangs.map((matBang, index) => (
        <MatBangItem key={matBang._id} matBang={matBang} onDelete={handleDelete} stt={index+1}/>
      ))}
    </div>
  );
};

export default MatBangListPage;