import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={12} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  I am Abdullah Ansari. Building state-of-the-art, easy to use, user-friendly
                  websites and applications is truly a passion of mine. I love spending time
                  building side-projects. I can efficiently code and build websites using HTML, CSS,
                  React, styled-components, Saas, jQuery, LESS, Gulp.js and Bootstrap.
                </p>
                <p className="about-wrapper__info-text">
                  I would like to be a part a reputed firm, where I can utilize my skills, knowledge
                  &amp; talent. Visit my GitHub account to check out some of my side projects apart
                  from those listed below.
                </p>
                {resume && (
                  <span className="mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
