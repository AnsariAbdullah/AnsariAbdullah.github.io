import React from 'react';

type AboutProps = {
	message: string;
}

const About = ({ message }: AboutProps) => {
	return (
		<div>This is the messge: {message}</div>
	)
};

export default About;