import React from "react";

export default function CaseVideoGallery({ block }) {
	return (
		<div
			className="flex flex-wrap sm:flex-nowrap gap-4 rounded-md bg-gray-100 p-4 justify-evenly my-4"
			id={block._type + "_" + block._key}>
			{block?.videos?.map((video) => (
				<figure key={video._key} className="mx-auto">
					<video
						controls
						disablePictureInPicture={true}
						disableRemotePlayback={true}
						src={video.asset.url}
						alt={"video"}
						className="w-auto h-auto sm:h-[35vh] md:h-[50vh] lg:h-[60vh] xl:h-[75vh] max-h-[1080px] mx-auto rounded-md"
						height={800}
						width={500}
					/>
				</figure>
			))}
		</div>
	);
}
