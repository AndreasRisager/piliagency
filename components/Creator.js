import { useState } from "react";
import Image from "next/image";
import Carousel from "./Carousel";

export default function Creator({
  name,
  images = [],
  tags = [],
  texts,
  lines,
  socials = [],
  priority,
}) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Carousel autoSlide={true}>
        {images.map((image, i) => (
          <Image
            width="500"
            height="500"
            src={image}
            alt={name}
            className="min-w-full object-cover"
            priority={priority}
            key={image}
          />
        ))}
      </Carousel>
      <div>
        <h2 className="text-4xl text-gray-900 capitalize">{name}</h2>
        <ul
          className="mb-3 capitalize text-gray-700 flex flex-nowrap list-disc space-x-7 overflow-x-scroll no-scrollbar"
          role="list"
        >
          {tags.map((tag) => (
            <li key={tag} className="first:list-none flex-shrink-0">
              {tag}
            </li>
          ))}
        </ul>
        <div className="text-gray-500 space-y-4">
          {texts.slice(0, lines).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          {readMore &&
            texts.length > lines &&
            texts.slice(lines).map((text, index) => <p key={index}>{text}</p>)}
          {texts.length > lines && (
            <button
              className="block mb-4"
              onClick={() => setReadMore((s) => !s)}
            >
              {readMore ? "Læs mindre" : "Læs mere"}
              <span
                className={`inline-block border-x-[6px] border-transparent border-y-black ml-1 mb-px pointer-events-none ${
                  readMore ? "border-b-[6px]" : "border-t-[6px]"
                }`}
              ></span>
            </button>
          )}
        </div>
        <div className="mt-4 space-y-2 text-gray-500">
          {socials.map((social, index) => (
            <p key={index}>
              {social.platform}:{" "}
              <a
                href={social.link}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
