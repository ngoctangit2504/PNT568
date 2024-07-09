import React from 'react';

const MatBangItem = ({ matBang, onDelete, stt }) => {
  const handleDelete = () => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa mặt bằng ${matBang.maMatBang} không?`)) {
      onDelete(matBang._id);
    }
  };

  return (
    <tr>
      <td>{stt}</td>
      <td>{matBang.maMatBang}</td>
      <td>{matBang.tang}</td>
      <td><img src={matBang.hinhAnh} alt="Mặt bằng" style={{ width: '100px', height: '100px' }} /></td>
      <td>{matBang.dienTich}</td>
      <td>{matBang.trangThai}</td>
      <td>{matBang.congTyThue || 'chưa có'}</td>
      <td>{matBang.nhanVienQuanLy}</td>
      <td>
        <button className="btn btn-danger" onClick={handleDelete}>Xóa</button>
      </td>
    </tr>
  );
};

export default MatBangItem;