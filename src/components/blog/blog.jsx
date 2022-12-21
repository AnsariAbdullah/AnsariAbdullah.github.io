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
						This is blog card
					</Card>
				)}
			</Container>
		</BlogWrapper>
	);
}

export default Blog;