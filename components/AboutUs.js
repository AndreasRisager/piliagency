import Image from "next/image";
import React from "react";
import Balancer from "react-wrap-balancer";
import { urlForImage } from "../sanity/lib/image";

export default function AboutUs({ block }) {
	return (
		<section
			className="max-w-7xl mx-auto my-32"
			id={block._type + "_" + block._key}>
			<Image
				src={urlForImage(block?.image).width(1280).url()}
				width={1280}
				height={800}
				className="w-full max-h-[800px] object-cover"
				placeholder={block.image.asset.metadata?.lqip ? "blur" : "empty"}
				blurDataURL={block.image.asset.metadata?.lqip}
			/>
			<div className="px-4 max-w-4xl mx-auto text-center -mt-12">
				<div className="bg-white rounded-md p-8 supports-[backdrop-filter]:bg-white/90 supports-[backdrop-filter]:backdrop-blur-sm">
					<h2 className="text-4xl lg:text-5xl lg:leading-tight leading-tight font-medium text-gray-800 mb-3">
						<Balancer>{block?.title}</Balancer>
					</h2>
					<p className="text-gray-600 leading-8 text-xl">
						{block?.description}
					</p>
				</div>
			</div>
		</section>
	);
}
