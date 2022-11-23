import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { Container } from '../../styles/common';
import { footerData } from '../../mock/data';

const FooterWrapper = styled.div`
	background-color: ${colors.black};
	margin: 0 auto;
	padding: 4.8rem 0;
	color: white;
	.social-links{
		display: flex;
    justify-content: center;
		a {
			flex-direction: column;
			color: #fff;
			font-size: 3rem;
			margin: 1.8rem 2.1rem;
			transition: all .2s ease-in;
			&:hover{
				transform: translateY(-5px);
			}
			img{
				width: 3.3rem;
				height: 3.3rem;
			}
		}
	}
`

const Footer = () => {
	return (
		<FooterWrapper>
			<Container>
				<div className='social-links'>
					{footerData && footerData.map(item => {
						const { id, name, url } = item;
						return (
							<a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
								<img src={require(`../../assets/icons/${name}.svg`)} alt={`${name}-icon`} />
							</a>
						);
					})}
				</div>
			</Container>
		</FooterWrapper>
	);
}

export default Footer;