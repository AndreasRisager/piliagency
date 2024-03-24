import React from "react";
import Layout from "../../components/Layout";
import CTA from "../../components/CTA";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";
import PageBuilder from "../../components/PageBuilder";

export default function CasePage({ caseItem }) {
	console.log(caseItem);
	return (
		<Layout
			title={caseItem?.title}
			image={caseItem?.thumbnail ? urlForImage(caseItem.thumbnail).url() : ""}>
			<main className="max-w-[1920px] w-screen mx-auto px-4 overflow-hidden">
				{caseItem?.pageBuilder?.map((block, index) => (
					<PageBuilder block={block} key={block._key || index} />
				))}
			</main>
			<CTA />
		</Layout>
	);
}

export async function getStaticProps({ params: { slug } }) {
	const query = groq`
    *[_type=='cases' && slug.current == $slug][0] {
        ...,
		pageBuilder[] {
			...,
			_type == "caseHero" => {
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
							"palette": palette.lightMuted,
							lqip,
						}
					},
				},
			},
			_type == "showCreators" => {
				...,
				creators[]->,
			},
			_type == "gallery" => {
				...,
				images[] {
					...,
					asset-> {
						_ref,
    					_type,
						url,
    					altText,
						title,
						metadata {
							lqip,
						}
					},
				},
			},
			_type == "videoGallery" => {
				...,
				videos[]{
					...,
					asset->{url}
				},
			},
		},
    }
    `;
	const caseItem = await client.fetch(query, { slug });

	if (!caseItem) {
		return {
			notFound: true,
		};
	}

	return { props: { caseItem }, revalidate: 30 };
}

export async function getStaticPaths() {
	const query = groq`
    *[_type=='cases'] | order(_createdAt desc) {
        slug,
    }
    `;
	const casesItems = await client.fetch(query);

	const paths = casesItems.map((item) => {
		return {
			params: { slug: `${item.slug.current}` },
		};
	});
	return {
		paths,
		fallback: true,
	};
}
