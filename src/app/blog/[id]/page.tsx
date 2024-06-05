import { notFound } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';

async function fetchPost(id) {
	const res = await fetch('http://localhost:3000/data.json');
	if (!res.ok) {
		throw new Error('Failed to fetch posts');
	}
	const posts = await res.json();
	return posts.find(post => post.id === parseInt(id));
}

export default async function Post({ params }) {
	const { id } = params;
	const post = await fetchPost(id);

	if (!post) {
		notFound();
		return null;
	}

	return (
		<>
			<Head>
				<title>{post.title}</title>
			</Head>
			<section className='text-gray-400'>
				<div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>{post.title}</h1>
					<p className='title-font sm:text-2xl text-2xl mb-4 font-medium text-white'>{post.description}</p>
					<p className='title-font sm:text-1xl text-1xl mb-4 font-medium text-white'>Date: {post.date}</p>
					<p className='title-font sm:text-1xl text-1xl mb-4 font-medium text-white'>Author: {post.author}</p>
				</div>
			</section>
		</>
	);
}
