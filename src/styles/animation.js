import styled from "styled-components";

const Fade = styled.div`
left: 0px;
position: relative;
animation-name: slide;
animation-duration: 1.5s;
animation-delay: 0.5s;
transition: all 700ms cubic-bezier(0.02, 0.01, 0.47, 1);
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

export {
	Fade
}