import Link from 'next/link';

import ItemCardProject from '../../components/Content/Project/ItemProject';
import ItemCardTool from '../../components/Content/Project/ItemTool';
import CardProject from '../../components/Content/Project/Project';
import CardTool from '../../components/Content/Project/Tool';
import SecondPage from '../../components/Content/SecondPage';
import SubTitlePage from '../../components/Content/SubTitlePage';
import SEO from '../../components/Header/Seo';
import Layout from '../../components/Layout';
import projectData from './projectData';


function index(props) {

	const [
		projects,
		tools,
		seoVarProject,
		subTitlePageVarProject,
		subTitleSecondPageVarProject
	] = projectData();

	return (

		<>
			
			<SEO
				title={seoVarProject.seoTitleProjectVar}
				description={seoVarProject.seoDescriptionProjectVar}
			/>

			<Layout>

				<CardProject
				title={subTitlePageVarProject.subTitlePrimaryProjectVar}
				titlePage={subTitlePageVarProject.subTitlePageProjectVar}
				variant="bg-radial-at-t from-indigo-900/40 via-slate-900/50 to-slate-900"
				>

					{ projects.map( (project,idx) => (

						<ItemCardProject
							key={idx}
							bgFeature={project.bgFeatureVar}
							variant={project.variantVar}
							linkDetail={project.linkDetailVar}
							title={project.titleVar}
							description={project.descriptionVar}
							siteLink={project.siteLinkVar}
							titleSiteLink={project.titleSiteLinkVar}
						>

							<CardTool>
								{
									tools.map((tool, idx)=>(

										<ItemCardTool
											key={idx}
											imageFeature={tool.imageFeatureVar}
											imageWidth={tool.imageWidthVar}
											imageHeight={tool.imageHeightVar}
										/>

									))
								}
							</CardTool>

						</ItemCardProject>

					)) }

				</CardProject>

				<SecondPage bgVariant="
					bg-gradient-to-t
					from-slate-900
					via-indigo-800/40
					to-slate-900/80
					h-screen
				">
					
					<SubTitlePage
						variant={subTitleSecondPageVarProject.subTitleVariantPrimaryProjectVar}
						subTitle={subTitleSecondPageVarProject.subTitlePrimaryProjectVar}
					/>

					<SubTitlePage
						variant={subTitleSecondPageVarProject.subTitleVariantForeignProjectVar}
						subTitle={subTitleSecondPageVarProject.subTitleForeignProjectVar}
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
							antialiased
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