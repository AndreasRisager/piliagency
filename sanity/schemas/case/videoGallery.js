import { DocumentVideoIcon } from "@sanity/icons";

export const videoGallery = {
	name: "videoGallery",
	title: "Video Gallery",
	type: "object",
	icon: DocumentVideoIcon,
	fields: [
		{
			name: "videos",
			type: "array",
			title: "Videos",
			of: [
				{
					title: "Video",
					name: "video",
					type: "file",
					accept: "video/mp4",
				},
			],
		},
	],
	preview: {
		select: {
			videos: "videos",
		},
		prepare(selection) {
			const { videos } = selection;
			const amount = Object.keys(videos).length;

			return {
				title: `${amount} ${amount > 1 ? "Videos" : "Video"}`,
				subtitle: "[Video gallery]",
			};
		},
	},
};
