import Link from "next/link";
import BannerSecond from "../../components/Content/BannerSecond";
import SubTitlePage from "../../components/Content/SubTitlePage";

import SEO from "../../components/Header/Seo";
import Layout from "../../components/Layout";

function Contact(props) {

	return (
		<>

			<SEO
				title={"Contact Me"}
				description={"If there is a way your business can benefit from my experience as a developer? Please share your thoughts in email or by phone and I will be in touch."}
			/>
			
			<Layout>
				<BannerSecond
					titlePrimary={"Interested in"}
					titleForeign={"working with me?"}
					imageFeature="/feature-contact.png"
					wImage={"500"}
					hImage={"500"}
					subTitlePage={"Contact"}
					subTitleSecondPage={"Get in Touch"}
				>
					
				<p>If there is a way your business can benefit from my experience as a developer? Please share your thoughts in email or by phone and I will be in touch.</p>
				<div className="flex flex-wrap w-full items-center text-center lg:justify-left mt-10">
					<Link href="mailto:contact@miftahshidiq.com">
						<a
							className="
								inline-block
								font-bold mr-0 lg:mr-8
								px-8 py-2.5 text-lg
								items-center
								justify-start
								ring-2 ring-slate-100
								cursor-pointer rounded-full
								text-slate-100
								transition-all
								duration-300
								ease-in-out
								hover:scale-x-110
								hover:text-indigo-50
								hover:bg-gradient-to-br hover:from-slate-900/20 hover:via-indigo-900 hover:to-slate-50/20
							"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Email"
						>
							Email Me
						</a>
					</Link>
					<Link href="https://linkedin.com/in/miftahshidiq/">
						<a
						className="
							inline-block
							font-bold px-8 py-3 border border-transparent text-base text-white bg-transparent hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-indigo-500 md:py-4 md:text-xl md:px-10 
						"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn">
							or find me on LinkedIn
						</a>
					</Link>
				</div>
				</BannerSecond>
				
			</Layout>
		</>
	);
}

export default Contact;