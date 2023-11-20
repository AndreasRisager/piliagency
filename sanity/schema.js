import { home } from "./schemas/home";
import { hero } from "./schemas/home/hero";
import { cases } from "./schemas/cases";
import { creators } from "./schemas/creators";
import { blockContent } from "./schemas/blockContent";
import { feature } from "./schemas/home/feature";
import { caseHero } from "./schemas/case/hero";
import { textContent } from "./schemas/case/textContent";
import { showCreators } from "./schemas/case/showCreators";
import { gallery } from "./schemas/case/gallery";
import { videoGallery } from "./schemas/case/videoGallery";
import { partners } from "./schemas/home/partners";
import { about } from "./schemas/home/about";
import { partnersPage } from "./schemas/partnersPage";
import { featuredCases } from "./schemas/home/featuredCases";

export const schema = {
	types: [
		home,
		hero,
		cases,
		creators,
		partnersPage,
		feature,
		blockContent,
		caseHero,
		textContent,
		showCreators,
		gallery,
		videoGallery,
		partners,
		about,
		featuredCases,
	],
};
