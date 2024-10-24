import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Ani Bakery</h3>
            <p className="desc">
              Ani Bakery merupakan perusahaan yang telah berdiri sejak tahun
              2000 awal dan memiliki banyak pengalaman untuk membuat kue
            </p>
            <div className="no">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+6283839227739</p>
              </Link>
            </div>

            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">anibakery@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="kelas">Menu</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">Faq</Link>
            <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info menarik</h5>
            <div className="subscribe">
              <input type="text" placeholder="Subscribe" />
              <button className="btn btn-danger rounded-end rounded-0">
                {" "}
                Subsribe{" "}
              </button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="px-md-0 px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Krisna Kukuh Wijaya</span>, All Right
              Reserved
            </p>
          </Col>
        </Row>
      </container>
    </div>
  );
};

export default FooterComponent;
