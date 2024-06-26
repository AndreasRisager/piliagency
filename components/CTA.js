import Link from "next/link";

export default function CTA({ heading, subheading, link, linkname }) {
	return (
		<section className="mt-32 mb-12 max-w-screen-2xl mx-auto px-4">
			<div className="rounded-md border-solid h-full w-full bg-neutral-50/50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] p-8 text-gray-900 sm:p-12 md:p-16 lg:p-24">
				<div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
					<div className="box-border flex-1 text-center border-solid sm:text-left mr-0 lg:mr-6">
						<h2 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl max-w-3xl">
							{heading ?? "Klar til at komme i gang?"}
						</h2>
						<p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
							{subheading ?? "Vi ser frem til at høre fra dig."}
						</p>
					</div>
					<div className="flex flex-col">
						<Link
							href={link || "/kontakt"}
							className="inline-flex items-center justify-center w-full px-5 py-4 mt-6 font-sans text-base leading-none text-white no-underline bg-beige border border-beige border-solid cursor-pointer md:w-auto lg:mt-0 hover:bg-beigehover hover:border-beigehover hover:text-white focus-within:bg-beigehover focus-within:border-beigehover focus-within:text-white sm:text-lg md:text-xl rounded-lg">
							{linkname || "Kontakt os"}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5 ml-2"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round">
								<line x1="5" y1="12" x2="19" y2="12"></line>
								<polyline points="12 5 19 12 12 19"></polyline>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
