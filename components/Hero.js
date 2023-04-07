import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center p-4">
        <div className="my-12 md:my-20 text-center flex flex-col items-center max-w-7xl">
          <h1 className="text-4xl font-bold text-black sm:text-5xl xl:text-6xl font-serif mb-4">
            <Balancer>
              Vi hjælper dig med at vækste med influencer marketing.
            </Balancer>
          </h1>
          <h2 className="text-3xl mb-6">
            Vi forbinder brands med influencers og skaber magi.
          </h2>
          <div className="flex gap-4">
            <Link
              href="/kontakt"
              className="border rounded-md text-lg px-6 py-2 font-medium bg-beige text-white hover:bg-beigehover hover:ring-2 hover:ring-beigehover"
            >
              Kontakt os
            </Link>
            <button
              onClick={() =>
                window.scrollTo({
                  top: 1500,
                  behavior: "smooth",
                })
              }
              className="border rounded-md text-lg px-6 py-2 font-medium hover:bg-beigehover hover:ring-2 hover:ring-beigehover"
            >
              Læs mere
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 grid-rows-2 gap-4 lg:h-[570px]">
          <Image
            src={"/images/IMG_0638.jpg"}
            alt="gallery 1"
            width={400}
            height={300}
            className="rounded-md object-cover w-full h-full"
          />
          <Image
            src={"/images/IMG_0640.jpg"}
            alt="gallery 2"
            width={400}
            height={300}
            className="rounded-md object-cover w-full h-full hidden md:inline-block"
          />
          <Image
            src={"/images/IMG_0658.jpg"}
            alt="gallery 3"
            width={400}
            height={300}
            className="rounded-md object-cover row-start-1 row-end-3 md:col-start-2 w-full h-full"
          />
          <Image
            src={"/images/IMG_0706.jpg"}
            alt="gallery 4"
            width={400}
            height={300}
            className="rounded-md object-cover w-full h-full hidden md:inline-block"
          />
          <Image
            src={"/images/IMG_0676.jpg"}
            alt="gallery 5"
            width={400}
            height={300}
            className="rounded-md object-cover w-full h-full hidden md:inline-block"
          />
          <Image
            src={"/images/IMG_0691.jpg"}
            alt="gallery 6"
            width={400}
            height={300}
            className="rounded-md object-cover row-start-1 row-end-3 col-start-3 md:col-start-4 w-full h-full"
          />
          <Image
            src={"/images/IMG_0705.jpg"}
            alt="gallery 7"
            width={400}
            height={300}
            className="rounded-md object-cover w-full h-full"
          />
          <Image
            src={"/images/IMG_0704.jpg"}
            alt="gallery 8"
            width={400}
            height={300}
            className="rounded-md object-cover w-full h-full hidden md:inline-block"
          />
        </div>
      </div>
    </section>
  );
}
