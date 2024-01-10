import Link from "next/link";
import React from "react";

export default function ServerErrorPage() {
	return (
		<div className="grid h-screen px-4 bg-white place-content-center">
			<div className="text-center">
				<h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Uh-oh!
				</h1>

				<p className="mt-4 text-gray-500">Vi kan ikke finde denne side.</p>

				<Link
					href="/"
					className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-beige rounded hover:bg-beigehover focus:outline-none focus:ring">
					Gå til forside
				</Link>
			</div>
		</div>
	);
}
