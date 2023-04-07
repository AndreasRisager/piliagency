import { PartnerLogos } from "./PartnerLogos";
import Balancer from "react-wrap-balancer";

const images = [
  {
    url: "/partners/nim-logo.png",
    alt: "nordic influencer marketing",
    width: 140,
  },
  { url: "/partners/postly-logo.png", alt: "postly", width: 110 },
  { url: "/partners/taxhelper-logo.png", alt: "taxhelper", width: 50 },
  { url: "/partners/mom-me-logo.png", alt: "mom me" },
  { url: "/partners/dinnerdays-logo.png", alt: "dinnerdays" },
  { url: "/partners/marienlyst-logo.png", alt: "marienlyst strandhotel" },
  { url: "/partners/novasel-logo.png", alt: "novasel", width: 50 },
  { url: "/partners/bybiehl-logo.png", alt: "bybiehl", width: 120 },
  { url: "/partners/poster-store-logo.png", alt: "poster store" },
  { url: "/partners/desenio-logo.png", alt: "desenio" },
  {
    url: "/partners/hotel-hebron-cph-logo.png",
    alt: "hotel hebron copenhagen",
    width: 80,
  },
  { url: "/partners/magformers-logo.png", alt: "magformers", width: 110 },
  { url: "/partners/littleunbox-logo.png", alt: "littleunbox", width: 50 },
  { url: "/partners/bisgaard-logo.png", alt: "bisgaard" },
  { url: "/partners/skansen-baastad-logo.png", alt: "skansen båstad" },
  { url: "/partners/hello-fresh-logo.png", alt: "hello fresh" },
  { url: "/partners/sport24-logo.png", alt: "sport24", width: 130 },
  { url: "/partners/podimo-logo.png", alt: "podimo" },
  { url: "/partners/vero-moda-logo.png", alt: "vero moda" },
  { url: "/partners/playmobil-logo.png", alt: "playmobil" },
  { url: "/partners/apopro-logo.png", alt: "apopro", width: 140 },
  { url: "/partners/easis-logo.png", alt: "easis", width: 50 },
  { url: "/partners/goodiebox-logo.png", alt: "goodiebox" },
  { url: "/partners/lyngby-storcenter-logo.png", alt: "lyngby storcenter" },
  { url: "/partners/matas-logo.png", alt: "matas", width: 120 },
  { url: "/partners/message-logo.png", alt: "message" },
  {
    url: "/partners/my-moments-matas-logo.png",
    alt: "my moments by matas",
    width: 100,
  },
  {
    url: "/partners/tivoli-friheden-logo.png",
    alt: "tivoli friheden",
    width: 100,
  },
  { url: "/partners/unicef-logo.png", alt: "unicef" },
];

export default function Partners() {
  return (
    <section className="py-28 flex flex-col justify-center items-center">
      <h3 className="text-3xl mb-10 font-medium font-serif text-center">
        <Balancer>Brands vi har samarbejdet med</Balancer>
      </h3>
      <PartnerLogos images={images} />
    </section>
  );
}
