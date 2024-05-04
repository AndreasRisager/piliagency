import React from "react";

export default function CaseTextContent({ block }) {
	return (
		<div
			className="max-w-7xl mx-auto my-32"
			id={block._type + "_" + block._key}>
			{block.title && (
				<h2 className="text-2xl md:text-3xl text-gray-500 mb-4">
					{block.title}
				</h2>
			)}
			{block.text && (
				<h3 className="text-3xl md:text-4xl md:leading-[3rem] whitespace-pre-line">
					{block.text}
				</h3>
			)}
		</div>
	);
}
