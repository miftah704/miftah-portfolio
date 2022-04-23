import Link from "next/link";
import LinkIcon from "../../Svg/LinkIcon";

function CurriculumVitaeContact(props) {
	
	const {
		children,
		untilDate,
		position,
		linkDetail,
		ariaLabelLink,
		companyName,
		companyAddress,
		jobStatus,
		bottomVariant,
		bnBVariant,		// bnB = bgColor & Border Variant
		bgStatusVariant
	} = props;

	return (

		<div className="
			block
			relative
			z-0
			my-5
			p-6
			w-full
			md:w-[27.1rem]
			rounded-3xl
		">

			<div className={`
				${bottomVariant}
				absolute
				left-0
				w-full
				h-full
				z-[-1]
			`}>
				{children}
			</div>

			<div className={`
				${bnBVariant}
				relative
				p-6
				w-full
				rounded-lg
			`}>

				<p className="
					text-sm
					text-slate-400
				">
					{untilDate}
				</p>

				<div className="
					relative
					flex
					py-2
					items-center
				">
					<div className="flex-grow border-t border-slate-400"></div>
					
					<span className="
						flex-shrink
						mx-4 my-1
						md:text-xl
						text-lg
						font-bold
						text-indigo-300
					">
						{position}
					</span>
					<div className="flex-grow border-t border-slate-400"></div>
				</div>

				<div className="block w-full mb-5">
					<Link href={linkDetail}>
						<a
							className="
								flex
								items-center
								justify-center
								text-lg
								md:text-xl
								text-slate-400
								hover:text-indigo-400" 
							target="_blank"
							rel="noopener noreferrer"
							aria-label={ariaLabelLink}
						>
							{companyName}
							<LinkIcon />
						</a>
					</Link>
					<span className="text-xs text-slate-500">{companyAddress}</span>
				</div>
				<div className={`
					${bgStatusVariant}
					absolute
					-rotate-45
					top-2
					-left-[1.65rem]
					w-24
					rounded-tr-full
					rounded-tl-full
					text-sm
					px-2 py-1
					text-slate-200
				`}>
					{`#${jobStatus}`}
				</div>
				
			</div>

		</div>
	);
}

export default CurriculumVitaeContact;