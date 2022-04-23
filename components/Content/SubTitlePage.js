function SubTitlePage(props) {

	const {
		variant,
		subTitle,
	} = props;
	
	return (
		<h2
			className={`
				${variant ? variant : "text-slate-100 text-4xl mb-5"}
				font-semibold
				decoration-indigo-500
				decoration-4
				text-center
			`}>
			{subTitle}
		</h2>
	);
}

export default SubTitlePage;