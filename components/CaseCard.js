import Image from "next/image";
import Link from "next/link";

export default function CaseCard({ name, image, logo, link }) {
  return (
    <div className="rounded-xl overflow-hidden group">
      <Link href={link || "/cases"}>
        <span className="sr-only">{name} Case</span>
        <div className="grid items-center justify-items-center">
          <Image
            width="403"
            height="443"
            src={image}
            alt={name + " Case"}
            quality={10}
            className="col-span-full row-span-full"
            priority
          />
          <div className="col-span-full row-span-full m-[8%]">
            <Image
              width="180"
              height="180"
              src={logo}
              alt={name + " logo"}
              className="brightness-0 invert"
              priority
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
