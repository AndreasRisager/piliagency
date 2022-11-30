import Head from "next/head";
import Image from "next/image";
import CaseIcon from "../../components/CaseIcon";
import Layout from "../../components/Layout";

export default function posterstore() {
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/jpg" href="/logo.jpg" />
        <link rel="icon" type="image/jpg" href="https://piliagency.com/logo.jpg" />
        <title>Poster Store Case — Pili Agency</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid items-center -mx-4">
          <Image
            src="/posterstore-case.avif"
            width="1248"
            height="624"
            alt="plakater"
            className="col-span-full row-span-full min-h-[250px] w-full object-cover"
            priority
          />
        </div>
        <div className="max-w-3xl mx-auto my-32 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Poster Store</h1>
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
      </div>
    </Layout>
  );
}
