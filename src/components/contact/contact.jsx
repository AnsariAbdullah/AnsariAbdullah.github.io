import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { Container, LinkButton, SectionTitle } from '../../styles/common';

const ContactWrapper = styled.section`
	background-color: #02aab0;
	background-image: linear-gradient(135deg,#02aab0,#00cdac);
	color: ${colors.white};
	height: 100%;
	clip-path: polygon(0 20%,100% 0,100% 100%,0 100%);
	font-size: 1.6rem;
	padding: 15rem 0 10rem;
	margin-top: -15rem;
	margin-bottom: -1px;
	color: ${colors.white};
	.info-text{
		text-align: center;
		font-size: 2.4rem;
    margin-bottom: 2.5rem;
	}
	.button-wrapper{
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const Contact = () => {
	return (
		<ContactWrapper>
			<Container>
				<SectionTitle className='section-title'>Contact</SectionTitle>
				<p className='info-text'>
					Would you like to work with me? Awesome!
				</p>
				<div className='button-wrapper'>
					<LinkButton
						className='linkButton'
						href="mailto:ansariabdullahar@gmail.com"
						target="_blank"
					>
						Let's Talk
					</ LinkButton>
				</div>
			</Container>
		</ContactWrapper>
	);
}

export default Contact;