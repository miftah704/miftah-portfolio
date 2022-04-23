import Image from "next/image";
import SubTitlePage from "./SubTitlePage";

function BannerSecond(props) {

	const {
		titlePrimary,
		titleForeign,
		children,
		imageFeature,
		wImage,
		hImage,
		subTitlePage,
		subTitleSecondPage,
	} = props;

	return (

		<div className={`${subTitlePage ? "" : "lg:h-screen"} bg-radial-at-t from-indigo-900/40 via-slate-900/50 to-slate-900`}>
			<main className="
				mx-auto
				max-w-7xl
				px-4
				h-full
			">
				
				{
					subTitlePage && (
						<>
							<SubTitlePage
								variant="
									text-xl
									font-semibold
									text-indigo-300
									underline
									md:underline-offset-8
									decoration-indigo-500
									decoration-4
									text-center
									md:pt-44 pt-36
									uppercase
									antialiased
									tracking-wide
									md:mb-10 mb-3
								"
								subTitle={subTitlePage}
							/>

							{ subTitleSecondPage && 
								<SubTitlePage
									variant="
										md:text-4xl
										text-3xl
										font-semibold
										text-slate-200
										text-center
										antialiased
										tracking-wide
									"
									subTitle={subTitleSecondPage}
								/>
							}
						</>
					)
				}

				<div className="
					flex md:flex-row
					flex-col-reverse
					items-center
					h-full
					py-24
					justify-center">

					<div className="lg:basis-1/2 basis-full py-10 lg:py-0">

						<div className="my-auto">
							<h3 className="
								mb-5
								text-5xl
								font-bold
								text-indigo-300
							">
								{titlePrimary}
							</h3>

							<h4 className="
								mb-5
								text-3xl
								font-bold
								text-slate-300
							">
								{titleForeign}
							</h4>

							<div className="
								text-xl
								leading-10
								text-slate-300
							">
								{children}
							</div>
							
						</div>
					</div>
					<div className="lg:basis-1/2 basis-full py-10 lg:py-0">
						<div className="
							w-full
							h-full
							text-center
							lg:-mt-10
						">

							<Image
								src={imageFeature}
								width={wImage}
								height={hImage}
								alt={"image-feature"}
								className="rounded-xl drop-shadow"
							/>

						</div>
					</div>
				</div>

			</main>

		</div>

	);
}

export default BannerSecond;