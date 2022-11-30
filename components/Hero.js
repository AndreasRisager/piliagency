export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px] max-w-7xl mx-auto">
        <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-1/2">
          <div className="ml-4 absolute bottom-0 right-0 hidden lg:block">
            <img className="object-contain w-auto h-48" src="/curved-lines.png" alt="" />
          </div>

          <div className="relative px-4 pt-5 sm:pt-12 md:pt-24 pb-16 sm:text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
            <h1 className="text-4xl font-bold text-black sm:text-5xl xl:text-7xl font-serif">
              Digital Markedsføring
              <br />
              der skaber performance!
            </h1>
            <p className="mt-8 text-xl text-black">
              Vi skaber succesfulde influencer marketing kampagner ved at forbinde influencers og
              brands
            </p>
          </div>

          <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-16">
            <img className="w-32 h-32 md:w-32 md:h-32" src="/curved-text.png" alt="" />
          </div>
        </div>

        <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-1/2">
          <div className="absolute inset-0">
            <img className="object-cover w-full h-full scale-150" src="/hero.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
