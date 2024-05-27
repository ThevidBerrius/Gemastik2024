import {Container, Row, Col} from "react-bootstrap"
import Faq from "../components/Faq"

const SyaratKetenPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">Syarat & Ketentuan</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Perhatikan syarat dan ketentuan berikut.</p>
            </Col>
          </Row>
          <Row>
            <Col className="pt-1">
              <p></p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">1. Usia</h4>
              <p>Biasanya, pelamar harus berusia minimal 18 tahun.</p>
              <p>Beberapa posisi mungkin memiliki batasan usia maksimal, misalnya 35 atau 40 tahun.</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">2. Pendidikan</h4>
              <p>Tingkat pendidikan yang diminta tergantung pada posisi pekerjaan. Biasanya minimal adalah lulusan SMA/SMK.</p>
              <p>Untuk posisi tertentu, mungkin diperlukan gelar sarjana (S1) atau bahkan pascasarjana (S2).</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">3. Pengalaman Kerja</h4>
              <p>Banyak perusahaan yang mensyaratkan pengalaman kerja di bidang yang relevan, misalnya 1-3 tahun untuk posisi junior dan 5-10 tahun untuk posisi senior.</p>
              <p>Beberapa posisi entry-level mungkin tidak memerlukan pengalaman kerja sebelumnya.</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">4. Keterampilan Teknis</h4>
                <p>Keterampilan khusus yang relevan dengan pekerjaan, seperti keahlian dalam menggunakan software tertentu, kemampuan bahasa asing, atau sertifikasi profesional.</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">5. Kesehatan</h4>
                <p>Beberapa perusahaan mengharuskan pelamar menjalani pemeriksaan kesehatan.</p>
                <p>Kesehatan yang baik biasanya diperlukan untuk pekerjaan yang memerlukan aktivitas fisik atau bekerja di lingkungan tertentu.</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">6. Dokumen-Dokumen Pendukung</h4>
                <p>Curriculum Vitae (CV) atau Resume.</p>
                <p>Surat Lamaran Kerja.</p>
                <p>Fotokopi ijazah dan transkrip nilai.</p>
                <p>Fotokopi KTP (Kartu Tanda Penduduk).</p>
                <p>Pas foto terbaru.</p>
                <p>Sertifikat atau dokumen lain yang relevan.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Faq/>
    </div>
  )
}

export default SyaratKetenPage