import Link from "next/link";
import Balancer from "react-wrap-balancer";
import FeaturedCases from "./FeaturedCases";
import { urlForImage } from "../sanity/lib/image";
import Image from "next/image";

export default function Hero({ block }) {
	return (
		<section className="flex flex-col items-center p-4">
			<div className="max-w-7xl mx-auto px-4 mt-12 mb-24 text-center">
				<h1 className="text-[2.7rem] leading-none font-serif font-medium mb-4 text-gray-700 md:text-5xl lg:text-6xl xl:text-7xl">
					{block?.title}
				</h1>
				<p className="text-lg text-gray-500 sm:max-w-md md:max-w-3xl mx-auto md:text-xl lg:text-2xl">
					<Balancer>{block?.description}</Balancer>
				</p>
				<div className="flex justify-center mt-6 gap-4">
					<Link
						href="/kontakt"
						className="border rounded-md text-lg px-6 py-2 font-medium bg-beige text-white hover:bg-beigehover hover:ring-2 hover:ring-beigehover">
						Kontakt os
					</Link>
					<button
						onClick={() =>
							window.scrollTo({
								top: 1500,
								behavior: "smooth",
							})
						}
						className="border rounded-md text-lg px-6 py-2 font-medium hover:bg-beigehover hover:ring-2 hover:ring-beigehover">
						Læs mere
					</button>
				</div>
			</div>
		</section>
	);
}
