import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "./RichTextComponents";
import { urlForImage } from "../sanity/lib/image";

export default function Partners({ block }) {
	return (
		<section className="max-w-7xl mx-auto px-4 my-32">
			<div className="max-w-4xl mx-auto text-center mb-8">
				<h2 className="text-3xl font-medium uppercase break-words">
					{block?.title}
				</h2>
				<Balancer>
					<PortableText
						value={block?.description}
						components={RichTextComponents}
					/>
				</Balancer>
			</div>
			<div className="flex flex-wrap gap-4 justify-between items-center w-full">
				{block?.images &&
					block.images.map((image) => (
						<Image
							key={image._key}
							src={urlForImage(image).url()}
							width={100}
							height={50}
							className="mx-auto max-h-12 object-contain basis-28"
						/>
					))}
			</div>
		</section>
	);
}
