import Image from "next/image";
import CaseIcon from "../../components/CaseIcon";
import CTA from "../../components/CTA";
import Layout from "../../components/Layout";
import heroImage from "../../public/sport24.jpg";

export default function sport24() {
  return (
    <Layout title="Sport 24" image={heroImage}>
      <div className="h-innerheight grid relative">
        <Image
          src={heroImage}
          fill
          alt="Sport 24"
          placeholder="blur"
          quality={100}
          className="col-span-full row-span-full object-cover -z-10"
          priority
        />
        <div className="col-span-full row-span-full flex flex-col justify-center items-center bg-gradient-to-t from-darkpurple/90">
          <div className="p-4">
            <Image
              width="180"
              height="180"
              src="/partners/sport24-logo.png"
              alt="Sport24 logo"
              className="brightness-0 invert mx-auto"
              priority
            />
            <h1 className="text-5xl md:text-7xl tracking-wider font-serif text-center text-white mt-6">
              Sport 24
            </h1>
          </div>
          <div className="absolute bottom-0 animate-bounce">
            <span className="inline-block border-r-4 border-b-4 border-white h-8 w-8 rotate-45 mb-8"></span>
          </div>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto my-32 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Sport 24</h2>
          <p className="text-xl leading-relaxed">
            SPORT 24 er en danskejet, landsdækkende sportskæde. De er hele familiens sportskæde, og
            her finder du alt hvad hjertet kan begære af nyeste modetøj og sko samt funktionelt
            sportstøj og -sko til ham, hende og ungerne. Med butikker fordelt over hele Danmark og
            en velassorteret webshop kan du shoppe hvor, og hvornår det passer dig bedst.
          </p>
        </div>
        <div className="max-w-7xl mx-auto my-32">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Resultater fra vores samarbejde</h2>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly gap-6 md:gap-10">
            <CaseIcon icon="/influencer-icon.png" headline="1" subheadline="Influencer" />
            <CaseIcon icon="/view-icon.png" headline="118.992" subheadline="Antal visninger" />
            <CaseIcon icon="/location-icon.png" headline="Danmark" subheadline="Lokation" />
            <CaseIcon icon="/engagement-icon.png" headline="459.40%" subheadline="Engagementrate" />
            <CaseIcon icon="/post-icon.png" headline="10" subheadline="Instagram posts" />
            <CaseIcon
              icon="/dollar.svg"
              headline="0.11DKK"
              subheadline="Gennemsnitlig pris pr. engagement"
            />
          </div>
        </div>
      </main>
      <CTA />
    </Layout>
  );
}
