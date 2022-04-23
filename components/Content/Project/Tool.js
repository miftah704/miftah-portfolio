function CardTool(props) {
	return (
		<>
			<div
				className="
					absolute flex
					items-center
					justify-center
					inset-x-0
					-bottom-10
					w-full"
			>

				<div
					className="
					w-1/2 inline-flex
					items-center justify-center
					border-indigo-900
					bg-slate-900
					rounded-2xl
					border-4
				">
					{props.children}
				</div>
			</div>
		</>
	);
}

export default CardTool;