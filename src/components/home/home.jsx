import React from 'react';
import styled from 'styled-components';
import { Container, CtaButton } from '../../styles/common'

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
	.text-color-main{
		background-image: linear-gradient(135deg,#02aab0,#00cdac);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`

const Fade = styled.div`
  left: 0px;
	position: relative;
	animation-name: slide;
	animation-duration: 1s;
  transition: all 550ms cubic-bezier(0.02, 0.01, 0.47, 1);
	/* color: ${props =>
		props.side == 'left' ? 'left' :
			props.variant == 'right' ? 'right' :
				''
	}; */
	@keyframes slide {
		from { transform: translateX(-2rem); opacity: 0; }
		to { transform: translateX(0rem); opacity: 1; }
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
					<p className="hero-cta">
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
