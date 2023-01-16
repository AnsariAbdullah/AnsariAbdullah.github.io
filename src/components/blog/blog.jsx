import styled from "styled-components";
import { colors } from '../../styles/variables';
import { Container, SectionTitle } from "../../styles/common";

const BlogWrapper = styled.section`
	position: relative;
	.blog-banner{
		background-image: linear-gradient(135deg, #02aab0, #00cdac);
		height: 350px;
		color: ${colors.white};
		text-align: center;
		font-size: 25px;
		.section-title{
			padding-top: 5rem;
		}
	}
	.grid-box{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 30px;
		position: relative;
    top: -200px;
	}
`
const Card = styled.div`
	min-height: 280px;
	border-radius: 8px;
	background-color: ${colors.white};;
	border: 0.5px solid rgb(214, 214, 214);
	box-shadow: 0px 5px 5px 0px rgba(214, 214, 214, 1);
	display: flex;
	font-size: 2rem;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	a{
		background: #ebf5ff;
    color: #078ae6;
		text-decoration: none;
		margin-top: 10px;
    padding: 10px 30px;
    font-size: 14px;
	}
`


const Blog = () => {
	return (
		<BlogWrapper className="blog-wrapper">
			<div className="blog-banner">
				<SectionTitle className="section-title">Blogs</SectionTitle>
			</div>
			<Container className="grid-box">
				{Array.from(new Array(4)).map((item, i) =>
					<Card className="class" key={`blog-card-${i}`}>
						<h3>Using objects as key/value storage</h3>
						<p>
						A journey of transitioning from JavaScript to TypeScript to learning testing library and becoming the star performing team member.
						</p>
						<a href="google.com" alt="google">
							Read
						</a>
					</Card>
				)}

			</Container>
			<button>
				Read all 
				<svg data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/></svg>
			</button>
		</BlogWrapper>
	);
}

export default Blog;