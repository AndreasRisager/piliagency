import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import CTA from "../../components/CTA";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../components/RichTextComponents";
import Link from "next/link";

export default function CreatorPage({ creator }) {
	return (
		<Layout
			title={creator?.name}
			image={urlForImage(creator?.images?.[0]).url()}>
			<main className="max-w-7xl w-screen mx-auto px-4 md:mt-12 mb-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
					<div
						className={`lg:col-span-3 ${
							creator?.images.length > 1 && "columns-2 space-y-4"
						}`}>
						{creator?.images?.map((image, index) => (
							<Image
								className="w-full"
								src={urlForImage(image).url()}
								height={400}
								width={400}
								priority={index < 4}
								key={image._key}
								alt={image.asset.altText}
								placeholder={image.asset.metadata?.lqip ? "blur" : "empty"}
								blurDataURL={image.asset.metadata?.lqip}
							/>
						))}
					</div>
					<div className="lg:col-span-2 relative">
						{creator.tags && (
							<div className="overflow-hidden w-full">
								<ul className="flex flex-nowrap whitespace-nowrap space-x-7 overflow-x-auto pb-2 border-b no-scrollbar">
									{creator.tags.map((tag) => (
										<li
											className="first-of-type:list-none list-item list-disc list"
											key={tag}>
											{tag}
										</li>
									))}
								</ul>
							</div>
						)}
						<div className="pt-5 pb-4 sticky top-[72px] bg-white supports-[backdrop-filter]:bg-white/90 supports-[backdrop-filter]:backdrop-blur-sm">
							<h1 className="text-[2.5rem] leading-none tracking-wide font-light">
								{creator.name}
							</h1>
							{creator?.instagram && (
								<p className="font-light text-neutral-600">
									<Link
										href={`https://www.instagram.com/${creator?.instagram}/`}
										target="_blank"
										rel="noopener">
										@{creator.instagram}
									</Link>
									{creator?.audience?.followers &&
										`, ${creator.audience.followers} followers`}
								</p>
							)}
						</div>
						<PortableText value={creator.bio} components={RichTextComponents} />
					</div>
				</div>
			</main>
			<CTA />
		</Layout>
	);
}

export async function getStaticPaths() {
	const query = groq`
    *[_type=='creators'] | order(_createdAt desc) {
        slug,
    }
    `;
	const creators = await client.fetch(query);

	const paths = creators.map((item) => {
		return {
			params: { slug: `${item.slug.current}` },
		};
	});
	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params: { slug } }) {
	if (!slug) {
		return {
			notFound: true,
		};
	}

	const query = groq`
    *[_type=='creators' && slug.current == $slug][0] {
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
        creators[]->,
    }
    `;
	const creator = await client.fetch(query, { slug });

	return { props: { creator }, revalidate: 30 };
}
