"use client";

import Link from "next/link";
import Image from "next/image";
import MailchimpForm from "./MailchimpForm";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <Image
              src="/assets/img/logo.png"
              alt="Logo"
              width={150}
              height={50}
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <Link
                href="https://www.linkedin.com/in/ahadahamed/"
                passHref
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/img/nav-icon1.svg"
                    alt="Icon 1"
                    width={30}
                    height={30}
                  />
                </a>
              </Link>
              <Link
                href="https://www.facebook.com/ahad1033"
                passHref
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/img/nav-icon2.svg"
                    alt="Icon 1"
                    width={30}
                    height={30}
                  />
                </a>
              </Link>
              <Link
                href="https://www.instagram.com/ah_a_d__"
                passHref
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/img/nav-icon3.svg"
                    alt="Icon 1"
                    width={30}
                    height={30}
                  />
                </a>
              </Link>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
