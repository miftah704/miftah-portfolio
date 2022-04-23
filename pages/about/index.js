import Layout from "../../components/Layout";
import SEO from "../../components/Header/Seo";
import BannerSecond from "../../components/Content/BannerSecond";
import CurriculumVitaeContact from "../../components/Content/Contact/CurriculumVitae";
import BannerDescription from "../../components/Content/About/BannerDescription";
import SubTitlePage from "../../components/Content/SubTitlePage";
import SecondPage from "../../components/Content/SecondPage";
import cvData from "./cvData";

function index() {
	
	let [
		cvs,
		seoVar,
		bannerVar,
		subTitlePageVar
	] = cvData();

	return (
		<>

			<SEO
				title={seoVar.seoTitleVar}
				description={seoVar.seoDescriptionVar}
			/>

			<Layout>

				<BannerSecond
					titlePrimary={bannerVar.titlePrimaryVar}
					titleForeign={bannerVar.titleForeignVar}
					imageFeature={bannerVar.imageFeatureVar}
					wImage={bannerVar.wImageVar}
					hImage={bannerVar.hImageVar}
				>

					<BannerDescription />

				</BannerSecond>

				<SecondPage bgVariant="
					bg-gradient-to-t
					from-slate-900
					via-indigo-800/40
					to-slate-900/80
				">

					<SubTitlePage
						variant={subTitlePageVar.subTitleVariantPrimaryVar}
						subTitle={subTitlePageVar.subTitlePrimaryVar}
					/>

					<SubTitlePage
						variant={subTitlePageVar.subTitleVariantForeignVar}
						subTitle={subTitlePageVar.subTitleForeignVar}
					/>

					{
						cvs.map((cv, idx) => (

							<CurriculumVitaeContact
								key={idx}
								untilDate={cv.untilDateVar}
								position={cv.positionVar}
								linkDetail={cv.linkDetailVar}
								ariaLabelLink={cv.ariaLabelLinkVar}
								companyName={cv.companyNameVar}
								companyAddress={cv.companyAddressVar}
								jobStatus={cv.jobStatusVar}
								bottomVariant={cv.bottomVariantVar}
								bnBVariant={cv.bnBVariantVar}
								bgStatusVariant={cv.bgStatusVariantVar}
								
							>
								{cv.childrenVar}
							</CurriculumVitaeContact>
							
						))
					}

				</SecondPage>

			</Layout>
		</>
	);
}

export default index;