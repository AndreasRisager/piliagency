import Balancer from "react-wrap-balancer";
import Layout from "../components/Layout";
import CTA from "../components/CTA";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "../sanity/lib/client";
import { urlForImage } from "../sanity/lib/image";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Partners({ partners }) {
	const [images, setImages] = useState(partners.images || []);

	async function getMoreImages() {
		const newImages = await client.fetch(
			groq`*[_type=='partnersPage'][0] {
				images[${images.length}...${images.length + 10}]{
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
			}`
		);

		setImages((prevImages) => [...prevImages, ...newImages.images]);
	}

	return (
		<Layout title="Partners">
			<main className="max-w-7xl mx-auto px-4 mb-20">
				<div className="mt-12 mb-24 text-center max-w-4xl mx-auto">
					<h1 className="text-[2.7rem] leading-none font-serif font-medium mb-4 text-gray-700 md:text-5xl lg:text-6xl xl:text-7xl break-words">
						{partners.title}
					</h1>
					<p className="text-lg text-gray-500 sm:max-w-md md:max-w-3xl mx-auto md:text-xl lg:text-2xl">
						<Balancer>{partners.description}</Balancer>
					</p>
				</div>
				<InfiniteScroll
					className="flex flex-wrap gap-2 justify-center"
					dataLength={images.length}
					next={getMoreImages}
					hasMore={images.length !== partners.imageCount}
					loader={<p className="text-center">Loading...</p>}>
					{images?.map((image) => (
						<figure
							className="border hover:shadow flex items-center justify-center p-4 rounded-md aspect-square basis-[calc(50%-0.5rem)] sm:basis-[200px] shrink-0"
							key={image._key}>
							<Image
								src={image.asset && urlForImage(image).width(200).url()}
								alt={image.asset.altText ?? "partner"}
								height={200}
								width={200}
								placeholder={image.asset.metadata?.lqip ? "blur" : "empty"}
								blurDataURL={image.asset.metadata?.lqip}
								className="rounded-sm aspect-square object-contain"
							/>
						</figure>
					))}
				</InfiniteScroll>
			</main>
			<CTA subheading="Tøv ikke med at kontakte os." />
		</Layout>
	);
}

const query = groq`
  *[_type=='partnersPage'][0] {
  title, description, "imageCount": count(images),
  images[0...20] {
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
	const partners = await client.fetch(query);

	return { props: { partners }, revalidate: 60 };
}
