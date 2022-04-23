import Link from "next/link";

function ItemCardProject(props) {
	
	const {
		bgFeature,
		variant,
		linkDetail,
		title,
		description,
		siteLink,
		titleSiteLink,
		children
	} = props;

	return (
		
		<>
			<div
				className={`
					${variant ? variant : ''}
					group relative p-5
					bg-slate-900
					border-4 border-indigo-900
					aspect-square
					shadow-lg rounded-3xl
					text-slate-100
				`}
			>
				<div
					className="
						relative
						w-full h-full
						overflow-hidden
					">
					<div
						className={`${bgFeature} absolute inset-0 group-hover:scale-105 transition-all  duration-500 w-full h-full rounded-3xl bg-center bg-cover`}
					/>
				</div>

				<main
					className="
						my-8
						w-full
						text-left
				">
					<Link href={linkDetail ? linkDetail : "#"}>
						<a
							className="
								text-2xl font-bold
								group-hover:underline
								group-hover:underline-offset-8
								group-hover:text-indigo-400
								group-hover:transition-color
								group-hover:duration-500
						">
							{title}
						</a>
					</Link>
					
					<span
						className="
							block mt-5
							text-xl text-justify
							text-slate-300
							antialiased
					">
						{description}
					</span>
					
					<Link href={siteLink ? siteLink : "#"}>
						<a
							className="
								flex mt-3 mb-5
								items-center
								text-xl text-slate-300
								hover:text-indigo-400" 
							target="_blank"
							rel="noopener noreferrer"
							aria-label="My Project is My Sunplan"
						>
							{titleSiteLink} 
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="ml-2 mt-1"
								width="19" height="19"
								viewBox="0 0 24 24"
								fill="none" stroke="currentColor"
								strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
							>
								<g
									fill="none"
									fillRule="evenodd"
								>
									<path
										d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"
									/>
								</g>
							</svg>
						</a>
					</Link>
				</main>
				
				{children}

			</div>

		</>
	);
}

export default ItemCardProject;