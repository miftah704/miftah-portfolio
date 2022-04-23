import Link from "next/link"

import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

function Header(props) {
	const [effect, setEffect] = useState();
	const [scrollY, setScrollY] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});
	
	const handleScroll = () => {
	setScrollY(window.scrollY);
	};
	
	useEffect(() => {	
	if (scrollY < 100) {
		setEffect("transition-all transform duration-150 bg-transparent")
	}else if(scrollY < 1000){
		setEffect("transition-all transform duration-1000 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 p-0 drop-shadow-lg");
	}
	
	}, [scrollY]);

	function titleWeb() {
		return (
			"<Miftah.Shidiq />"
		)
	}

	return (

		<div>
			<nav className={`fixed w-full shadow-sm z-20 ${effect}`}>
				<div className="max-w-7xl mx-auto">
					<div className="flex items-center h-24 max-w-7xl">
						{/* first block section outer part */}
						<div className="flex items-center justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 pl-5 md:pl-0">
								<h1 className="font-bold text-xl cursor-pointer text-slate-100">
									<Link href="/"><a>{ titleWeb() }</a></Link>
								</h1>
							</div>
							{/* for small screen */}
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-8">
									<Link href="/projects">
										<a className="
											cursor-pointer
											text-slate-100 font-semibold text-lg
											px-3 py-2
											hover:text-indigo-400
											transition-all
											duration-300
											ease-in-out
											hover:scale-x-110
										">
											Project
										</a>
									</Link>
									<Link href="/tools">
										<a className="
											cursor-pointer
											text-slate-100 font-semibold
											px-3 py-2 text-lg
											hover:text-indigo-400
											transition-all
											duration-300
											ease-in-out
											hover:scale-x-110
										">
											My tool box
										</a>
									</Link>
									<Link href="/contact">
										<a className="
											inline-block
											font-bold 
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
										">
											Contact
										</a>
									</Link>
								</div>
							</div>
						</div>
						{/* mobile responsive */}
						<div className="flex mr-10 md:hidden">
							<button
							onClick={()=>setIsOpen(!isOpen)}
							type="button"
							className="inline-flex justify-center p-2 rounded-md text-slate-200 hover:text-slate-100 outline-none"
							aria-controls="mobile-menu"
							aria-expanded="false"
							>
								<span className="sr-only">Mobile Menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http:www.w3.org/2000/svg"
										fill="none" viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16">
										</path>
									</svg>
								):(
									<svg
										className="block h-6 w-6"
										xmlns="http:www.w3.org/2000/svg"
										fill="none" viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12">
										</path>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
							<div
								className="md:hidden flex flex-col text-xl text-center bg-indigo-900 ring-0"
								id="mobile-menu">
								<Link href="/">
									<a className="
										bg-indigo-900
										text-slate-200
										px-2 pt-2 pb-3
										space-y-1
										sm:px-3 hover:text-slate-100
										hover:bg-indigo-800
									">
										Home
									</a>
								</Link>
								
								<Link href="/projects">
									<a className="
										bg-indigo-900
										text-slate-200
										px-2 pt-2 pb-3
										space-y-1
										sm:px-3 hover:text-slate-100
										hover:bg-indigo-800
									">
										Project
									</a>
								</Link>

								<Link href="/tools">
									<a className="
										bg-indigo-900
										text-slate-200
										px-2 pt-2 pb-3
										space-y-1
										sm:px-3 hover:text-slate-100
										hover:bg-indigo-800
									">
										My tool box
									</a>
								</Link>

								<Link href="/contact">
									<a className="
										bg-indigo-900
										text-slate-200
										px-2 pt-2 pb-3
										space-y-1
										sm:px-3 hover:text-slate-100
										hover:bg-indigo-800
									">
										Contact
									</a>
								</Link>
								
							</div>

				</Transition>
			</nav>
		</div>
	);
}

export default Header;