import Image from "next/image";
import Link from "next/link";

export default function CaseCard() {
  return (
    <div className="rounded-xl overflow-hidden group">
      <span className="sr-only">Poster Store Case</span>
      <Link href="/cases/posterstore" className="grid items-center">
        <Image
          width="603"
          height="300"
          src="/posterstore-case.avif"
          alt="poster store case"
          className="col-span-full row-span-full"
        />
      </Link>
    </div>
  );
}
