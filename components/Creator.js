import { useState } from "react";

export default function Creator({ name, image, tags = [], texts, lines, socials = [] }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="grid md:grid-cols-2 gap-8">
      <div>
        <img src={image} alt={name} className="rounded-2xl" />
      </div>
      <div>
        <h2 className="text-4xl text-gray-900 capitalize">{name}</h2>
        <ul
          className="mb-3 capitalize text-gray-700 flex flex-wrap list-disc space-x-7"
          role="list">
          {tags.map((tag) => (
            <li key={tag} className="first:list-none">
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
            <button className="block mb-4" onClick={() => setReadMore((s) => !s)}>
              {readMore ? "Læs mindre" : "Læs mere"}
              <span
                className={`inline-block border-x-[6px] border-transparent border-y-black ml-1 mb-px pointer-events-none ${
                  readMore ? "border-b-[6px]" : "border-t-[6px]"
                }`}></span>
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
                rel="noopener noreferrer">
                {social.name}
              </a>
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
