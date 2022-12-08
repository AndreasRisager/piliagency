import Head from "next/head";
import CaseCard from "../../components/CaseCard";
import CTA from "../../components/CTA";
import Layout from "../../components/Layout";

const caseItems = [
  {
    name: "Poster Case",
    image: "/posterstore.avif",
    logo: "/partners/partner9.png",
    link: "/cases/posterstore",
  },
  {
    name: "Poster Case",
    image: "/posterstore.avif",
    logo: "/partners/partner9.png",
    link: "/cases/posterstore",
  },
];

export default function cases() {
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/jpg" href="/logo.jpg" />
        <link rel="icon" type="image/jpg" href="https://piliagency.com/logo.jpg" />
        <meta
          name="description"
          content="Digital Markedsføring der skaber performance! - Vi skaber succesfulde influencer marketing kampagner ved at forbinde influencers og brands"
        />
        <title>Cases — Pili Agency</title>
      </Head>
      <main>
        <div className="max-w-3xl mx-auto px-4 my-32 text-center">
          <h1 className="text-6xl font-serif mb-4">Cases</h1>
          <p className="text-xl leading-relaxed">
            Gennemse vores influencer marketing kampagner, og se, hvordan vores tidligere kampagner
            klarede sig.
          </p>
        </div>
        <section className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-case-card justify-center justify-items-center gap-4 my-32">
          {caseItems.map((item, index) => (
            <CaseCard key={item + index} {...item} />
          ))}
        </section>
      </main>
      <CTA subheading="Tøv ikke med at kontakte os." />
    </Layout>
  );
}
