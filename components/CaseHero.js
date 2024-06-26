import React, { useEffect } from "react";
import { urlForImage } from "../sanity/lib/image";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function CaseHero({ block }) {
	return (
		<>
			<div
				className="mt-24 mb-8 relative flex flex-col lg:w-[80%]"
				id={block._type + "_" + block._key}>
				<div className="border rounded-full px-4 py-2 text-gray-500 uppercase w-fit">
					<span>
						{block.name}
						{block?.publishedAt && (
							<>
								{` - ${new Date(block.publishedAt).toLocaleDateString("da-DK", {
									month: "long",
									year: "numeric",
								})}`}
							</>
						)}
					</span>
				</div>

				<h1 className="text-4xl md:text-6xl font-serif mt-4 leading-snug md:leading-snug tracking-wide">
					<Balancer>{block?.title}</Balancer>
				</h1>
				{block?.description && (
					<h2 className="text-xl leading-relaxed mt-2">
						<Balancer>{block.description}</Balancer>
					</h2>
				)}
			</div>
			<div className="gap-3 flex flex-wrap content-center">
				{block.results.map((result) => {
					return (
						<div
							key={result._key}
							className={`flex-shrink-0 flex-grow basis-52 relative rounded-xl overflow-hidden border-2 border-slate-400/10 bg-neutral-100 p-2 flex flex-col items-center justify-center text-center`}>
							<div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
							<div className="relative">
								<h4 className="text-sm md:text-base uppercase font-medium">
									{result.title}
								</h4>
								<h3 className="text-lg md:text-3xl font-serif">
									{result.data}
								</h3>
							</div>
						</div>
					);
				})}
			</div>
			{block?.image && (
				<figure className="my-4">
					<Image
						src={urlForImage(block.image).url()}
						alt={
							block.image.asset.altText
								? block.image.asset.altText
								: "case hero"
						}
						placeholder={block.image.asset.metadata?.lqip ? "blur" : "empty"}
						blurDataURL={block.image.asset.metadata?.lqip}
						className="object-cover w-full rounded-md bg-gray-100 h-auto max-h-[1080px]"
						height={1080}
						width={1504}
						priority
					/>
				</figure>
			)}
		</>
	);
}
