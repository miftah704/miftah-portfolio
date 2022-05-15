import { useState } from 'react';

import LineCurrentLeftCv from '../../components/Svg/LineCurrentLeftCv';
import LineLastRightCv from '../../components/Svg/LineLastRightCv';
import LineLastLeftCv from '../../components/Svg/LineLastLeftCv';

function cvData() {

	// eslint-disable-next-line react-hooks/rules-of-hooks
	let [cvs] = useState([
		
		{
			untilDateVar: "DECEMBER 2019 - NOW.",
			positionVar: "Software Engineer",
			linkDetailVar: "https://sunplan-co.jp/",
			ariaLabelLinkVar: "website",
			companyNameVar: "株式会社 サンプラン",
			companyAddressVar: "3-6-13 Higashikoiwa, Edogawa-ku, Tokyo 133-0052",
			jobStatusVar: "Work",
			bottomVariantVar: "-bottom-[9.7rem]",
			bnBVariantVar: "bg-indigo-900 border-4 border-slate-700",
			bgStatusVariantVar: "bg-slate-700",
			childrenVar: <LineCurrentLeftCv />
		},
		{
			untilDateVar: "JANUARY - JUNE 2019.",
			positionVar: "Software Engineer",
			linkDetailVar: "https://odesa.id/",
			ariaLabelLinkVar: "website",
			companyNameVar: "Odesa Indonesia",
			companyAddressVar: "Bandung, Indonesian",
			jobStatusVar: "Thesis",
			bottomVariantVar: "-bottom-[9rem]",
			bnBVariantVar: "bg-slate-800 border-4 border-indigo-900",
			bgStatusVariantVar: "bg-indigo-900",
			childrenVar: <LineLastRightCv />
		},
		{
			untilDateVar: "JULY - OCTOBER 2017.",
			positionVar: "Web Developer",
			linkDetailVar: "http://www.adetex.co.id",
			ariaLabelLinkVar: "website",
			companyNameVar: "Adetex Ltd.",
			companyAddressVar: "Bandung, Indonesian",
			jobStatusVar: "practical",
			bottomVariantVar: "-bottom-[9rem]",
			bnBVariantVar: "bg-slate-800 border-4 border-indigo-900",
			bgStatusVariantVar: "bg-indigo-900",
			childrenVar: <LineLastLeftCv />
		},
		{
			untilDateVar: "JANUARY - APRIL 2016.",
			positionVar: "Designer & Web Developer",
			linkDetailVar: "https://mometri.com/",
			ariaLabelLinkVar: "website",
			companyNameVar: "Mometri",
			companyAddressVar: "Bandung, Indonesian",
			jobStatusVar: "Freelance",
			bottomVariantVar: "-bottom-[9rem]",
			bnBVariantVar: "bg-slate-800 border-4 border-indigo-900",
			bgStatusVariantVar: "bg-indigo-900",
			childrenVar: <LineLastRightCv />
		},
		{
			untilDateVar: "FEBRUARY - JUNE 2013.",
			positionVar: "Web Developer",
			linkDetailVar: "https://subang.go.id/",
			ariaLabelLinkVar: "website",
			companyNameVar: "The Department of communication and Information (Subang).",
			companyAddressVar: "Jln. Mayjen Sutoyo No. 46 Subang",
			jobStatusVar: "Practical",
			bottomVariantVar: "-bottom-[9rem]",
			bnBVariantVar: "bg-slate-800 border-4 border-indigo-900",
			bgStatusVariantVar: "bg-indigo-900",
			childrenVar: ""
		},
	])
	
	const seoVar = {
		seoTitleVar: "About Me",
		seoDescriptionVar: "Hi, I am a Software Engineer. Since I was 18 years old I love coding and making it as both a passion and a hobby. During my career I have had the opportunity to open and develop My skills are both hard skills and soft skills. I have the ability to work individually or in a team."
	}
	const bannerVar = {
		titlePrimaryVar: "Miftah Shidiq",
		titleForeignVar: "Software Engineer",
		imageFeatureVar: "/feature-about.png",
		wImageVar: "500",
		hImageVar: "500",
	}
	const subTitlePageVar = {
		subTitlePrimaryVar: "Curriculum Vitae",
		subTitleForeignVar: "What happened until now...",
		subTitleVariantPrimaryVar: "text-slate-100 text-4xl mb-5",
		subTitleVariantForeignVar: "text-indigo-200 text-2xl mb-16"
	}

	return [cvs, seoVar, bannerVar, subTitlePageVar];
}

export default cvData;