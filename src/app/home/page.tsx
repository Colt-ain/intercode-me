import React from 'react';
import Link from 'next/link';

function Home(props) {
	return (
		<div>
			<h1>Home</h1>
			<Link href="/about" className="text-lg font-bold">To About</Link>
		</div>
	);
}

export default Home;
