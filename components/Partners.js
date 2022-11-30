import { PartnerLogos } from "./PartnerLogos";

export default function Partners() {
  return (
    <section className="py-24 flex flex-col justify-center items-center">
      <h3 className="text-xl mb-10 font-bold text-center">Vores samarbejdspartnere</h3>
      <PartnerLogos
        images={[
          { url: "/partners/partner1.png", width: 140 },
          { url: "/partners/partner2.png", width: 110 },
          { url: "/partners/partner3.png", width: 50 },
          { url: "/partners/partner4.png" },
          { url: "/partners/partner5.png" },
          { url: "/partners/partner6.png" },
          { url: "/partners/partner7.png", width: 50 },
          { url: "/partners/partner8.png", width: 120 },
          { url: "/partners/partner9.png" },
          { url: "/partners/partner10.png" },
          { url: "/partners/partner11.png", width: 80 },
          { url: "/partners/partner12.png", width: 110 },
          { url: "/partners/partner13.png", width: 50 },
          { url: "/partners/partner14.png" },
          { url: "/partners/partner15.png" },
          { url: "/partners/partner16.png" },
          { url: "/partners/partner17.png", width: 130 },
          { url: "/partners/partner18.png" },
          { url: "/partners/partner19.png" },
          { url: "/partners/partner20.png" },
        ]}
      />
    </section>
  );
}
