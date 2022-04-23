import { Tab } from "@headlessui/react";
import Head from "next/head";
import Image from 'next/image'
import Link from "next/link";
import { useState } from "react";
import Layout from "../Layout";

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
  }

function index(props) {
	
	let [categories] = useState({
    "All Tools": [
		{
		  id: 3,
		  image: "bootstrap-logo.svg",
		  title: 'Bootstrap',
		  width: "80%",
		  height: "80%"
		},
		{
		  id: 8,
		  image: "nextjs-logo.svg",
		  title: 'Next JS',
		  width: "80%",
		  height: "80%"
		},
		{
		  id: 9,
		  image: "react-logo.svg",
		  title: 'React',
		  width: "75%",
		  height: "80%"
		},
		{
		  id: 10,
		  image: "html5-logo.svg",
		  title: 'HTML5',
		  width: "110%",
		  height: "110%"
		},
		{
		  id: 16,
		  image: "javascript-logo.svg",
		  title: 'JavaScript',
		  width: "120%",
		  height: "120%"
		},
		{
		  id: 13,
		  image: "php-logo.svg",
		  title: 'PHP',
		  width: "120%",
		  height: "120%"
		},
		{
		  id: 14,
		  image: "mysql-logo.svg",
		  title: 'MySQL',
		  width: "90%",
		  height: "90%"
		},
      {
        id: 1,
        image: "laravel-logo.svg",
        title: 'Laravel',
		width: "70%",
		height: "70%"
      },
      {
        id: 4,
        image: "codeigniter-logo.svg",
        title: 'Codeigniter',
		width: "60%",
		height: "60%"
      },
		{
		  id: 5,
		  image: "figma-logo.svg",
		  title: 'Figma',
		  width: "65%",
		  height: "65%"
		},
		{
		  id: 1,
		  image: "adobephotoshop-logo.svg",
		  title: 'Photoshop',
		  width: "70%",
		  height: "70%"
		},
		{
		  id: 2,
		  image: "adobexd-logo.svg",
		  title: 'Xd',
		  width: "70%",
		  height: "70%"
		},
	  {
		id: 11,
		image: "google-logo.svg",
		title: 'Google',
		width: "110%",
		height: "110%"
	  },
	  {
		id: 12,
		image: "git-logo.svg",
		title: 'Git',
		width: "130%",
		height: "130%"
	  },
	  {
		id: 15,
		image: "github-logo.svg",
		title: 'Github',
		width: "130%",
		height: "130%"
	  },
	  {
		id: 17,
		image: "visualstudiocode-logo.svg",
		title: 'VSCode',
		width: "65%",
		height: "65%"
	  },
	  {
		id: 18,
		image: "sublimetext-logo.svg",
		title: 'Sublime Text',
		width: "60%",
		height: "60%"
	  },
	  {
		id: 19,
		image: "tableplus-logo.png",
		title: 'TablePlus',
		width: "75%",
		height: "75%"
	  },
	  {
		id: 20,
		image: "xampp-logo.svg",
		title: 'XAMPP',
		width: "63%",
		height: "63%"
	  },
      {
        id: 6,
        image: "ijcad-logo.svg",
        title: 'IjCAD',
		width: "100%",
		height: "100%"
      },
    ],
    "Frontend": [
		{
		  id: 3,
		  image: "bootstrap-logo.svg",
		  title: 'Bootstrap',
		  width: "80%",
		  height: "80%"
		},
		{
		  id: 8,
		  image: "nextjs-logo.svg",
		  title: 'Next JS',
		  width: "80%",
		  height: "100%"
		},
		{
		  id: 9,
		  image: "react-logo.svg",
		  title: 'React',
		  width: "75%",
		  height: "75%"
		},
		{
		  id: 10,
		  image: "html5-logo.svg",
		  title: 'HTML5',
		  width: "110%",
		  height: "120%"
		},
		{
		  id: 16,
		  image: "javascript-logo.svg",
		  title: 'JavaScript',
		  width: "120%",
		  height: "120%"
		},
    ],
    "Backend": [
		{
		  id: 13,
		  image: "php-logo.svg",
		  title: 'PHP',
		  width: "120%",
		  height: "120%"
		},
		{
		  id: 14,
		  image: "mysql-logo.svg",
		  title: 'MySQL',
		  width: "90%",
		  height: "100%"
		},
      {
        id: 1,
        image: "laravel-logo.svg",
        title: 'Laravel',
		width: "70%",
		height: "100%"
      },
      {
        id: 4,
        image: "codeigniter-logo.svg",
        title: 'Codeigniter',
		width: "60%",
		height: "60%"
      },
    ],
    "Design": [
		{
		  id: 5,
		  image: "figma-logo.svg",
		  title: 'Figma',
		  width: "65%",
		  height: "65%"
		},
		{
		  id: 1,
		  image: "adobephotoshop-logo.svg",
		  title: 'Photoshop',
		  width: "70%",
		  height: "70%"
		},
		{
		  id: 2,
		  image: "adobexd-logo.svg",
		  title: 'Xd',
		  width: "70%",
		  height: "70%"
		},
    ],
    "Tools": [
		{
		  id: 11,
		  image: "google-logo.svg",
		  title: 'Google',
		  width: "110%",
		  height: "110%"
		},
		{
		  id: 12,
		  image: "git-logo.svg",
		  title: 'Git',
		  width: "130%",
		  height: "120%"
		},
		{
		  id: 15,
		  image: "github-logo.svg",
		  title: 'Github',
		  width: "130%",
		  height: "130%"
		},
		{
		  id: 17,
		  image: "visualstudiocode-logo.svg",
		  title: 'VSCode',
		  width: "65%",
		  height: "65%"
		},
		{
		  id: 18,
		  image: "sublimetext-logo.svg",
		  title: 'Sublime Text',
		  width: "60%",
		  height: "60%"
		},
		{
		  id: 19,
		  image: "tableplus-logo.png",
		  title: 'TablePlus',
		  width: "75%",
		  height: "75%"
		},
		{
		  id: 20,
		  image: "xampp-logo.svg",
		  title: 'XAMPP',
		  width: "63%",
		  height: "63%"
		},
    ],

    "Others": [
		{
		  id: 6,
		  image: "ijcad-logo.svg",
		  title: 'IjCAD',
		  width: "100%",
		  height: "100%"
		},
    ],
  })
	return (
		<>
			<Head>
				<title>Contact</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<div className="relative flex flex-col justify-center py-16 sm:py-24 bg-radial-at-t from-indigo-900/40 via-slate-900/50 to-slate-900 h-screen">
					<main className="mx-auto max-w-7xl px-4">
					<div className="grid grid-cols-2 gap-2 gap-x-5">
						<div className="my-auto">
							<h3 className="text-5xl text-indigo-300 mb-5 font-bold">Frontend & Backend</h3>
							<h3 className="text-5xl text-slate-300 mb-5 font-bold">Development</h3>
							<span className="text-xl text-slate-300">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo temporibus, at commodi sed consequuntur praesentium recusandae tempora ex quibusdam sapiente ratione ipsum dolore omnis dignissimos eligendi dolor ea totam iste.
							</span>
						</div>
						<div>
							<Image
								src={"/image-1.jpg"}
								width={800}
								height={600}
								className="rounded-xl drop-shadow"
							/>
						</div>
					</div>
					</main>
				</div>
				<div className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-900/80 to-indigo-900/50">
					<main className="mx-auto max-w-7xl px-4">
						<div className="text-center">
							<h2 className="h-15 text-4xl font-semibold text-slate-100 underline underline-offset-8 decoration-indigo-500 decoration-4">Very Clear Process</h2>
							<ol className="mt-24 border-l-4 mx-5 md:mx-0 md:border-l-0 md:border-t-4 border-indigo-900 md:flex md:justify-center md:gap-6">
								<li className="block text-left md:w-1/4">
									<div className="flex md:block flex-start items-center pt-2 md:pt-0">
									<div className="flex z-10 justify-center items-center w-9 h-9 bg-indigo-900 rounded-full ring-0 ring-indigo-900 sm:ring-8 shrink-0 -ml-5 md:-ml-0 -mt-6">
										<svg className="w-9 h-9 text-slate-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
									</div>
									</div>
									<div className="mt-10 ml-4 md:ml-0 pb-5">
										<h4 className="text-slate-100 font-semibold text-2xl mb-5">Analysis</h4>
										<p className="text-slate-300 text-xl mb-3">Langkah Awal adalah memahami cara kerja bagian dalam model bisnis anda secara mendetail.</p>
									</div>
								</li>
								<li className="block text-left md:w-1/4">
									<div className="flex md:block flex-start items-center pt-2 md:pt-0">
									<div className="flex z-10 justify-center items-center w-9 h-9 bg-indigo-900 rounded-full ring-0 ring-indigo-900 sm:ring-8 shrink-0 -ml-5 md:-ml-0 -mt-6">
										<svg className="w-9 h-9 text-slate-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
									</div>
									</div>
									<div className="mt-10 ml-4 md:ml-0 pb-5">
										<h4 className="text-slate-100 font-semibold text-2xl mb-5">Plan</h4>
										<p className="text-slate-300 text-xl mb-3">Merencanakan dengan cara memprioritaskan fitur utama berdasarkan perkiraan waktu sesuai kebutuhan bisnis anda.</p>
									</div>
								</li>
								<li className="block text-left  md:w-1/4">
									<div className="flex md:block flex-start items-center pt-2 md:pt-0">
									<div className="flex z-10 justify-center items-center w-9 h-9 bg-indigo-900 rounded-full ring-0 ring-indigo-900 sm:ring-8 shrink-0 -ml-5 md:-ml-0 -mt-6">
										<svg className="w-9 h-9 text-slate-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
									</div>
									</div>
									<div className="mt-10 ml-4 md:ml-0 pb-5">
										<h4 className="text-slate-100 font-semibold text-2xl mb-5">Build</h4>
										<p className="text-slate-300 text-xl mb-3">Melalui sistem pengiriman berkelanjutan dan jaminan kualitas agar membuat anda tetap up to date selama proses pengembangan dan memastikan anda puas dan bahwa masalah dapat diperbaiki sebelum di perkenalkan ke produk akhir.</p>
									</div>
								</li>
								<li className="block text-left md:w-1/4">
									<div className="flex md:block flex-start items-center pt-2 md:pt-0">
									<div className="flex z-10 justify-center items-center w-9 h-9 bg-indigo-900 rounded-full ring-0 ring-indigo-900 sm:ring-8 shrink-0 -ml-5 md:-ml-0 -mt-6">
										<svg className="w-9 h-9 text-slate-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
									</div>
									</div>
									<div className="mt-10 ml-4 md:ml-0 pb-5">
										<h4 className="text-slate-100 font-semibold text-2xl mb-5">Maintenance</h4>
										<p className="text-slate-300 text-xl mb-3">Kode yang dipikirkan dengan baik mempermudah untuk di pelihara dengan biaya rendah, melalui pemantauan memastikan aplikasi tetap sehat, sehingga anda dapat fokus pada hal-hal penting.</p>
									</div>
								</li>

							</ol>
						</div>
					</main>
				</div>

				<div className="relative py-16 sm:py-24 bg-gradient-to-t from-slate-900/80 to-indigo-900/50">
					<main className="mx-auto max-w-7xl px-4">
						<h2 className="h-15 text-4xl font-semibold text-slate-100 underline underline-offset-8 decoration-indigo-500 decoration-4 text-center mb-16">The Tech I use to build software</h2>
						<div className="w-full w-full sm:px-0">
							<Tab.Group>
								<Tab.List className="md:flex md:p-1 space-x-1 hidden">
									{Object.keys(categories).map((category) => (
										<Tab
											key={category}
											className={({ selected }) =>
												classNames(
													'w-full py-2.5 text-xl border-b-4 leading-5 font-medium',
													
													selected
													? 'text-indigo-200 border-b-indigo-400 rounded-t-xl'
													: 'text-slate-100 hover:text-indigo-400'
												)
											}
										>
											{category}
										</Tab>
									))}
								</Tab.List>
								<Tab.Panels className="mt-5 md:mt-16">
									{Object.values(categories).map((posts, idx) => (
										<Tab.Panel
										key={idx}
										className={classNames(
											'',
										)}
										>
										<div className="grid grid-cols-3 lg:grid-cols-6 gap-16 px-10 md:px-0">
											{posts.map((post) => (
											<div
												key={post.id}
												className="relative flex flex-coll p-3 sm:p-0 items-center justify-center aspect-square"
											>
												<div className=" bg-indigo-800/10 w-full h-full absolute rotate-45 rounded-xl" />
												<div className="bg-gradient-to-b from-slate-300 to-indigo-400 h-full w-full sm:w-3/4 sm:h-3/4 absolute rounded-xl rotate-45 shadow" />
												<div className="absolute -bottom-2 text-center bg-indigo-200 py-px  md:px-2 w-full tracking-wide rounded-md shadow invisible md:visible">
													<h4 className="text-base text-slate-600">{post.title}</h4>
												</div>
												<Image src={`/${post.image}`} width={post.width} height={post.height} />
											</div>
											))}
										</div>
										</Tab.Panel>
									))}
								</Tab.Panels>
							</Tab.Group>
						</div>
					</main>
				</div>

				<div className="relative flex flex-col justify-center py-16 sm:py-24 bg-gradient-to-t from-slate-900 via-indigo-800/50 to-slate-900/80 h-screen">
					<main className="mx-auto max-w-7xl px-4">
						<div className="text-center">
							<h2 className="text-4xl font-semibold text-slate-100 decoration-indigo-500 decoration-4 text-center mb-5">Have a project in mind?</h2>
							<h2 className="text-4xl font-semibold text-slate-100 decoration-indigo-500 decoration-4 text-center mb-16">Let's get to work</h2>
							
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
											Contact Me
										</a>
									</Link>
						</div>
					</main>
				</div>
			</Layout>
		</>
	);
}

export default index;