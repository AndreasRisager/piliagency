import Image from "next/image";
import { urlForImage } from "../sanity/lib/image";
import Link from "next/link";

export default function Creator({
	item: { index, name, images, instagram, audience, slug },
}) {
	return (
		<article className="flex flex-col gap-2 max-w-sm group">
			<Link href={`/creators/${slug.current}`}>
				{images && (
					<figure>
						<Image
							width="384"
							height="511"
							src={urlForImage(images?.[0]).width(384).height(511).url()}
							priority={index < 3}
							alt={name}
							className="object-cover group-hover:ring group-hover:ring-black group-hover:ring-offset-1 rounded-[4px] transition-all"
							key={images?.[0]}
						/>
					</figure>
				)}
				<div className="p-2">
					<h2 className="text-xl text-neutral-600 capitalize font-light">
						{name}
					</h2>
					{instagram && (
						<p className="font-light text-sm text-neutral-600">
							@{instagram}
							{audience?.followers && `, ${audience.followers} followers`}
						</p>
					)}
				</div>
			</Link>
		</article>
	);
}
