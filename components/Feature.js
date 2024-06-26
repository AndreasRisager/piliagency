import Image from "next/image";
import { urlForImage } from "../sanity/lib/image";
import Balancer from "react-wrap-balancer";
import LinkButton from "./LinkButton";

export default function Feature({ block }) {
	return (
		<section
			className="max-w-7xl mx-auto my-32"
			id={block._type + "_" + block._key}>
			{!block.fullWidth ? (
				<div
					className="grid sm:grid-cols-2 items-center gap-8"
					key={block._key}>
					<div className="space-y-4">
						<h3 className="text-4xl lg:text-5xl lg:leading-tight leading-tight font-medium text-gray-800 mb-3">
							<Balancer>{block.title}</Balancer>
						</h3>
						<p className="text-gray-600 leading-8 text-lg">{block.text}</p>
						{block?.button ? (
							<LinkButton href={block.button}>{block.button?.text}</LinkButton>
						) : null}
					</div>
					<div>
						<Image
							height="833"
							width="1248"
							src={urlForImage(block.image).width(1248).url()}
							alt={block.image.asset.altText || "feature"}
							className="w-full rounded-md"
							placeholder={block.image.asset.metadata?.lqip ? "blur" : "empty"}
							blurDataURL={block.image.asset.metadata?.lqip}
						/>
					</div>
				</div>
			) : (
				<div className="space-y-8" key={block._key}>
					<div className="grid sm:grid-cols-2 gap-4">
						<div className="">
							<h3 className="text-4xl lg:text-5xl lg:leading-tight leading-tight font-medium text-gray-800 mb-3">
								<Balancer>{block.title}</Balancer>
							</h3>
							{block?.button ? (
								<LinkButton href={block.button}>
									{block.button?.text}
								</LinkButton>
							) : null}
						</div>
						<p className="text-gray-600 leading-8 text-lg">{block.text}</p>
					</div>
					<div>
						<Image
							height="1248"
							width="1248"
							src={urlForImage(block.image).width(1248).url()}
							quality={100}
							alt={block.image.asset.altText || "feature"}
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
