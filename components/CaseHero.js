import React from "react";
import CaseIcon from "./CaseIcon";
import { urlForImage } from "../sanity/lib/image";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function CaseHero({ block }) {
	return (
		<>
			<div className="max-w-3xl mx-auto mt-24 mb-8 text-center relative min-h-[215px] flex flex-col justify-center items-center">
				<svg
					width="600px"
					height="360px"
					viewBox="0 0 600.000000 360.000000"
					className="absolute lg:-top-28 lg:-left-80 md:-top-32 md:-left-36 -top-64 -left-12 mx-auto -z-10 -rotate-12"
					fill="currentColor"
					style={{
						color: block.image.asset.metadata?.palette?.background || "black",
					}}>
					<g transform="translate(0.000000,360.000000) scale(0.100000,-0.100000)">
						<path d="M3997 2764 c-3 -5 -15 -104 -27 -219 -11 -116 -23 -215 -25 -221 -2 -6 -41 -14 -88 -17 -171 -14 -380 -96 -552 -218 -105 -76 -313 -275 -533 -512 -305 -330 -512 -487 -742 -567 -88 -30 -199 -50 -275 -50 l-64 0 59 123 c158 333 196 624 105 807 -52 104 -169 169 -279 156 -142 -16 -242 -126 -283 -309 -9 -40 -17 -73 -18 -75 -1 -1 -31 11 -66 27 -223 100 -410 47 -499 -142 -69 -145 -17 -281 150 -392 167 -111 439 -198 693 -221 42 -4 77 -10 77 -15 0 -5 -21 -43 -47 -86 -120 -198 -269 -269 -490 -233 -43 6 -163 37 -268 67 -252 72 -332 91 -446 103 -154 16 -379 -20 -379 -60 0 -17 4 -17 62 3 53 18 87 21 223 22 180 0 202 -4 506 -91 303 -86 413 -100 534 -69 115 30 195 100 290 253 l61 97 104 6 c248 15 460 110 702 316 48 40 160 151 250 246 265 281 467 478 563 550 115 86 303 180 415 207 47 11 124 23 173 27 78 5 88 8 92 27 2 12 13 113 25 226 12 113 23 206 25 208 2 2 277 -4 612 -12 334 -9 648 -16 696 -16 85 0 107 -11 50 -25 -26 -6 -1063 -338 -1315 -421 l-106 -35 -201 -383 c-111 -211 -201 -388 -201 -394 0 -7 4 -12 9 -12 6 0 139 84 298 186 158 103 396 256 528 341 132 85 386 249 564 364 178 115 325 208 326 207 1 -2 -141 -121 -315 -265 l-317 -262 -177 -76 c-217 -92 -278 -123 -271 -135 8 -13 120 -80 134 -80 6 0 81 58 168 130 155 128 157 130 262 164 305 101 411 111 964 92 235 -8 267 -7 267 6 0 28 -749 44 -900 19 -88 -15 -247 -54 -309 -76 -24 -8 -45 -14 -47 -12 -1 1 52 47 118 102 485 401 683 567 686 575 6 16 -50 18 -578 30 -283 6 -617 13 -741 17 -134 4 -228 2 -232 -3z m1398 -113 c-18 -17 -1767 -1142 -1770 -1139 -4 4 350 677 362 688 4 5 130 47 278 95 149 48 461 149 695 225 234 76 429 138 435 139 6 1 6 -2 0 -8z m-3716 -647 c69 -20 121 -69 157 -146 28 -61 29 -69 29 -213 0 -134 -3 -161 -28 -249 -35 -121 -72 -217 -134 -342 l-47 -94 -45 0 c-110 1 -335 47 -486 100 -150 53 -242 106 -321 185 -100 100 -118 177 -68 285 85 183 268 229 483 120 76 -38 91 -38 91 -2 0 46 29 152 56 206 67 135 181 190 313 150z m2876 -73 c-6 -5 -56 -48 -113 -95 l-104 -86 -39 23 c-21 12 -39 25 -39 28 0 5 285 137 300 138 2 1 0 -3 -5 -8z" />
					</g>
				</svg>
				{block?.publishedAt && (
					<div className="border rounded-full px-4 py-2 text-gray-500 uppercase">
						<span>
							Data report -{" "}
							{new Date(block.publishedAt).toLocaleDateString("da-DK", {
								month: "long",
								year: "numeric",
							})}
						</span>
					</div>
				)}
				<h1 className="text-4xl md:text-6xl font-serif mt-4 leading-snug md:leading-snug tracking-wide">
					<Balancer>{block?.title}</Balancer>
				</h1>
				{block?.description && (
					<p className="text-xl leading-relaxed mt-4">
						<Balancer>{block.description}</Balancer>
					</p>
				)}
			</div>
			<div className="my-2">
				<div
					className="flex flex-wrap gap-6 md:gap-10 border border-black rounded-lg w-fit mx-auto justify-evenly"
					style={{
						color: block.image.asset.metadata?.palette?.foreground || "black",
						background:
							block.image.asset.metadata?.palette?.background || "white",
					}}>
					{block?.results?.map((result) => (
						<CaseIcon
							headline={result.data}
							subheadline={result.title}
							key={result._key}
						/>
					))}
				</div>
			</div>
			{block?.image && (
				<figure className="my-4">
					<Image
						src={urlForImage(block.image).url()}
						alt={block.image.asset.altText}
						placeholder={block.image.asset.metadata?.lqip ? "blur" : "empty"}
						blurDataURL={block.image.asset.metadata?.lqip}
						className="object-cover w-full rounded-md bg-gray-100 h-auto max-h-innerheight"
						height={1080}
						width={1920}
						priority
					/>
				</figure>
			)}
		</>
	);
}
