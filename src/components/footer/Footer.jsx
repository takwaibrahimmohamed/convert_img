import React from "react";
import "./footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import footer_log from "../../assets/images/78 logo rodapé.png";
import insta from "../../assets/images/79 icone instagram.png";
import faceboc from "../../assets/images/80 icone facebook.png";
import twitter from "../../assets/images/81 icone twitter.png";
import whatsap from "../../assets/images/82 icone whatsapp.png";
import qrcode from "../../assets/images/83 qr code.png";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="footer" style={{ overflowX: "hidden" }}>
      <Container style={{ width: "80%" }} className="pt-5">
        <Row className="f-end">
          <Col xs="12" md="5">
            <img
              src={footer_log}
              alt="footer_log"
              style={{ marginBottom: "30px" }}
            />
            {/* <p>{t("foter")}</p> */}
            <p>{t("foterAdd")}</p>
            <p>{t("FooterEmail")}</p>
          </Col>
          <Col xs="12" md="7" className="text-xs-start text-md-end">
            <div className="imges" style={{ marginBottom: "30px" }}>
              <a
                href="https://instagram.com/fluxmon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="insta" style={{ margin: "0 10px" }} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61565222842436"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={faceboc} alt="faceb" style={{ margin: "0 10px" }} />
              </a>
              {/* <img src={twitter} alt="twiter" style={{margin:"0 10px"}}/> */}
            </div>
            <p className="foter_text_num">{t("footerNum")}</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="foter_num">
                <img src={whatsap} alt="whatsap" />{t("phoneNumberFormated")}
              </h4>
            </a>
            {/* <img src={qrcode} alt="qrcode" style={{marginTop:"30px"}}/> */}
          </Col>
        </Row>
        <Row>
          <p className="reserv">{t("footer_reserv")}</p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
