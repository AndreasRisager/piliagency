import { groq } from "next-sanity";
import Creator from "../../components/Creator";
import CTA from "../../components/CTA";
import Layout from "../../components/Layout";
import { client } from "../../sanity/lib/client";
import Balancer from "react-wrap-balancer";

export default function creators({ creatorItems }) {
	return (
		<Layout title="Creators">
			<main className="pb-20">
				<div className="max-w-7xl mx-auto px-4 mt-12 mb-24 text-center">
					<h1 className="text-[2.7rem] leading-none font-serif font-medium mb-4 text-gray-700 md:text-5xl lg:text-6xl xl:text-7xl">
						Mød vores
						<br />
						talentfulde creators
					</h1>
					<p className="text-lg text-gray-500 sm:max-w-md md:max-w-3xl mx-auto md:text-xl lg:text-2xl">
						<Balancer>
							Vores fremragende udvalg af influencere sikrer, at dit budskab når
							frem til de rigtige målgrupper. Skab forbindelser, nå målgrupper,
							og få resultater.
						</Balancer>
					</p>
				</div>
				<div className="container max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
					{creatorItems.map((item, index) => (
						<Creator key={item.name} item={{ ...item, index }} />
					))}
				</div>
			</main>
			<CTA
				heading="Har vi rette match til din næste kampagne?"
				subheading="Tøv ikke med at kontakte os."
			/>
		</Layout>
	);
}

const query = groq`
  *[_type=='creators'] {
  name, slug, images, medialinks,
  "palette": images[0].asset->metadata.palette.dominant,
}
`;

export async function getStaticProps() {
	const creatorItems = await client.fetch(query);

	return { props: { creatorItems }, revalidate: 60 };
}
