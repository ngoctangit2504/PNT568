import React from 'react';

const MatBangItem = ({ matBang, onDelete ,stt}) => {
  const handleDelete = () => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa mặt bằng ${matBang.maMatBang} không?`)) {
      onDelete(matBang._id);
    }
  };

  return (
    <div>
      <table class="table table-hover">
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
          {/* <button class="btn btn-warning" onClick={handleDelete}>Cập Nhật</button> */}
          <button class="btn btn-danger" onClick={handleDelete}>Xóa</button>
          </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default MatBangItem;