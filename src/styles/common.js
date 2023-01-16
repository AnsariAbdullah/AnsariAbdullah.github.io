import styled from 'styled-components';
import { colors } from './variables';

const Container = styled.div`
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	@media (min-width: 1200px){
		max-width: 1140px;
	}
	@media (max-width: 992px){
		max-width: 960px;
	}
	@media (max-width: 768px){
		max-width: 720px;
	}
	@media (max-width: 576px){
    max-width: 540px;
	}
`;

const CtaButton = styled.button`
	/* background-image: linear-gradient(135deg,#02aab0,#00cdac);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	border-width: 2px;
	border-style: solid;
	-o-border-image: linear-gradient(135deg,#02aab0,#00cdac);
	border-image: linear-gradient(135deg,#02aab0,#00cdac);
	border-image-slice: 1;
	cursor: pointer; */
	background-image: linear-gradient(135deg,#02aab0,#00cdac);
	color: #fff;
	border: none;
	padding: 0.8rem 1.6rem;
	font-weight: 700;
	z-index: 1;
	font-size: 2.4rem;
	font-family: Montserrat, sans-serif;
	margin-top: 10px;
	transition: box-shadow 200ms ease, transform 200ms ease;
	&:hover{
		transform: translate(4px, -4px);
		box-shadow: -8px 8px 0 #272341;
	}
`

const SectionTitle = styled.h2`
	text-align: center;
	margin: 0 0 4.5rem;
	font-size: 4rem;
	font-weight: 700;
	text-transform: uppercase;
`

const LinkButton = styled.a`
	font-size: 1.6rem;
	color: ${colors.white};
	text-decoration: none;
	margin-top: 1rem;
	border: 2px solid ${colors.white};
	display: inline-block;
	position: relative;
	padding: 0.8rem 1.6rem;
	font-weight: 700;
	line-height: 1;
	z-index: 1;
	transition: all 300ms ease;
	&:hover{
		transform: translate(0, -2px);
		padding: 0.8rem 2.5rem;
		background-color: ${colors.white};
		color: #02aab0;
	}
`

export { Container, CtaButton, LinkButton, SectionTitle };
