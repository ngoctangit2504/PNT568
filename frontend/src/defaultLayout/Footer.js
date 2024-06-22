import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          
          <a href='' className='me-4 text-reset'>
            Hello ...  
          </a>
          <a href='' className='me-4 text-reset'>
            a ...
          </a>
          <a href='' className='me-4 text-reset'>
            b...
          </a>
          <a href='' className='me-4 text-reset'>
            c...
          </a>
          <a href='' className='me-4 text-reset'>
            
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                CÔNG TY 568 
              </h6>
              <p>
                Hệ thống quản lí tòa nhà 568 cho thuê mặt bằng làm văn phòng trên thành phố Đà Nẵng.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Công nghệ</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Node JS
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  MongoDB
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>TIỆN ÍCH</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Giá cả
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Thiết lập
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Đăng kí
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Hỗ trợ
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>LIÊN HỆ</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Đà Nẵng, ĐN 10062024, Việt Nam
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;