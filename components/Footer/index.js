import Link from "next/link";

function Footer() {

	return (

		<>

			<footer
				className="bg-slate-900"
			>

				<div
					className="
						max-w-6xl m-auto
						px-5 py-10
						sm:flex
					"
				>

					<div
						className="
							text-center
							mb-6
							sm:flex-1
							sm:text-left
							sm:mb-0 sm:mt-3
						"
					>
						<span
							className="
							text-slate-300
							"
						>
							&copy; Miftah Shidiq
						</span>
					</div>

					<div
						className="
							text-center
							sm:flex-1
							sm:text-right
						"
					>

						<ul
							className="text-lg"
						>

							<li
								className="
									inline-block
									mr-6
									sm:mr-10
								"
							>
								<Link href="/about">
									<a
									aria-label="About me"
								>
									<span
										className="text-slate-300"
									>
										About me
									</span>
								</a>
								</Link>
							</li>
							<li
								className="
									inline-block
									mr-6
									sm:mr-10
								"
							>
							<Link href="#">
								<a className="text-slate-300">
										Blog
								</a>
								</Link>
							</li>
							<li
								className="
									inline-block
									mr-6
									sm:mr-10
								"
							>
							<Link href="https://linkedin.com/in/miftahshidiq/">
								<a
									
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
								>
									<span
										className="text-slate-300"
									>
										LinkedIn
									</span>
								</a>
								</Link>
							</li>

							<li
								className="
									inline-block
									mr-6
									sm:mr-10
								"
							>
							<Link href="https://github.com/miftah704">
								<a
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Github"
								>
									<span
										className="text-slate-300"
									>
										Github
									</span>
								</a>
								</Link>
							</li>

						</ul>

					</div>

				</div>

			</footer>
		</>
	);
}

export default Footer;