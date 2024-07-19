import React, { useState, useEffect, useRef } from "react";
import MatBangItem from "../feature/matbang/MatBangItemForm";
import { getAllMatBang } from "../services/matBangService";



import ReactPaginate from "react-paginate";





const Welcome = () => {
  const gioiThieuRef = useRef(null);

  const [matBangs, setMatBangs] = useState([]);



  const [trangHienTai, setTrangHienTai] = useState(0);
  const soFormHienThi = 3;



  useEffect(() => {
    fetchMatBangs();
  }, []);

  const fetchMatBangs = async () => {
    const response = await getAllMatBang();
    setMatBangs(response.data);
  };




  const chuyenTrang = (event) => {
    setTrangHienTai(event.selected);
  };
  

  const daHienThi = trangHienTai * soFormHienThi;
  const cacMucCanHienThi = matBangs.slice(daHienThi, daHienThi + soFormHienThi);
  const soTrangCanCo = Math.ceil(matBangs.length / soFormHienThi);





  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://images2.thanhnien.vn/528068263637045248/2023/5/19/img-3617-1684482177462323021840.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Tòa nhà cho thuê làm văn phòng 568
            </h1>
            <p className="lead">
              Tọa lạc tại vị trí đắc địa ngay trung tâm thành phố, tòa nhà văn
              phòng 568 là một trong những lựa chọn hàng đầu dành cho các doanh
              nghiệp lớn nhỏ. Với thiết kế hiện đại, sang trọng và tiện nghi đầy
              đủ, tòa nhà 568 mang đến không gian làm việc chuyên nghiệp, thân
              thiện và hiệu quả cho nhân viên của bạn.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                Chi tiết
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="container py-4">
          <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
              <h1 id="gioithieu" ref={gioiThieuRef} className="display-5 fw-bold">
                Giới thiệu
              </h1>
              <p className="col-md-8 fs-4">
                Trụ sở tại vị trí đắc địa ngay trung tâm thành phố, tòa nhà văn
                phòng 568 là một trong những lựa chọn hàng đầu dành cho các doanh
                nghiệp lớn nhỏ. Được thiết kế theo phong cách hiện đại, sang
                trọng, tòa nhà 568 sở hữu không gian làm việc rộng rãi, thoáng đãng
                với tầm nhìn tuyệt đẹp ra phố xá nhộn nhịp và các tòa nhà cao tầng
                lân cận.
              </p>
              <button className="btn btn-primary btn-lg" type="button">
                Tòa nhà
              </button>
            </div>
          </div>

          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className="h-100 p-5 text-bg-dark rounded-3">
                <h2>Mặt bằng</h2>
                <p>Giới thiệu về các mặt bằng</p>
                <button className="btn btn-outline-light" type="button">
                  Mặt bằng
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                <h2>Dịch vụ</h2>
                <p>Giới thiệu về các dịch vụ</p>
                <button className="btn btn-outline-secondary" type="button">
                  Dịch vụ
                </button>
              </div>
            </div>
          </div>
          <br />

          <div className="row">
            {cacMucCanHienThi.map((matBang) => (   //, index
              <MatBangItem key={matBang._id} matBang={matBang} />  //stt={daHienThi + index + 1}
            ))}
          </div>

          <ReactPaginate
            previousLabel={"Trước"}
            nextLabel={"Tiếp theo"}
            pageCount={soTrangCanCo}
            onPageChange={chuyenTrang}
            
          />

        </div>
      </main>
    </>
  );
};

export default Welcome;