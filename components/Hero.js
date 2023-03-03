import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center p-4">
        <div className="my-12 md:my-20 text-center flex flex-col items-center max-w-7xl">
          <h1 className="text-4xl font-bold text-black sm:text-5xl xl:text-6xl font-serif mb-4">
            <Balancer>Vi hjælper dig med at vækste med influencer marketing.</Balancer>
          </h1>
          <h2 className="text-3xl mb-6">Vi forbinder brands med influencers og skaber magi.</h2>
          <div className="flex gap-4">
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
        <div className="flex gap-4 w-[1400px]">
          <div className="flex flex-col gap-4 w-96">
            <Image
              src={
                "https://images.unsplash.com/photo-1677759337900-bfebae5be4b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=743&q=80"
              }
              alt="gallery 1"
              width={400}
              height={300}
              className="rounded-md h-1/2 object-cover hidden sm:block"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1677477605371-f65e2ef8759d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              alt="gallery 2"
              width={400}
              height={300}
              className="rounded-md h-1/2 object-cover hidden sm:block"
            />
          </div>
          <Image
            src={
              "https://images.unsplash.com/photo-1677678186104-f4b8256d41d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            alt="gallery 3"
            width={400}
            height={300}
            className="rounded-md w-96 object-cover"
          />
          <div className="flex flex-col gap-4 w-96">
            <Image
              src={
                "https://images.unsplash.com/photo-1670272502333-dcfab6832b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              alt="gallery 4"
              width={400}
              height={300}
              className="rounded-md h-1/2 object-cover"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1582137923896-678895517c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
              alt="gallery 5"
              width={400}
              height={300}
              className="rounded-md h-1/2 object-cover"
            />
          </div>
          <Image
            src={
              "https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
            alt="gallery 6"
            width={400}
            height={300}
            className="rounded-md w-96 object-cover"
          />
          <div className="flex flex-col gap-4 w-96">
            <Image
              src={
                "https://images.unsplash.com/photo-1677678185121-0164f95f8531?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
              }
              alt="gallery 7"
              width={400}
              height={300}
              className="rounded-md h-1/2 object-cover hidden sm:block"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1677748717329-cba03d7c896f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=826&q=80"
              }
              alt="gallery 8"
              width={400}
              height={300}
              className="rounded-md h-1/2 object-cover hidden sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
