import Head from 'next/head';

function SEO(props) {

	const {
		title,
		description
	} = props;

	return (
		<Head>

			<title>
				{title ? `${title} | Miftah Shidiq` : "Miftah Shidiq | Portfolio"}
			</title>
			<meta
				name="description"
				content={
					description ?
					description :
					"Hi! 👋🏼 My name is Miftah. I'm a enthusiast of codes whenever and wherever, curiosity and the urge of being good at something is always a motivation."
				}
			/>
			<link rel="icon" href="/logo-miftah.jpg" />

		</Head>
	);
}

export default SEO;