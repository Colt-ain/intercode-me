import React from 'react';
import Link from 'next/link';

function About(props) {
	return (
		<div>
			<h1>About</h1>
			<Link href="/home" className="text-lg font-bold">To Home</Link>
		</div>
	);
}

export default About;
