import React from "react";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import cart_1 from "../../assets/images/74 icone whatsapp.png";
import cart_2 from "../../assets/images/75 icone telefone.png";
import cart_3 from "../../assets/images/76 icone email.png";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./contact.css";
const ContactCart = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="contact" id="contact">
      <Container className="py-5">
        <p className="contact_title" style={{ textAlign: "center" }}>{t("contactTitle")} <span>{t("contactTitle_2")}</span></p>
        <Row
          xs={1}
          md={2}
          className="g-5"
          style={{ width: "50%", margin: "0 auto" }}
        >
          <Col>
            <Card className="Contact_cartst">
              <img src={cart_1} alt="cart_1" className="cart_1Img" />
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: "5px",
                }}
              >
                <Card.Title
                  style={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: "1.3rem",
                  }}
                >
                  {t("whatsab")}
                </Card.Title>
                <Card.Text
                  style={{ lineHeight: "1", color: "rgb(108, 107, 107)" }}
                >
                  {t("whatsabText")}
                </Card.Text>
                <Nav.Link
                  href={`https://wa.me/${t("phoneNumber")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 py-0 mx-1 px-1 phone"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    style={{ color: "#9FAD02" }}
                  />{" "}
                  {t("phoneNumberFormated")}
                </Nav.Link>
              </Card.Body>

              {/* <Button style={{background:"#fc7f11",border:"none",width:"fit-content",margin:"0 auto",marginBottom:"20px"}}>{t("whatsabBtn")}</Button> */}
            </Card>
          </Col>
          {/* <Col>
            <Card className='Contact_cartst'>
            <img src={cart_2} alt="cart_2"  className='cart_1Img'/>
            <Card.Body style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",gap:"5px"}}>
                <Card.Title style={{color:"white",fontFamily:"Poppins",fontWeight:500,fontSize:"1.3rem"}}>{t("call")}</Card.Title>
                <Card.Text style={{lineHeight:"1",color:"rgb(108, 107, 107)"}}>
                {t("callText")}
                </Card.Text>
            </Card.Body>
            <Card.Text style={{lineHeight:"1",color:"rgb(108, 107, 107)",
                    border:"2px solid rgb(108, 107, 107)",width:"90%",borderRadius:"5px"
                    ,margin:"0 auto",marginBottom:"20px",padding:"5px 0px"
                    }}>
                {t("callnum")}
                </Card.Text>
            <Button style={{background:"#fc7f11",border:"none",width:"fit-content",margin:"0 auto",marginBottom:"20px"}}>{t("callbtn")}</Button>
            
            </Card>
        </Col> */}
          <Col>
            <Card className="Contact_cartst">
              <img src={cart_3} alt="cart_3" className="cart_1Img" />
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: "5px",
                }}
              >
                <Card.Title
                  style={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: "1.3rem",
                  }}
                >
                  {t("email")}
                </Card.Title>
                <Card.Text
                  style={{ lineHeight: "1", color: "rgb(108, 107, 107)" }}
                >
                  {t("emailText")}
                </Card.Text>

                <Card.Text
                  style={{
                    lineHeight: "1",
                    color: "rgb(108, 107, 107)",
                    border: "2px solid rgb(108, 107, 107)",
                    width: "90%",
                    borderRadius: "5px",
                    margin: "0 auto",
                    padding: "5px 0px",
                  }}
                >
                  {t("emailnum")}
                </Card.Text>
              </Card.Body>
              <Button
                style={{
                  background: "#fc7f11",
                  border: "none",
                  width: "fit-content",
                  margin: "0 auto",
                  marginBottom: "20px",
                }}
              >
                {t("emailbtn")}
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactCart;
