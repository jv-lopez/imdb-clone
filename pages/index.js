import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from "../utils/requests";

export default function Home({ results }) {
	console.log(results)
	return (
		<div className=''>
			<Head>
				<title>IMDb Clone</title>
				<meta name="description" content="A clone of IMDb website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<Header />

			{/* Nav bar */}
			<Navbar />

			{/* Results */}
			<Results results={results} />
		</div>
	)
}


export async function getServerSideProps(context) {
	const genre = context.query.genre || 'fetchTrending'
	const request = await fetch(`https://api.themoviedb.org/3${requests[genre].url}`).then((response) => response.json())
	return {
		props: {
			results: request.results,
		}
	}
}