import Image from 'next/image'

import { Tab } from "@headlessui/react";
import Link from "next/link";

import SEO from "../../components/Header/Seo";
import Layout from "../../components/Layout";
import SecondPage from "../../components/Content/SecondPage";
import SubTitlePage from "../../components/Content/SubTitlePage";
import toolData from '../api/toolData';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

function index() {
	
	let [categories, seoVar] = toolData();

	return (
		<>
			<SEO
				title={seoVar.seoTitleToolVar}
				description={seoVar.seoDescriptionVar}
			/>

			<Layout>

				<SecondPage bgVariant="
					bg-radial-at-t
					from-indigo-900/40
					via-slate-900/50
					to-slate-900
				">
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
							mt-20 md:mb-10 mb-3
							uppercase
							antialiased
							tracking-wide
						"
						subTitle="My Tool Box"
					/>
					<SubTitlePage
						variant="
							h-15 
							md:text-4xl
							text-3xl
							font-semibold
							text-slate-100
							text-center
							mb-16
							antialiased
							tracking-wide
						"
						subTitle="The tools I use in the workflow."
					/>
					
					<div className="w-full sm:px-0 pb-10">
							<Tab.Group>
								<Tab.List className="md:flex md:p-1 space-x-1 hidden">
									{Object.keys(categories).map((category) => (
										<Tab
											key={category}
											className={({ selected }) =>
												classNames(
													'w-52 py-2.5 text-xl border-b-4 leading-5 font-medium',
													
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
								<Tab.Panels className="mt-5 md:mt-16 md:px-8">
									{Object.values(categories).map((posts, idx) => (
										<Tab.Panel
										key={idx}
										className={classNames(
											'',
										)}
										>
										<div className="grid grid-cols-3 lg:grid-cols-6 gap-8 md:gap-16 px-10 md:px-0">
											{posts.map((post) => (
											<div
												key={post.id}
												className="relative flex flex-coll p-3 sm:p-0 items-center justify-center aspect-square"
											>
												<div className=" bg-indigo-800/10 w-full h-full absolute rotate-45 rounded-xl" />
												<div className="bg-indigo-200 h-full w-full sm:w-3/4 sm:h-3/4 absolute rounded-xl rotate-45 shadow border-4 border-indigo-500" />
												<div className="absolute -bottom-2 text-center bg-indigo-200 py-px  md:px-2 w-full tracking-wide rounded-md shadow invisible md:visible border-4 border-indigo-500">
													<h4 className="text-base text-slate-600">{post.title}</h4>
												</div>
												<Image src={`/${post.image}`} width={post.width} height={post.height} alt="image-feature" />
											</div>
											))}
										</div>
										</Tab.Panel>
									))}
								</Tab.Panels>
							</Tab.Group>
						</div>
				</SecondPage>

				
				<SecondPage bgVariant="
					bg-gradient-to-t
					from-slate-900
					via-indigo-800/40
					to-slate-900/80
					h-screen
				">
					
					<SubTitlePage
						variant="text-slate-100 text-4xl mb-5"
						subTitle="Have a project in mind?"
					/>

					<SubTitlePage
						variant="text-slate-100 text-4xl mb-16"
						subTitle="Let's get to work"
					/>

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

				</SecondPage>
			</Layout>
		</>
	);
}

export default index;