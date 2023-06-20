import CaseIcon from "../../components/CaseIcon";
import CTA from "../../components/CTA";
import Layout from "../../components/Layout";
import heroImage from "../../public/lyko.jpg";

export default function lyko() {
  return (
    <Layout title="Lyko" image={heroImage}>
      <main className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto my-32 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Lyko</h2>
          <p className="text-xl leading-relaxed">
            Lyko.com giver dig alt indenfor skønhed online. Du kan bestille
            skønhedsprodukter til fordelagtige priser og med fri fragt. LYKO er
            en af Nordens største forhandlere af professionel hårpleje og
            skønhedsprodukter.
          </p>
        </div>
        <div className="max-w-7xl mx-auto my-32">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Resultater fra vores samarbejde
          </h2>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly gap-6 md:gap-10">
            <CaseIcon headline="1" subheadline="Influencer" />
            <CaseIcon headline="63.006" subheadline="Antal visninger" />
            <CaseIcon headline="741" subheadline="Klik på link" />
            <CaseIcon headline="Danmark" subheadline="Lokation" />
            <CaseIcon headline="7" subheadline="Instagram sekvenser" />
            <CaseIcon
              headline="853 personer"
              subheadline="Totale Engagements"
            />
          </div>
        </div>
      </main>
      <CTA />
    </Layout>
  );
}
