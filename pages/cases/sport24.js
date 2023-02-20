import Image from "next/image";
import CaseIcon from "../../components/CaseIcon";
import CTA from "../../components/CTA";
import Layout from "../../components/Layout";
import heroImage from "../../public/sport24.jpg";

export default function sport24() {
  return (
    <Layout title="Sport 24" image={heroImage}>
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
            <CaseIcon headline="1" subheadline="Influencer" />
            <CaseIcon headline="118.992" subheadline="Antal visninger" />
            <CaseIcon headline="Danmark" subheadline="Lokation" />
            <CaseIcon headline="459.40%" subheadline="Engagementrate" />
            <CaseIcon headline="10" subheadline="Instagram posts" />
            <CaseIcon headline="0.11DKK" subheadline="Gennemsnitlig pris pr. engagement" />
          </div>
        </div>
      </main>
      <CTA />
    </Layout>
  );
}
