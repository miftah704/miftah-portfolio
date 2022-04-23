import BannerPrimary from "../components/Content/BannerPrimary";
import ItemCardProject from "../components/Content/Project/ItemProject";
import ItemCardTool from "../components/Content/Project/ItemTool";
import CardProject from "../components/Content/Project/Project";
import CardTool from "../components/Content/Project/Tool";
import SecondPage from "../components/Content/SecondPage";
import SEO from "../components/Header/Seo";
import Layout from "../components/Layout";
import projectData from "./api/projectData";

export default function Home() {

	const [
		projects,
		tools,
	] = projectData();

	return (
		<>

			<SEO
				title={false}
				description={false}
			/>

			<Layout>
			
				<BannerPrimary />

				<CardProject
				title={"Latest Work"}
				variant="bg-slate-900/70"
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
					bg-gradient-to-b
					from-slate-900/80
					to-indigo-900/50
					h-screen
				">
					
					<h2 className="h-15 text-4xl font-semibold text-slate-100 underline underline-offset-8 decoration-indigo-500 decoration-4 text-center mb-16">Latest Posts</h2>
					<div className="w-full divide-y-2 divide-indigo-500">
						<h4 className="text-xl font-bold mb-2 text-slate-100 text-center">Coming son...</h4>
					</div>
				</SecondPage>

			</Layout>
		</>
	)
}
