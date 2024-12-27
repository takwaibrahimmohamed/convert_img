import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import "../header/header.css";
import logo from "../../assets/images/01 - logotipo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ReactFlagsSelect from "react-flags-select";
import enLang from "../../assets/images/amercan.png";
import { useEffect, useState } from "react";
const Header = () => {
  const { t, i18n } = useTranslation();
  const enTranc = (lang) => {
    console.log(lang);
    i18n.changeLanguage(lang);
  };
  const [select, setSelect] = useState("BR");
  const onSelect = (code) => {
    setSelect(code);
    enTranc(code);
  };
  //
  const [targetOffset, setTargetOffset] = useState(0);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    setTargetOffset(targetElement.offsetTop - 80);
  };

  useEffect(() => {
    window.scrollTo({ top: targetOffset, behavior: "smooth" });
  }, [targetOffset]);

  //

  return (
    <div>
      <Navbar expand="lg" className="navbar fixed-top" bg="transparent">
        <Container style={{ width: "80%" }}>
          <Navbar.Brand href="#" className="brand">
            <img
              className="mainLogo"
              src={logo}
              alt="logo"
              style={{ width: "70%", height: "70%" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="justify-content-end">
            <Nav className="ml-auto nav_head">
              {/* <AnchorLink
                className="links px-4 py-2 link_cont"
                href="#about"
                onClick={(e) => handleClick(e, "#about")}
              >
                {t("Home")}
              </AnchorLink> */}
              {/* <AnchorLink
                className="links px-4 py-2 link_cont"
                href="#Clients"
                onClick={(e) => handleClick(e, "#Clients")}
              >
                {t("Clients")}
              </AnchorLink> */}
              {/* <AnchorLink
                className="links px-4 py-2 link_cont"
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
              >
                {t("Contato")}
              </AnchorLink> */}
              <Nav.Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 py-0 mx-1 px-1 phone"
                style={{ width: "fit-content" }}
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ color: "#9FAD02" }}
                />{" "}
                {t("phoneNumberFormated")}
              </Nav.Link>
              <Nav.Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                // className="links px-4 py-3 link_cont align-items-end"
                className="px-lg-4  align-items-end px-sm-0"
              >
                <FontAwesomeIcon icon={faVideo} style={{ color: "#9FAD02" }} />{" "}
                {t("LiveDemo")}
              </Nav.Link>
            </Nav>
            <Nav className="px-sm-0 px-lg-4 align-items-end">
              <ReactFlagsSelect
                selected={select}
                onSelect={onSelect}
                countries={["BR", "US", "ES"]}
                showOptionLabel={false}
                showSelectedLabel={false}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
