const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Thư mục lưu trữ tạm thời cho file tải lên
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Đặt tên file duy nhất
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true); // Chấp nhận file là ảnh JPEG hoặc PNG
  } else {
    cb(new Error('Chỉ chấp nhận các file ảnh JPEG hoặc PNG'), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;