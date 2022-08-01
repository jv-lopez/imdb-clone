import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'

export default function Home() {
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
			<Results />
		</div>
	)
}
