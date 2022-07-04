const resume = require('../../assets/abdullah_resume.pdf');

type AboutProps = {
	message: string;
}

const About = ({ message }: AboutProps) => {
	return (
		<div>
			<p>This is the messge: {message}</p>
			<a href={resume} rel="noopener noreferrer" target="_blank">
				<button>
					PDF
				</button>
			</a>
		</div>
	)
};

export default About;