function Content( props ) {
	const { content } = props;
	return (
		<>
			<main
				className="bg-slate-900/95"
			>
				{ content }
			</main>
		</>
	);
}

export default Content;