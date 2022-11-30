import Head from "next/head";
import CaseCard from "../../components/CaseCard";
import CTA from "../../components/CTA";
import Layout from "../../components/Layout";

export default function cases() {
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/jpg" href="/logo.jpg" />
        <link rel="icon" type="image/jpg" href="https://piliagency.com/logo.jpg" />
        <title>Cases — Pili Agency</title>
      </Head>
      <div className="max-w-3xl mx-auto px-4 my-32 text-start sm:text-center">
        <h1 className="text-6xl font-serif mb-4">Cases</h1>
        <p className="text-xl leading-relaxed">
          Gennemse vores influencer marketing kampagner, og se, hvordan vores tidligere kampagner
          klarede sig.
        </p>
      </div>
      <section className="max-w-7xl mx-auto px-4 grid sm:grid-cols-3 gap-5 my-32">
        <CaseCard />
        <CaseCard />
        <CaseCard />
      </section>
      <CTA subheading="Tøv ikke med at kontakte os." />
    </Layout>
  );
}
