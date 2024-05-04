import React from "react";
import Link from "next/link";

export default function LinkButton({ href, className, children }) {
	return (
		<>
			{href?.internal ? (
				<Link
					href={href.internal}
					className={`inline-block border rounded-md text-lg px-6 py-2 font-medium bg-beige text-white hover:bg-beigehover hover:ring-2 hover:ring-beigehover ${className}`}>
					{children}
				</Link>
			) : href?.external ? (
				<a
					href={href.external}
					target="_blank"
					rel="noopener"
					className={`${className}`}>
					{children}
				</a>
			) : null}
		</>
	);
}
