import Head from "next/head";
import Image from "next/image";
import CTA from "../components/CTA";
import Layout from "../components/Layout";

export default function kontakt() {
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/jpg" href="/logo.jpg" />
        <link rel="icon" type="image/jpg" href="https://piliagency.com/logo.jpg" />
        <meta
          name="description"
          content="Digital Markedsføring der skaber performance! - Vi skaber succesfulde influencer marketing kampagner ved at forbinde influencers og brands"
        />
        <title>Kontakt - Pili Agency</title>
      </Head>

      <main className="flex-grow max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center">
        <div className="md:order-1 my-10 md:ml-10">
          <div className="mb-10 md:my-4 text-center lg:mb-14">
            <h1 className="text-6xl font-serif mb-4">Kontakt os</h1>
            <p className="text-xl leading-relaxed">
              Hvis du gerne vil vide mere om, hvordan vi kan hjælpe dig eller har spørgsmål, så
              kontakt os venligst her.
            </p>
          </div>
          <form method="POST" data-netlify="true" name="kontakt" id="contact">
            <input
              type="hidden"
              name="subject"
              value="Formularindsendelse - Pili Agency."
              className="hidden"
            />
            <input
              type="text"
              name="name"
              className="block w-full px-4 py-3 mb-4 border-2 border-gray-200 focus:ring focus:ring-beige focus:outline-none rounded-lg"
              placeholder="Fulde navn"
              required
            />
            <input
              type="email"
              name="email"
              className="block w-full px-4 py-3 mb-4 border-2 border-gray-200 focus:ring focus:ring-beige focus:outline-none rounded-lg"
              placeholder="Email address"
              required
            />
            <textarea
              name="message"
              className="block w-full px-4 py-3 mb-4 border-2 border-gray-200 focus:ring focus:ring-beige focus:outline-none rounded-lg"
              placeholder="Besked"
              required></textarea>
            <button
              className="block w-full px-3 py-4 font-medium text-white bg-beige hover:bg-beigehover focus:bg-beigehover focus:ring focus:ring-gray-900 focus:outline-none rounded-lg"
              type="submit">
              Send
            </button>
          </form>
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
