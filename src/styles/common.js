import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
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
	border-image: linear-gradient(135deg,#02aab0,#00cdac);
	-o-border-image: linear-gradient(135deg,#02aab0,#00cdac);
	border-image-slice: 1;
	cursor: pointer;
	display: inline-block;
	position: relative;
	padding: 0.8rem 1.6rem;
	font-weight: 700;
	line-height: 1;
	z-index: 1;
	transition: all .6s cubic-bezier(.19,1,.22,1);
	&:hover {
    -webkit-text-fill-color: #fff;
    text-decoration: none;
	}
	&::after{
		background-image: linear-gradient(135deg,#02aab0,#00cdac);
		content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: all .3s cubic-bezier(.19,1,.22,1);
		&:hover{
			width: 100%;
		}
	}
`

export { Container, CtaButton };
