import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { urlForImage } from "../sanity/lib/image";
import Image from "next/image";

export default function Hero({ block }) {
	return (
		<section className="flex flex-col items-center mt-16 mb-24">
			<div className="max-w-7xl mx-auto text-center">
				<h1 className="text-[2.7rem] leading-none font-serif font-medium mb-4 text-gray-700 md:text-5xl lg:text-6xl xl:text-7xl">
					{block?.title}
				</h1>
				<p className="text-lg text-gray-500 sm:max-w-md md:max-w-3xl mx-auto md:text-xl lg:text-2xl">
					<Balancer>{block?.description}</Balancer>
				</p>
				<div className="flex justify-center mt-6 gap-4">
					<Link
						href="/kontakt"
						className="border rounded-md text-lg px-6 py-2 font-medium bg-beige text-white hover:bg-beigehover hover:ring-2 hover:ring-beigehover">
						Kontakt os
					</Link>
					<button
						onClick={() =>
							window.scrollTo({
								top: 1200,
								behavior: "smooth",
							})
						}
						className="border rounded-md text-lg px-6 py-2 font-medium hover:bg-beigehover hover:ring-2 hover:ring-beigehover">
						Læs mere
					</button>
				</div>
				{block.image && (
					<figure className="mt-20">
						<Image
							key={block._key}
							src={urlForImage(block.image).width(1280).height(720).url()}
							priority
							width={1280}
							height={720}
							alt={block.image.asset.altText || "hero"}
							className="object-cover"
							placeholder={block.image.asset.metadata?.lqip ? "blur" : "empty"}
							blurDataURL={block.image.asset.metadata?.lqip}
						/>
					</figure>
				)}
			</div>
		</section>
	);
}
