function SecondPage(props) {

	const {
		bgVariant,
		children
	} = props;
	
	return (
		
		<div className={`
			${bgVariant}
			relative
			flex
			flex-col
			justify-center
			py-16
			sm:py-24
		`}>
			
			<main className="mx-auto max-w-7xl px-4">
				<div className="text-center flex flex-col items-center">
					{children}
				</div>
			</main>
		</div>
	);
}

export default SecondPage;