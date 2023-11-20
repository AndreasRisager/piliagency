import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../sanity/lib/image";

export default function CaseCard({ title, slug, thumbnail }) {
	return (
		<Link href={"/cases/" + slug.current} className="group w-full h-full">
			<figure
				className={`group-hover:ring ring-black ring-offset-1 rounded-[4px] transition-all h-[227px] bg-beige overflow-hidden`}>
				{thumbnail?.asset && (
					<Image
						width={403}
						height={227}
						src={urlForImage(thumbnail).width(403).height(227).url()}
						alt={thumbnail.alt + " - " + title || title}
						className={`object-cover w-full h-full bg-beige`}
						placeholder={thumbnail.asset.metadata?.lqip ? "blur" : "empty"}
						blurDataURL={thumbnail.asset.metadata?.lqip}
						priority
					/>
				)}
			</figure>
			<p className="text-black text-center md:text-lg my-2">{title}</p>
		</Link>
	);
}
