import Image from "next/image";
import React from "react";
import { urlForImage } from "../sanity/lib/image";
import Link from "next/link";

export default function CaseCreators({ block }) {
	return (
		<div className="bg-gray-100 py-24 rounded-md my-4">
			<div className="max-w-[1920px] mx-auto flex flex-wrap gap-x-3 gap-y-8 p-4 justify-evenly">
				{block?.creators?.map((creator) => (
					<div key={creator._id}>
						{creator?.images && (
							<Image
								src={
									creator?.images[0] && urlForImage(creator?.images[0]).url()
								}
								alt={creator?.name}
								className="object-cover rounded-full mx-auto aspect-square"
								height={300}
								width={300}
							/>
						)}
						{creator?.name && (
							<h3 className="text-3xl md:text-4xl md:leading-[3rem] whitespace-pre-line text-center mt-4 text-gray-900 hover:text-gray-500">
								<Link href={"/creators/" + creator.slug.current}>
									{creator?.name}
								</Link>
							</h3>
						)}
						{creator?.audience?.followers && (
							<p className="text-xl whitespace-pre-line text-center text-gray-600">
								{creator?.audience?.followers} følgere
							</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
