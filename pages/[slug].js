import React from "react";
import { groq } from "next-sanity";
import Layout from "../components/Layout";
import CTA from "../components/CTA";
import { client } from "../sanity/lib/client";
import PageBuilder from "../components/PageBuilder";

export default function Pages({ page }) {
	return (
		<Layout title={page?.title} description={page?.description}>
			<main className="max-w-7xl w-screen mx-auto md:mt-12 mb-20">
				{page?.pageBuilder?.map((block, index) => (
					<PageBuilder block={block} key={block._key || index} />
				))}
			</main>
			<CTA />
		</Layout>
	);
}

export async function getStaticProps({ params: { slug } }) {
	const query = groq`
    *[_type=='pages' && slug.current == $slug][0] {
        ...,
		images[] {
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
        pageBuilder[] {
            ...,
            creators[]->,
			button {
				...,
				internal-> {
					...,
					slug,
				}
			},
        }
    }
    `;
	const page = await client.fetch(query, { slug });

	if (!page) {
		return {
			notFound: true,
		};
	}

	return { props: { page }, revalidate: 30 };
}

export async function getStaticPaths() {
	const query = groq`
    *[_type=='pages'] | order(_createdAt desc) {
        slug,
    }
    `;
	const pages = await client.fetch(query);

	const paths = pages.map((item) => {
		return {
			params: { slug: `${item.slug.current}` },
		};
	});
	return {
		paths,
		fallback: true,
	};
}
