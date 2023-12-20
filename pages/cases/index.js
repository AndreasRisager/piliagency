import { groq } from "next-sanity";
import CaseCard from "../../components/CaseCard";
import CTA from "../../components/CTA";
import Layout from "../../components/Layout";
import { client } from "../../sanity/lib/client";
import Balancer from "react-wrap-balancer";

export default function cases({ caseItems }) {
	return (
		<Layout title="Cases">
			<main>
				<div className="max-w-7xl mx-auto px-4 mt-12 mb-24 text-center">
					<h1 className="text-[2.7rem] leading-none font-serif font-medium mb-4 text-gray-700 md:text-5xl lg:text-6xl xl:text-7xl">
						Udforsk vores
						<br />
						tidligere cases
					</h1>
					<p className="text-lg text-gray-500 sm:max-w-md md:max-w-3xl mx-auto md:text-xl lg:text-2xl">
						<Balancer>
							Dyk ned i vores influencer marketing kampagner, og se, hvordan
							vores tidligere kampagner klarede sig.
						</Balancer>
					</p>
				</div>
				<section className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-case-card justify-center justify-items-center gap-4 mb-32">
					{caseItems.map((item, index) => (
						<CaseCard key={item + index} {...item} />
					))}
				</section>
			</main>
			<CTA subheading="Tøv ikke med at kontakte os." />
		</Layout>
	);
}

const query = groq`
	*[_type=='cases'] | order(_createdAt desc) {
	title,
	slug,
	thumbnail {
		...,
		asset-> {
			_ref,
			_type,
			_id,
			altText,
			title,
			metadata {
				lqip,
			}
		},
	},
}
`;

export async function getStaticProps() {
	const caseItems = await client.fetch(query);

	return { props: { caseItems }, revalidate: 60 };
}
