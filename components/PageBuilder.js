import React from "react";
import CaseHero from "./CaseHero";
import CaseTextContent from "./CaseTextContent";
import CaseCreators from "./CaseCreators";
import Gallery from "./Gallery";
import CaseVideoGallery from "./CaseVideoGallery";
import Hero from "./Hero";
import Partners from "./Partners";
import AboutUs from "./AboutUs";
import Feature from "./Feature";
import FeaturedCases from "./FeaturedCases";

const Components = {
	caseHero: CaseHero,
	textContent: CaseTextContent,
	showCreators: CaseCreators,
	gallery: Gallery,
	videoGallery: CaseVideoGallery,
	hero: Hero,
	partners: Partners,
	about: AboutUs,
	feature: Feature,
	featuredCases: FeaturedCases,
};

export default function PageBuilder({ block }) {
	let Component = Components[block._type];

	// component does exist
	if (typeof Components[block?._type] !== "undefined") {
		return <Component key={block?._key} block={block} />;
	}
	// component doesn't exist yet
	return <div>The component {block?._type} has not been created yet.</div>;
}
