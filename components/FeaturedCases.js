import { MotionConfig, motion } from "framer-motion";
import { urlForImage } from "../sanity/lib/image";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedCases({ block }) {
	const [current, setCurrent] = useState(0);
	const [autoSlide, setAutoSlide] = useState(true);

	const onPrevClick = () =>
		setCurrent((current) =>
			current === 0 ? block.cases.length - 1 : current - 1
		);

	const onNextClick = () =>
		setCurrent((current) =>
			current === block.cases.length - 1 ? 0 : current + 1
		);

	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(onNextClick, 8000);
		return () => clearInterval(slideInterval);
	}, [current, autoSlide]);

	return (
		<section
			className="overflow-hidden mb-32"
			onMouseEnter={() => setAutoSlide(false)}
			onMouseLeave={() => setAutoSlide(true)}>
			<div className="flex flex-col items-center justify-between mx-8">
				<MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
					{block.title && (
						<h3 className="text-4xl mb-6 max-w-7xl mx-auto">{block.title}</h3>
					)}
					<div className="relative w-full max-w-7xl flex items-center">
						{/* Left/right controls */}

						<div className="absolute left-0 right-0 flex justify-between z-10 pointer-events-none">
							<button
								onClick={onPrevClick}
								className="pointer-events-auto md:p-8 cursor-default">
								<svg
									className="w-8 h-8 text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 8 14">
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
									/>
								</svg>
							</button>
							<button
								onClick={onNextClick}
								className="pointer-events-auto md:p-8 cursor-default">
								<svg
									className="w-8 h-8 text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 8 14">
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
									/>
								</svg>
							</button>
						</div>

						{/* List of images */}
						<motion.div
							className="flex gap-4 flex-nowrap"
							animate={{
								x: `calc(-${current * 100}% - ${current}rem)`,
							}}>
							{[...block.cases].map((slide) => (
								<div className="shrink-0 basis-full relative" key={slide._id}>
									<Link href={"/cases/" + slide.slug.current}>
										<Image
											key={slide._id}
											src={urlForImage(slide.thumbnail)
												.width(1280)
												.height(720)
												.url()}
											width={1280}
											height={720}
											alt={slide.thumbnail.asset.altText || "featured case"}
											className="aspect-video object-cover"
											placeholder={
												slide.thumbnail.asset.metadata?.lqip ? "blur" : "empty"
											}
											blurDataURL={slide.thumbnail.asset.metadata?.lqip}
										/>
										<p className="text-5xl absolute bottom-2 left-2 text-white">
											{slide.title}
										</p>
									</Link>
								</div>
							))}
						</motion.div>
					</div>
				</MotionConfig>
			</div>
		</section>
	);
}
