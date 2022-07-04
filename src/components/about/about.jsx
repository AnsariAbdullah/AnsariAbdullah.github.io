import React from 'react';
import resume from '../../assets/abdullah_resume.pdf'

const About = () => {
	return (
		<div>
			<p>This is the messge:</p>
			<a href={resume} rel="noopener noreferrer" target="_blank">
				<button>
					PDF
				</button>
			</a>
		</div>
	);
}

export default About;