import Image from "next/image";
import CaseIcon from "../../components/CaseIcon";
import CTA from "../../components/CTA";
import Layout from "../../components/Layout";
import heroImage from "../../public/ronaturcamp.png";

export default function ronaturcamp() {
  return (
    <Layout title="Ro Naturcamp" image={heroImage}>
      <main className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto my-32 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Ro Naturcamp</h2>
          <p className="text-xl leading-relaxed">
            Ro naturcamp er beliggende på Fejø i Smålandsfarvandet lidt nord for
            Lolland. Blot 300 meter fra færgelejet finder du deres lille
            naturcamp helt ned til vandet, og godt gemt i den vilde natur.
          </p>
        </div>
        <Image
          src={heroImage}
          alt="Ro Naturcamp"
          className="min-w-full max-h-[40rem] object-cover"
        />
        <div className="max-w-7xl mx-auto my-32">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Resultater fra vores samarbejde
          </h2>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly gap-6 md:gap-10">
            <CaseIcon headline="2" subheadline="Post/Reel" />
            <CaseIcon headline="13" subheadline="Stories" />
            <CaseIcon headline="+20.000,-" subheadline="Nye bookninger" />
            <CaseIcon headline="1.24%" subheadline="Engagementrate" />
            <CaseIcon headline="+ 725K" subheadline="Totale reach" />
            <CaseIcon headline="+ 11K" subheadline="Total engagement" />
          </div>
        </div>
        <iframe
          src={"/rapport_naturcamp_mette_sommer.pdf"}
          className="w-full h-screen"
        ></iframe>
      </main>
      <CTA />
    </Layout>
  );
}
