import Image from "next/image";
import ContactForm from "../components/ContactForm";
import CTA from "../components/CTA";
import Layout from "../components/Layout";

export default function kontakt() {
  return (
    <Layout title="Kontakt">
      <main className="flex-grow max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center">
        <div className="md:order-1 my-10 md:my-56 md:ml-10">
          <div className="mb-10 md:my-4 text-center lg:mb-14">
            <h1 className="text-6xl font-serif mb-4">Kontakt os</h1>
            <p className="text-xl leading-relaxed">
              Hvis du gerne vil vide mere om, hvordan vi kan hjælpe dig eller har spørgsmål, så
              kontakt os venligst her.
            </p>
          </div>
          <ContactForm />
        </div>
        <div className="hidden md:block min-h-full relative -mx-4">
          <Image
            src="/vase.jpg"
            fill
            alt="en vase med hvide blomster"
            className="object-cover"
            priority
          />
        </div>
      </main>
      <CTA
        heading={"Kunne du tænke dig at samarbejde?"}
        subheading={"Tjek vores tidligere kampagner ud."}
        link={"/cases"}
        linkname={"Se Cases"}
      />
    </Layout>
  );
}
