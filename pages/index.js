import Head from "next/head";
import AboutUs from "../components/AboutUs";
import ContactForm from "../components/ContactForm";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/jpg" href="/logo.jpg" />
        <link rel="icon" type="image/jpg" href="https://piliagency.com/logo.jpg" />
        <meta
          name="description"
          content="Digital Markedsføring der skaber performance! - Vi skaber succesfulde influencer marketing kampagner ved at forbinde influencers og brands"
        />
        <title>Pili Agency</title>
      </Head>
      <Hero />
      <Partners />
      <AboutUs />
      <Features />
      {/* <ContactForm /> */}
      <CTA />
    </Layout>
  );
}
