import CaseCard from "../../components/CaseCard";
import CTA from "../../components/CTA";
import Layout from "../../components/Layout";

const caseItems = [
  {
    name: "Poster Store Case",
    image: "/posterstore.webp",
    logo: "/partners/poster-store-logo.png",
    link: "/cases/posterstore",
  },
  {
    name: "Sport 24 Case",
    image: "/sport24.jpg",
    logo: "/partners/sport24-logo.png",
    link: "/cases/sport24",
  },
];

export default function cases() {
  return (
    <Layout title="Cases">
      <main>
        <div className="max-w-3xl mx-auto px-4 my-32 text-center">
          <h1 className="text-6xl font-serif mb-4">Cases</h1>
          <p className="text-xl leading-relaxed">
            Gennemse vores influencer marketing kampagner, og se, hvordan vores tidligere kampagner
            klarede sig.
          </p>
        </div>
        <h1 className="text-5xl font-serif my-4">Under udvikling, kommer snart!<h1>
        
        {/* <section className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-case-card grid-rows-[300px] justify-center justify-items-center gap-4 my-32">
          {caseItems.map((item, index) => (
            <CaseCard key={item + index} {...item} />
          ))}
        </section> */}
      </main>
      <CTA subheading="Tøv ikke med at kontakte os." />
    </Layout>
  );
}
