import Image from "next/image";
import { urlForImage } from "../sanity/lib/image";
import Balancer from "react-wrap-balancer";

export default function Feature({ block }) {
	return (
		<section className="px-4 max-w-7xl mx-auto my-32">
			{!block.fullWidth ? (
				<div
					className="grid sm:grid-cols-2 items-center gap-4"
					key={block._key}>
					<div className="space-y-4">
						<h3 className="text-4xl lg:text-5xl lg:leading-tight leading-tight font-medium text-gray-800 mb-3">
							<Balancer>{block.title}</Balancer>
						</h3>
						<p className="text-gray-600 leading-8 text-lg">{block.text}</p>
					</div>
					<div>
						<Image
							height="833"
							width="1248"
							src={urlForImage(block.image).width(1248).url()}
							alt={block.image.asset.altText}
							className="w-full rounded-md"
							placeholder={block.image.asset.metadata?.lqip ? "blur" : "empty"}
							blurDataURL={block.image.asset.metadata?.lqip}
						/>
					</div>
				</div>
			) : (
				<div className="space-y-8" key={block._key}>
					<div className="grid sm:grid-cols-2 gap-4">
						<h3 className="text-4xl lg:text-5xl lg:leading-tight leading-tight font-medium text-gray-800 mb-3">
							<Balancer>{block.title}</Balancer>
						</h3>
						<p className="text-gray-600 leading-8 text-lg">{block.text}</p>
					</div>
					<div>
						<Image
							height="924"
							width="616"
							src={urlForImage(block.image).width(616).url()}
							alt={block.image.asset.altText}
							className="w-full rounded-md"
							placeholder={block.image.asset.metadata?.lqip ? "blur" : "empty"}
							blurDataURL={block.image.asset.metadata?.lqip}
						/>
					</div>
				</div>
			)}
		</section>
	);
}
