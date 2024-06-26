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
			image={
				creator?.images?.[0] ? urlForImage(creator?.images?.[0]).url() : ""
			}>
			<main className="max-w-screen-2xl mx-auto px-4 md:mt-12 mb-20">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
					<div
						className={`order-2 md:order-none ${
							creator?.images.length > 1 ? "columns-2 space-y-4" : ""
						}`}>
						{creator?.images?.map((image, index) => (
							<Image
								className="w-full"
								src={urlForImage(image).url()}
								height={1091}
								width={728}
								priority={index < 4}
								key={image._key}
								alt={image.asset.altText || creator?.name}
								placeholder={image.asset.metadata?.lqip ? "blur" : "empty"}
								blurDataURL={image.asset.metadata?.lqip}
							/>
						))}
					</div>
					<div className="relative">
						{creator?.tags && (
							<div className="overflow-hidden w-full">
								<ul className="flex flex-nowrap whitespace-nowrap gap-2 overflow-x-auto no-scrollbar">
									{creator.tags.map((tag) => (
										<li
											className="text-sm border rounded-full py-1 px-3.5 text-gray-600"
											key={tag}>
											{tag}
										</li>
									))}
								</ul>
							</div>
						)}
						<div className="pt-4 pb-4 sticky top-[65px] bg-white supports-[backdrop-filter]:bg-white/90 supports-[backdrop-filter]:backdrop-blur-sm">
							<h1 className="text-[2.5rem] leading-none tracking-wide font-light pb-2">
								{creator?.name}
							</h1>
							{creator?.medialinks?.length > 0 && (
								<div className="flex flex-wrap gap-2">
									{creator?.medialinks?.map((link, index) => {
										let imgSrc = "";
										if (link.icon.svg) {
											let encodedSvg = encodeURIComponent(link.icon.svg);
											imgSrc = `data:image/svg+xml,${encodedSvg}`;
										}

										return (
											<p
												className="font-light text-neutral-600 flex-grow-0"
												key={link._key}>
												<Link
													href={link.url}
													target="_blank"
													rel="noopener"
													className="flex gap-1">
													{imgSrc && <img src={imgSrc} />}
													{link.text}
													{creator?.medialinks?.length - 1 !== index && ","}
												</Link>
											</p>
										);
									})}
								</div>
							)}
						</div>
						<PortableText
							value={creator?.bio}
							components={RichTextComponents}
						/>
					</div>
				</div>
			</main>
			<CTA />
		</Layout>
	);
}

export async function getStaticProps({ params: { slug } }) {
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

	if (!creator) {
		return {
			notFound: true,
		};
	}

	return { props: { creator }, revalidate: 30 };
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
