import Link from "next/link";

function BannerPrimary(props) {


	return (

		<div className="
				relative
				flex 
				flex-col 
				justify-center 
				py-16 
				sm:py-24 
				bg-radial-at-t 
				from-indigo-900/40 
				via-slate-900/50 
				to-slate-900 h-screen
		">

			<main className="mx-auto max-w-7xl px-4">
				<div className="text-center">
					<h1 className="mt-0 lg:mt-7 text-4xl text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl">
						<span className="block font-black tracking-tighter text-gradient bg-gradient-to-b from-indigo-700 via-indigo-200 to-indigo-700 xl:inline">Software Engineer</span>
					</h1>
					<p className="mt-3 max-w-md mx-auto text-base text-slate-400 sm:text-lg md:mt-16 md:text-xl xl:text-2xl 2xl:text-3xl md:max-w-3xl">
						Hi! 👋🏼 My name is Miftah. I'm a enthusiast of codes whenever and wherever, curiosity and the urge of being good at something is always a motivation.
					</p>
					<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-16">
						
					<Link href={"/contact"}>
					<a className="mt-10 sm:mt-0 box-border relative z-10 inline-flex items-center justify-center w-auto px-12 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-xl cursor-pointer group ring-offset-4 ring-2 ring-offset-slate-800 ring-indigo-800 hover:ring-offset-indigo-800 ease focus:outline-none">
						<span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-indigo-900/30 group-hover:-translate-x-7 group-hover:bg-indigo-900 group-hover:scale-150 group-hover:h-44 group-hover:w-12"></span>
						<span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform group-hover:bg-indigo-900 -rotate-45 -translate-x-1 bg-indigo-900/30 group-hover:translate-x-10 group-hover:scale-150 group-hover:h-12 group-hover:w-36"></span>
						<span className="relative z-20 flex items-center text-base md:text-xl">Get in touch</span>
					</a>
					</Link>
						<div className="mt-10 sm:mt-0 sm:ml-3">
							<Link href={"/about"}>
								<a
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-transparent hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-indigo-500 md:py-4 md:text-xl md:px-10">
										or know more
								</a>
								</Link>
						</div>
					</div>
				</div>
			</main>
	</div>
	);
}

export default BannerPrimary;