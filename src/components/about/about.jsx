import React from 'react';
import resume from '../../assets/abdullah_resume.pdf'
import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { Container, LinkButton, SectionTitle } from '../../styles/common';

const AboutWrapper = styled.section`
	background-color: #02aab0;
	background-image: linear-gradient(135deg,#02aab0,#00cdac);
	color: ${colors.white};
	height: 100%;
	border-top: 0;
	clip-path: polygon(0 0,100% 0,100% 80%,0 100%);
	padding-bottom: 10%;
	font-size: 1.6rem;
	.info-text{
		font-weight: 300;
		font-size: 1.6rem;
    margin-bottom: 1rem;
	}
	.button-wrapper{
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const About = () => {
	return (
		<AboutWrapper>
			<Container>
				<SectionTitle className='section-title'>About me</SectionTitle>
				<p className='info-text'>
					I am Abdullah Ansari. Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine. I love spending time building side-projects. I can efficiently code and build websites using HTML, CSS, ReactJS, JavaScript, styled components, Scss, LESS, Gulp.js and Bootstrap.
				</p>
				<p className='info-text'>
					I would like to be a part a reputed firm, where I can utilize my skills, knowledge &amp; talent. Visit my GitHub account to check out some of my side projects apart from those listed below.
				</p>
				<div className='button-wrapper'>
					<LinkButton className='linnkButton' href={resume} rel="noopener noreferrer" target="_blank">
						Resume
					</LinkButton>
				</div>
			</Container>
		</AboutWrapper>
	);
}

export default About;