function CardProject(props) {

	const {
		title,
		variant,
		titlePage,
		children
	} = props;
	
	return (
		
		<>
			<div
				className={`
				${variant}
				relative flex flex-col
				justify-center
				py-16 sm:py-24`}>

				<main
					className="
						mx-auto
						max-w-7xl
						px-4
				">

					<h4
						className="
							text-xl
							font-semibold
							text-indigo-300
							underline
							md:underline-offset-8
							decoration-indigo-500
							decoration-4
							text-center
							mt-20 md:mb-10 mb-3
							uppercase
							antialiased
							tracking-wide
					">

						{titlePage}

					</h4>
					<h2
						className="
							h-15 md:text-4xl text-3xl
							font-semibold
							text-slate-100
							decoration-4
							text-center
							mb-16
							antialiased
					">

						{title}

					</h2>
					
					<div
						className="
							mt-20 p-2
							font-inter
							gap-16
							grid grid-cols-1
							md:grid-cols-2
							lg:grid-cols-2
							lg:gap-28
						">
							{children}
					</div>
				
				</main>
			
			</div>
		</>
	);
}

export default CardProject;