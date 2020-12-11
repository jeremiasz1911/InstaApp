import './../App.css';
import MainNavbar from '../components/MainNavbar';
import MainCarousel from '../components/MainCarousel';
import MainJumbotron from '../components/MainJumbotron';
import MainCard from '../components/MainCard';
import { Container, Row, Col } from 'reactstrap';
import offer1 from './../images/offer1.png'
import offer2 from './../images/offer2.png'
import offer3 from './../images/offer3.png'




function Offert() {
  return <>
  <MainNavbar />
  <MainCarousel/>
  <Container className="padding-3">
    <Row>
      <Col md="12">
        <h1 className="display-3">Zarejestruj swoją szkołę</h1>
        <hr/>
      </Col>
    </Row>
  </Container>
  <Container>
    <Row>

      <Col md="4">
      <MainCard
        imgpath={offer1}
        imgalt="image"
        title="Oferta Basic"
        subtitle="Standardowa oferta"
        text="It uses utility classes for typography and spacing to space content out within the larger container."
        button="Zakup ofertę za darmo"
      />
      </Col>

      <Col md="4">
      <MainCard
        imgpath={offer2}
        imgalt="image"
        title="Oferta Medium"
        subtitle="Oferta Rozszerzona"
        text="It uses utility classes for typography and spacing to space content out within the larger container."
        button="Zakup ofertę za 50$"
      />
      </Col>

      <Col md="4">
      <MainCard
        imgpath={offer3}
        imgalt="image"
        title="Oferta Pro"
        subtitle="Oferta Pro Limited"
        text="It uses utility classes for typography and spacing to space content out within the larger container."
        button="Zakup ofertę za 100$"
      />
      </Col>

    </Row>
    <Row>
      <p className="lead padding-3">
       Offerts uses utility classes for typography and spacing to space content out within the larger container.
       for typography and spacing to space content out within the larger container.
       uses utility classes for typography and spacing to space content out within the larger container.
       utility classes for typography and spacing to space content out within the larger container.
      </p>
    </Row>
  </Container>
  </>;
}

export default Offert;
