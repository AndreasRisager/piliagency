import CTA from "../components/CTA";
import Layout from "../components/Layout";
import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";
import PageBuilder from "../components/PageBuilder";

export default function Home({ home }) {
	return (
		<Layout>
			<main>
				{home?.pageBuilder?.map((block, index) => (
					<PageBuilder block={block} key={block._key || index} />
				))}
			</main>
			<CTA />
		</Layout>
	);
}

const query = groq`
  *[_type=='home'][0] {
  ...,
  pageBuilder[] {
			...,
			_type == "hero" => {
				...,
				image {
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
			},
			_type == "featuredCases" => {
				...,
				cases[]-> {
					_id,
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
				},
			},
			_type == "about" => {
				...,
				image {
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
			},
			_type == "feature" => {
				...,
				image {
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
			},
		},
}
`;

export async function getStaticProps() {
	const home = await client.fetch(query);

	return { props: { home }, revalidate: 60 };
}
