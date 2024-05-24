import {Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">THEKERJA.COM</h3>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum temporibus recusandae at voluptatibus. Atque libero numquam dolore accusantium necessitatibus.</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 123-4567-8910</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">thekerja@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="category">Category</Link>
            <Link to="jobs">Jobs</Link>
            <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-3">Our Social Media</h5>
          <div className="social mt-3">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">THEKERJA.COM Company</span>, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer