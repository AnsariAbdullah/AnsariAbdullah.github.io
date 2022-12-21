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
	background-image: linear-gradient(135deg,#02aab0,#00cdac);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	border-width: 2px;
	border-style: solid;
	-o-border-image: linear-gradient(135deg,#02aab0,#00cdac);
	border-image: linear-gradient(135deg,#02aab0,#00cdac);
	border-image-slice: 1;
	cursor: pointer;
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
	transition: all .6s cubic-bezier(.19,1,.22,1);
`

export { Container, CtaButton, LinkButton, SectionTitle };
