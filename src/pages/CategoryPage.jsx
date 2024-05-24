import {Container, Row, Col} from "react-bootstrap"
import {categoryData} from "../data/index"
import { useNavigate } from "react-router-dom"
import Faq from "../components/Faq"

const CategoryPage = () => {
  let navigate = useNavigate();
  return (
    <div className="category-page">
      <div className="category min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Category Kerja</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {categoryData.map((jobCat) => {
                return(
                  <Col key={jobCat.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={jobCat.delay}>
                    <img src={jobCat.image} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>

                    <h5 className="mb-5 px-3">{jobCat.category}</h5>
                    <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                      <button className="btn btn-danger rounded-1" onClick={ () => navigate("/jobs")}>{jobCat.buy}</button>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
      <Faq/>
    </div>
  )
}

export default CategoryPage