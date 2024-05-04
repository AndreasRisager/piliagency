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
import { RichTextComponents } from "./RichTextComponents";
import { PortableText } from "@portabletext/react";

export default function PageBuilder({ block }) {
	const Components = {
		caseHero: CaseHero,
		textEditor: ({ block }) => (
			<section id={block._type + "_" + block._key}>
				<PortableText value={block?.content} components={RichTextComponents} />
			</section>
		),
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
	let Component = Components[block._type];

	// component does exist
	if (typeof Components[block?._type] !== "undefined") {
		return <Component key={block?._key} block={block} />;
	}
	// component doesn't exist yet
	return <div>The component {block?._type} has not been created yet.</div>;
}
