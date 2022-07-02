import React from 'react';
import './blog.scss';

const Blog = ({ data }) => {
	return (
		<div className='container'>
			<h2 className='section-title'>Blogs</h2>
			<div className='blogs-wrapper'>
				{data && data.map(({ id, title, link }) =>
					<div
						key={id}
						className='card'
						onClick={() => window.open(link, "_blank")}
					>
						<div className='image'>
						</div>
						<div className='info'>
							<p className='title'>{title}</p>
						</div>
					</div>
				)}
			</div>
			<a className='cta-btn cta-btn--hero' href='https://hashnode.com/@ansariabdul' target="_blank"> See more </a>
		</div>
	);
}

export default Blog;