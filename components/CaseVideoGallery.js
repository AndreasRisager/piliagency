import React from "react";

export default function CaseVideoGallery({ block }) {
	return (
		<div className="flex flex-wrap sm:flex-nowrap gap-4 rounded-md bg-gray-100 p-4 justify-evenly my-4">
			{block?.videos?.map((video) => (
				<figure key={video._key} className="my-4 mx-auto">
					<video
						controls
						disablePictureInPicture={true}
						disableRemotePlayback={true}
						loop
						src={video.asset.url}
						alt={"video"}
						className="w-auto h-auto sm:h-[35vh] md:h-[50vh] lg:h-[60vh] xl:h-[75vh] mx-auto rounded-md"
						height={800}
						width={500}
					/>
				</figure>
			))}
		</div>
	);
}
