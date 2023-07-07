import Image from "next/image";
import CaseIcon from "../../components/CaseIcon";
import CTA from "../../components/CTA";
import Layout from "../../components/Layout";
import heroImage from "../../public/onceupon.webp";

export default function onceupon() {
  return (
    <Layout title="Once Upon" image={heroImage}>
      <main className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto my-32 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Once Upon</h2>
          <p className="text-xl leading-relaxed">
            Med Once Upon kan du problemfrit lave fotobøger fra din telefon,
            tablet og desktop. Tilføj et par billeder fra din telefon på farten,
            skriv nogle billedtekster på computeren og se en forhåndsvisning af
            hele bogen på din tablet fra sofaen.
          </p>
        </div>
        <Image
          src={heroImage}
          alt="Once Upon"
          className="min-w-full max-h-[40rem] object-cover"
        />
        <div className="max-w-7xl mx-auto my-32">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Resultater fra vores samarbejde
          </h2>
          <h3 className="text-2xl text-center mb-4">Instagram Post & Reels</h3>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly gap-6 md:gap-10 mb-12">
            <CaseIcon headline="1" subheadline="Post" />
            <CaseIcon headline="2" subheadline="Reels" />
            <CaseIcon headline="73.283" subheadline="Totale afspilninger" />
            <CaseIcon headline="17.945" subheadline="Totale Eksponeringer" />
            <CaseIcon headline="1.046" subheadline="Totale Engagements" />
            <CaseIcon headline="1,34 %" subheadline="Engagement Rate" />
          </div>
          <h3 className="text-2xl text-center mb-4">Instagram Story</h3>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly gap-6 md:gap-10 mb-12">
            <CaseIcon headline="16" subheadline="Sekvenser" />
            <CaseIcon headline="131.090" subheadline="Totale Eksponeringer" />
            <CaseIcon headline="252" subheadline="Totale Engagements" />
            <CaseIcon headline="0,20 %" subheadline="Engagement Rate" />
          </div>
        </div>
      </main>
      <CTA />
    </Layout>
  );
}
