const mongoose = require('mongoose');

const matBangSchema = new mongoose.Schema({
  maMatBang: {type: String, required: true},
  tang: { type: Number, required: true },
  hinhAnh: { type: String, required: true },
  dienTich: { type: Number, required: true },
  trangThai: { 
    type: String, 
    enum: ['Còn trống', 'Đang sửa chữa', 'Đã sử dụng'],
    required: true 
  },
  congTyThue: { type: String },
  nhanVienQuanLy: { type: String, required: true },
});

module.exports = mongoose.model('MatBang', matBangSchema);