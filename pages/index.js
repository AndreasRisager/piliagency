import AboutUs from "../components/AboutUs";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Partners from "../components/Partners";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Partners />
      <main>
        <AboutUs />
        <Features />
      </main>
      <ContactSection />
      <CTA />
    </Layout>
  );
}
