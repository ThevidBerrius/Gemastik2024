import {Container, Row, Col} from "react-bootstrap"
import {JobsData} from "../data/index"
import { useNavigate } from "react-router-dom"

import Faq from "../components/Faq"

const JobPage = () => {
  let navigate = useNavigate();
  return (
    <div className="job-page">
      <div className="job min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Lihat Kerja</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {JobsData.map((jobs) => {
                return(
                  <Col key={jobs.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={jobs.delay}>
                    <img src={jobs.image} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>
                    <div className="star mb-2 px-3">
                      <i className={jobs.star1}></i>
                      <i className={jobs.star2}></i>
                      <i className={jobs.star3}></i>
                      <i className={jobs.star4}></i>
                      <i className={jobs.star5}></i>
                    </div>
                    <h5 className="mb-5 px-3">{jobs.jobTitle}</h5>
                    <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                      <p className="m-0 text-primary fw-bold">{jobs.price}</p>
                      <button className="btn btn-danger rounded-1" onClick={() => navigate("/detail")}>{jobs.detail}</button>
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

export default JobPage