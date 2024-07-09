import React from "react";

const MatBangItem = ({ matBang, stt }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body">
          {/* <p><strong>Stt:</strong> {stt}</p> */}
          <p><strong>Mã mặt bằng:</strong> {matBang.maMatBang}</p>
          <p><strong>Tầng:</strong> {matBang.tang}</p>
          <p><strong>Hình ảnh:</strong></p>
          <img src={matBang.hinhAnh} alt="mat bang" className="img-fluid mb-3" />
          <p><strong>Diện tích:</strong> {matBang.dienTich}</p>
          <p><strong>Trạng thái:</strong> {matBang.trangThai}</p>
          <p><strong>Công ty thuê:</strong> {matBang.congTyThue}</p>
          {/* <p><strong>Nhân viên quản lý:</strong> {matBang.nhanVienQuanLy}</p> */}
        </div>
      </div>
    </div>
  );
};

export default MatBangItem;