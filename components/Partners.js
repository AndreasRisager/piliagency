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
  { url: "/partners/lyko-logo.png", alt: "lyko", width: 110 },
  { url: "/partners/aplus-logo.png", alt: "a plus", width: 110 },
  { url: "/partners/once-upon-logo.png", alt: "once upon" },
  { url: "/partners/aarstiderne-logo.jpg", alt: "aarstiderne" },
  { url: "/partners/b-young-logo.jpeg", alt: "b.young" },
  { url: "/partners/babybel-logo.png", alt: "babybel", width: 70 },
  { url: "/partners/auping-logo.jpg", alt: "auping" },
  {
    url: "/partners/biograf-klub-danmark-logo.png",
    alt: "biograf klub danmark",
    width: 120,
  },
  { url: "/partners/otto-logo.png", alt: "otto", width: 70 },
  { url: "/partners/bookbeat-logo.png", alt: "bookbeat" },
  { url: "/partners/brio-logo.png", alt: "brio", width: 110 },
  {
    url: "/partners/clean-beauty-shop-logo.jpg",
    alt: "clean beauty shop",
  },
  {
    url: "/partners/eva-solo-logo.webp",
    alt: "eva solo",
  },
  {
    url: "/partners/flexa-logo.png",
    alt: "flexa",
  },
  {
    url: "/partners/geomag-logo.jpg",
    alt: "geomag",
  },
  {
    url: "/partners/hp-logo.png",
    alt: "hp",
    width: 55,
  },
  {
    url: "/partners/id-hair-logo.jpg",
    alt: "id hair",
  },
  {
    url: "/partners/it-lagersalg-logo.png",
    alt: "it lagersalg",
  },
  {
    url: "/partners/libresse-logo.jpeg",
    alt: "libresse",
    width: 110,
  },
  {
    url: "/partners/little-savage-logo.jpg.webp",
    alt: "little savage",
    width: 55,
  },
  {
    url: "/partners/lumega-home-logo.png",
    alt: "lumega home",
  },
  {
    url: "/partners/mantel-logo.png",
    alt: "mantel",
    width: 65,
  },
  {
    url: "/partners/mashup-logo.jpg",
    alt: "mashup",
    width: 60,
  },
  {
    url: "/partners/mezina-logo.png",
    alt: "mezina",
  },
  {
    url: "/partners/nordisk-film-logo.jpg",
    alt: "nordisk film",
    width: 35,
  },
  {
    url: "/partners/number-nine-logo.png",
    alt: "number nine",
  },
  {
    url: "/partners/oslo-skin-lab-logo.png",
    alt: "oslo skin lab",
    width: 50,
  },
  {
    url: "/partners/queen-flowers-logo.png",
    alt: "queen flowers",
    width: 100,
  },
  {
    url: "/partners/rabatta-logo.png",
    alt: "rabatta",
    width: 120,
  },
  {
    url: "/partners/retnemt-logo.jpg.webp",
    alt: "retnemt",
  },
  {
    url: "/partners/roemer-logo.png",
    alt: "roemer",
    width: 140,
  },
  {
    url: "/partners/ronsbol-logo.png",
    alt: "ronsbol",
    width: 100,
  },
  {
    url: "/partners/sandstone-logo.png",
    alt: "sandstone scandinavia",
  },
  {
    url: "/partners/scandlines-logo.png",
    alt: "scandlines",
  },
  {
    url: "/partners/sco-logo.png",
    alt: "sco danish design",
    width: 80,
  },
  {
    url: "/partners/sega-logo.png",
    alt: "sega",
  },
  {
    url: "/partners/sikkerthjem-logo.png",
    alt: "sikkerthjem scandinavia",
  },
  {
    url: "/partners/sinful-logo.png",
    alt: "sinful",
  },
  {
    url: "/partners/tradera-logo.png",
    alt: "tradera",
    width: 110,
  },
  {
    url: "/partners/vibholm-logo.png",
    alt: "vibholm",
  },
  {
    url: "/partners/visit-nordjylland-logo.png",
    alt: "visit nordjylland",
  },
  {
    url: "/partners/xplora-logo.jpeg",
    alt: "xplora",
  },
  {
    url: "/partners/flying-tiger-logo.png",
    alt: "flying tiger",
  },
  {
    url: "/partners/ecooking-logo.png.webp",
    alt: "ecooking",
  },
  {
    url: "/partners/depend-logo.png",
    alt: "depend",
    width: 60,
  },
  {
    url: "/partners/molly-logo.webp",
    alt: "molly shopping assistance",
    width: 100,
  },
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
