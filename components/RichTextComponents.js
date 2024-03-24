import Link from "next/link";
import React from "react";
import { urlForImage } from "../sanity/lib/image";
import Image from "next/image";

export const RichTextComponents = {
	types: {
		image: ({ value }) => (
			<div className="my-10">
				<Image
					className="w-full object-contain"
					src={urlForImage(value).width(1200).url()}
					alt="content image"
					width={1200}
					height={1200}
				/>
			</div>
		),
	},
	list: {
		bullet: ({ children }) => <ul className="ml-5 list-disc">{children}</ul>,
		number: ({ children }) => <ol className="ml-6 list-decimal">{children}</ol>,
	},
	block: {
		normal: ({ children }) => <p className="my-2">{children}</p>,
		h1: ({ children }) => <h1 className="text-5xl my-5">{children}</h1>,
		h2: ({ children }) => <h2 className="text-4xl my-5">{children}</h2>,
		h3: ({ children }) => <h3 className="text-3xl my-5">{children}</h3>,
		h4: ({ children }) => <h4 className="text-2xl my-5">{children}</h4>,
		h5: ({ children }) => <h5 className="text-xl my-5">{children}</h5>,
		h6: ({ children }) => <h6 className="text-lg my-5">{children}</h6>,

		blockquote: ({ children }) => (
			<blockquote className="border-l-beige border-l-4 pl-5 py-2 my-5">
				{children}
			</blockquote>
		),
	},
	marks: {
		code: ({ children }) => (
			<code className="font-mono bg-gray-100 p-1">{children}</code>
		),
		centered: ({ children }) => (
			<span className="block text-center">{children}</span>
		),
		link: ({ children, value }) => {
			const rel = !value.href.startsWith("/")
				? "noreferrer noopener"
				: undefined;

			return (
				<Link
					href={value.href}
					rel={rel}
					className="text-beige hover:underline underline-offset-2 decoration-beige transition-all">
					{children}
				</Link>
			);
		},
	},
};
