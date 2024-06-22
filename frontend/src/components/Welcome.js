import React from "react";

const Welcome = () => {
  return <>
  <body> 

  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://images2.thanhnien.vn/528068263637045248/2023/5/19/img-3617-1684482177462323021840.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Tòa nhà cho thuê làm văn phòng 568</h1>
        <p class="lead">
        Tọa lạc tại vị trí đắc địa ngay trung tâm thành phố, 
        tòa nhà văn phòng 568 là một trong những lựa chọn hàng đầu dành cho các doanh nghiệp lớn nhỏ. 
        Với thiết kế hiện đại, sang trọng và tiện nghi đầy đủ, tòa nhà 568 mang đến không gian làm việc chuyên nghiệp, 
        thân thiện và hiệu quả cho nhân viên của bạn.
              </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Chi tiết</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
    </div>
  </div>


<main>
  <div class="container py-4">
    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Custom jumbotron</h1>
        <p class="col-md-8 fs-4">
        Trụ sở tại vị trí đắc địa ngay trung tâm thành phố, tòa nhà văn phòng 568 là một trong 
        những lựa chọn hàng đầu dành cho các doanh nghiệp lớn nhỏ. Được thiết kế theo phong 
        cách hiện đại, sang trọng, tòa nhà 568 sở hữu không gian làm việc rộng rãi, thoáng đãng 
        với tầm nhìn tuyệt đẹp ra phố xá nhộn nhịp và các tòa nhà cao tầng lân cận.
        </p>
        <button class="btn btn-primary btn-lg" type="button">Tòa nhà</button>
      </div>
    </div>

    <div class="row align-items-md-stretch">

      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>Mặt bằng</h2>
          <p>
            Giới thiệu về các mặt bằng
          </p>
          <button class="btn btn-outline-light" type="button">Mặt bằng</button>
        </div>
      </div>


      <div class="col-md-6">
        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Dịch vụ</h2>
          <p>
            Giới thiệu về các dịch vụ
          </p>
          <button class="btn btn-outline-secondary" type="button">Dịch vụ</button>
        </div>
      </div>

    </div>
  </div>
</main>


<script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    

</body>
  </>;
};

export default Welcome;
