import Image from "next/image";
import React from "react";
import { urlForImage } from "../sanity/lib/image";

export default function Gallery({ block }) {
	if (block.display === "fullWidth") {
		return block?.images?.map((image) => (
			<figure
				key={image._key}
				className="my-4"
				id={block._type + "_" + block._key}>
				<Image
					src={urlForImage(image).url()}
					alt={image.asset.altText}
					className="object-cover w-full rounded-md bg-gray-100 h-auto max-h-innerheight"
					height={1080}
					width={1920}
					placeholder={image.asset.metadata?.lqip ? "blur" : "empty"}
					blurDataURL={image.asset.metadata?.lqip}
				/>
				{image.asset?.title && (
					<figcaption className="text-center text-gray-600 max-w-xl mx-auto mt-2 mb-6">
						{image.asset.title}
					</figcaption>
				)}
			</figure>
		));
	}
	if (block.display === "stacked") {
		return (
			<div
				className="columns-2 space-y-4 my-4"
				id={block._type + "_" + block._key}>
				{block?.images?.map((image) => (
					<figure key={image._key}>
						<Image
							src={urlForImage(image).url()}
							alt={image.asset.altText}
							className="object-cover rounded-md bg-gray-100 w-full"
							height={1080}
							width={936}
							placeholder={image.asset.metadata?.lqip ? "blur" : "empty"}
							blurDataURL={image.asset.metadata?.lqip}
						/>
						{image.asset?.title && (
							<figcaption className="text-center text-gray-600 max-w-xl mx-auto mt-2 mb-6">
								{image.asset.title}
							</figcaption>
						)}
					</figure>
				))}
			</div>
		);
	}
	return (
		<div
			className="flex flex-wrap sm:flex-nowrap gap-4 my-4"
			id={block._type + "_" + block._key}>
			{block?.images?.map((image) => (
				<figure key={image._key} className="w-[calc(50%-0.5rem)] my-4 mx-auto">
					<Image
						src={urlForImage(image).url()}
						alt={image.asset.altText}
						className="w-full rounded-md bg-gray-100 h-auto max-h-innerheight object-cover"
						height={676}
						width={1004}
						placeholder={image.asset.metadata?.lqip ? "blur" : "empty"}
						blurDataURL={image.asset.metadata?.lqip}
					/>
					{image.asset?.title && (
						<figcaption className="text-center text-gray-600 max-w-xl mx-auto px-2 pt-2 pb-6">
							{image.asset.title}
						</figcaption>
					)}
				</figure>
			))}
		</div>
	);
}
