import React from 'react';
import styled from 'styled-components';
import { Fade } from '../../styles/animation';
import { Container, CtaButton } from '../../styles/common';

const HeaderWrapper = styled.section`
	min-height: 100vh;
	height: 100vh;
	display: flex;
	align-items: center;
	border-bottom: 0;
	background: #fff;
	font-weight: 400;
	color: #272341;
	padding: 0 5.6rem;
	margin-bottom: 0;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;
	font-size: 40px;
	h1{
		font-size: 4rem;
		.text-color-main{
			font-size: 4rem;
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-image: linear-gradient(135deg,#02aab0,#00cdac);
		}
	}
`



const Header = () => {
	return (
		<HeaderWrapper id="hero" className="jumbotron">
			<Container>
				<Fade>
					<h1 className="hero-title">
						Hi, my name is
						<span className="text-color-main"> Abdullah Ansari</span>
						<br />I am Web Developer
					</h1>
				</Fade>
				<Fade>
					<p className="hero-cta" style={{display: 'flex'}}>
						<CtaButton className="cta-btn cta-btn--hero">
							{/* <Link to="about" smooth duration={1000}>
              </Link> */}
							Know more
						</CtaButton>
					</p>
				</Fade>
			</Container>
		</HeaderWrapper>
	);
};

export default Header;
