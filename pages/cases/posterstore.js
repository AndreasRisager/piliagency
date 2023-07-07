import Image from "next/image";
import CaseIcon from "../../components/CaseIcon";
import CTA from "../../components/CTA";
import Layout from "../../components/Layout";
import heroImage from "../../public/posterstore.webp";

export default function posterstore() {
  return (
    <Layout title="Poster Store" image={heroImage}>
      <main className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto my-32 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Poster Store</h2>
          <p className="text-xl leading-relaxed">
            På Poster Store finder du skandinaviske designplakater skabt med
            glæde og passion for kunstnere fra hele verden. De tilbyder også
            stilfulde højkvalitetsrammer, som er nemme at håndtere og holder op
            på væggen.
          </p>
        </div>
        <Image
          src={heroImage}
          alt="Poster Store"
          className="min-w-full max-h-[40rem] object-cover"
        />
        <div className="max-w-7xl mx-auto my-32">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Resultater fra vores samarbejde
          </h2>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly gap-6 md:gap-10">
            <CaseIcon headline="1" subheadline="Influencer" />
            <CaseIcon headline="91.206" subheadline="Antal visninger" />
            <CaseIcon headline="Danmark" subheadline="Lokation" />
            <CaseIcon headline="296.86%" subheadline="Reach Rate" />
            <CaseIcon headline="7" subheadline="Instagram stories" />
            <CaseIcon
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
