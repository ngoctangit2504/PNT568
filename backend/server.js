const app = require('./app');

const PORT = process.env.PORT || 5000;

const MatBang = require('./models/MatBang');

const createInitialMatBang = async () => {
  try {
    const existingMatBang = await MatBang.findOne();
    if (!existingMatBang) {
      const initialMatBang = new MatBang({
        tang: 1,
        hinhAnh: 'https://example.com/mat-bang-1.jpg',
        dienTich: 100,
        trangThai: 'Còn trống',
        congTyThue: '',
        nhanVienQuanLy: 'Nguyễn Văn A',
      });
      await initialMatBang.save();
      console.log('Initial MatBang created');
    }
  } catch (error) {
    console.error('Error creating initial MatBang:', error);
  }
};


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  createInitialMatBang();

});