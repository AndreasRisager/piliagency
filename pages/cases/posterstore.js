import Head from "next/head";
import Image from "next/image";
import CaseIcon from "../../components/CaseIcon";
import CTA from "../../components/CTA";
import Layout from "../../components/Layout";
import heroImage from "../../public/posterstore.webp";

export default function posterstore() {
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/jpg" href="/logo.jpg" />
        <link rel="icon" type="image/jpg" href="https://piliagency.com/logo.jpg" />
        <meta
          name="description"
          content="Digital Markedsføring der skaber performance! - Vi skaber succesfulde influencer marketing kampagner ved at forbinde influencers og brands"
        />
        <title>Poster Store — Pili Agency</title>
      </Head>
      <div className="h-innerheight grid relative">
        <Image
          src={heroImage}
          fill
          alt="poster store plakater"
          placeholder="blur"
          className="col-span-full row-span-full object-cover -z-10"
          priority
        />
        <div className="col-span-full row-span-full flex flex-col justify-center items-center bg-gradient-to-t from-darkpurple/90">
          <div className="p-4">
            <Image
              width="180"
              height="180"
              src="/partners/partner9.png"
              alt="poster store case"
              className="brightness-0 invert mx-auto"
              priority
            />
            <h1 className="text-5xl md:text-7xl tracking-wider font-serif text-center text-white mt-6">
              Poster Store
            </h1>
          </div>
          <div className="absolute bottom-0 animate-bounce">
            <span className="inline-block border-r-4 border-b-4 border-white h-8 w-8 rotate-45 mb-8"></span>
          </div>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto my-32 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Poster Store</h2>
          <p className="text-xl leading-relaxed">
            På Poster Store finder du skandinaviske designplakater skabt med glæde og passion for
            kunstnere fra hele verden. De tilbyder også stilfulde højkvalitetsrammer, som er nemme
            at håndtere og holder op på væggen.
          </p>
        </div>
        <div className="max-w-7xl mx-auto my-32">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Resultater fra vores samarbejde</h2>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly gap-6 md:gap-10">
            <CaseIcon icon="/user.svg" headline="1" subheadline="Influencer" />
            <CaseIcon icon="/stars.svg" headline="91.206" subheadline="Antal visninger" />
            <CaseIcon icon="/location.svg" headline="Danmark" subheadline="Lokation" />
            <CaseIcon icon="/procent.svg" headline="296.86%" subheadline="Engagementrate" />
            <CaseIcon icon="/instagram.svg" headline="7" subheadline="Instagram story-sekvenser" />
            <CaseIcon
              icon="/dollar.svg"
              headline="0.07DKK"
              subheadline="Gennemsnitlig pris pr. engagement"
            />
          </div>
        </div>
      </main>
      <CTA />
    </Layout>
  );
}
