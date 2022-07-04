import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const Container = styled.div``

const Fade = styled.div``


const Header = () => {
	return (
		<section id="hero" className="jumbotron">
			<Container>
				<Fade>
					<h1 className="hero-title">
						Hi, my name is
						<span className="text-color-main"> Abdullah Ansari</span>
						<br />I am Web Developer
					</h1>
				</Fade>
				<Fade>
					<p className="hero-cta">
						<span className="cta-btn cta-btn--hero">
							{/* <Link to="about" smooth duration={1000}>
                Know more
              </Link> */}
						</span>
					</p>
				</Fade>
			</Container>
		</section>
	);
};

export default Header;
