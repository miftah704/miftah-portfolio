function projectData() {

	let projects = [
		{
			id: 1,
			bgFeatureVar: "bg-[url('/mysunplan/feature-sunplan-1.jpg')]",
			variantVar: false,
			linkDetailVar: "#",
			titleVar: "My Sunplan",
			descriptionVar: "He said : Transparency, Accuracy, Integration. All of that is my job.",
			siteLinkVar: "https://my.sunplan-co.jp",
			titleSiteLinkVar: "View Site",
		},
		{
			id: 2,
			bgFeatureVar: "bg-[url('/mysunplan/feature-sunplan-2.jpg')]",
			variantVar: "md:mt-48",
			linkDetailVar: "#",
			titleVar: "株式会社 サンプラン",
			descriptionVar: "Construction and pavement sector as well as heavy vehicle rental, with the site expanding the range of information and make it easier to provide information on vehicles available for rent.",
			siteLinkVar: "https://sunplan-co.jp",
			titleSiteLinkVar: "View Site",
		},
	]

	let tools = [
		{
			id: 1,	
			imageFeatureVar: "/bootstrap-logo.svg",
			imageWidthVar: "40%",
			imageHeightVar: "40%",
		},
		{
			id: 2,	
			imageFeatureVar: "/codeigniter-logo.svg",
			imageWidthVar: "40%",
			imageHeightVar: "40%",
		},
	]

	let seoVarProject = 
		{
			seoTitleProjectVar: "My Projects",
			seoDescriptionProjectVar: "Work hard make history.",
		}
	
	
	let subTitlePageVarProject = {
			subTitlePageProjectVar: "Project",
			subTitlePrimaryProjectVar: "Work hard make history",
			subTitleForeignProjectVar: "",
			subTitleVariantPrimaryProjectVar: "text-slate-100 text-4xl mb-5",
			subTitleVariantForeignProjectVar: "text-indigo-200 text-2xl mb-16"
	}
	
	let subTitleSecondPageVarProject = 
	{
		subTitlePrimaryProjectVar: "Have a project in mind?",
		subTitleForeignProjectVar: "Let's get to work",
		subTitleVariantPrimaryProjectVar: "text-slate-100 text-4xl mb-5",
		subTitleVariantForeignProjectVar: "text-slate-100 text-4xl mb-16"
	}
	

	return [projects, tools, seoVarProject, subTitlePageVarProject, subTitleSecondPageVarProject];
}

export default projectData;