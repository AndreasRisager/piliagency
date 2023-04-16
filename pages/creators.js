import Creator from "../components/Creator";
import CTA from "../components/CTA";
import Layout from "../components/Layout";

const creatorItems = [
  {
    name: "Anna David",
    image: "/creators/anna_david.jpg",
    tags: ["Familie", "Oplevelser", "Livsstil", "Musik", "Natur"],
    texts: [
      "Kunstner Anna David er kendt som en fremragende sanger og sangskriver, som formår at bjergtage sit publikum med sin musik og sprøde smukke stemme.",
      'Anna David har været en kendt personlighed længe. Som 15 årig debuterede Anna som sanger på den internationale scene og samtidig som skuespiller i Lars von Triers musicalfilm "Dancer in the Dark". Året var 2000.',
      "Anna David er en smuk kvinde med en varm og fængslende udstråling. Hendes lange viltre krøller og atletiske krop vidner om Annas fritids passion. Hun elsker at være fysisk aktiv.",
      "Hun har etableret en fodboldklub for mødre i lokalområdet og er vild med at spille fodbold. Hun spiller badminton og elsker at tage på vandreture med sin familie i DK og i udlandet.",
      "Anna er mor til 3 vidunderlige børn: Alba, et kreativt barn, som har dubbet siden 8-årsalderen. Noam, som frygtløst tager enhver udfordring op og er en kærlig stor basse. LilleBror som er stærk og harmonisk og allerede har vist at han er den sødeste Tour Baby.",
      "Til trods for, at Anna har stået på de største scener og medvirket i de største TV Shows har hun aldrig mistet jordforbindelsen. (selv om hun ALTID optræder i høje stiletter) Hun er helt i øjenhøjde med sine fans og ja med alle.",
      "Lige nu er hun igen i gang med at give koncerter og filme. Hendes kreativitet synes uden grænser og omfatter i øvrigt også at male og at indrette familiens bolig som et både trygt og fortryllende univers.",
    ],
    lines: 3,
    socials: [
      {
        platform: "Instagram",
        name: "@annadavidmusic",
        link: "https://www.instagram.com/annadavidmusic/",
      },
      {
        platform: "Mediakit",
        name: "Anna David",
        link: "https://booking.bloggersdelight.dk/widgets/offer?offer=lsQmF&p=piliagency1448",
      },
    ],
    priority: true,
  },
  {
    name: "Mette Sommer",
    image: "/creators/mette_sommer.jpg",
    tags: ["Natur", "Oplevelser", "Socialt Liv", "Livsstil"],
    texts: [
      "Mettes profil er blevet taget med storm, netop på grund af hendes uopstillede profil, som tager sine følgere med i et ærligt og troværdigt univers.",
      `Der er meget fokus på Mette lige nu, grundet hendes deltagelse i Tv programmet “Bachelor” og hendes sag hvor hun er med i "Støt brysterne".`,
      'Mette er 33 år og bor i en lejlighed i København. Hun har en meget målrettet niche inden for oplevelser, livstil og natur, men mest af alt så vil hun gerne ses som "den helt almindelige danske kvinde". Det er også noget hendes følgere kan relatere til og det ses også i hendes meget aktive engagement rate.',
      "Mette optræder inden længe i TV'et igen til det store show for Kræftens Bekæmpelse.",
    ],
    socials: [
      {
        platform: "Instagram",
        name: "@mettecsommer",
        link: "https://www.instagram.com/mettecsommer/",
      },
      {
        platform: "Mediakit",
        name: "Mette Sommer",
        link: "https://booking.bloggersdelight.dk/widgets/offer?offer=Pswxt&p=piliagency1448",
      },
    ],
  },
  {
    name: "Anne Bertram",
    image: "/creators/anne_bertram.jpg",
    tags: ["Sport", "Familie", "Beauty", "Livsstil", "Mode"],
    texts: [
      "Anne Bertram er 33 år, født og opvokset på fyn men har været bosat i København de sidste 10 år. Hun har 2 dejlige drenge på 1 og 4 år, som hun har sammen med sin kæreste Kim. De har bosat sig i Løkken efter 10 år i København, da de trængte til familie omkring sig, vand, strand, skov og ro.",
      "Hun spiller håndbold, elsker at male , at løbe og hun elsker at lave velgørenhed og meget gerne med fokus på børn.",
      "Hendes gode data afspejler at hendes profil er helt unik og at hun formår at engagere sig med sine følger. Det kan især ses i hendes høje ENGAGEMENT RATE på 5,78% og hendes flotte rækkevidde. Anne Bertram er kommercielt interesant for Beauty og Tøj virksomheder samt virksomheder som henvender sig til familielivet.",
    ],
    socials: [
      {
        platform: "Instagram",
        name: "@annebertram",
        link: "https://www.instagram.com/annebertram/",
      },
      {
        platform: "Mediakit",
        name: "Anne Bertram",
        link: "https://booking.bloggersdelight.dk/widgets/offer?offer=qTsB2&p=piliagency1448",
      },
    ],
  },
  {
    name: "Kristine Melgaard-Mani",
    image: "/creators/kristine_melgaard-mani.jpg",
    tags: ["økonomi", "opskrifter", "familie", "oplevelser"],
    texts: [
      "Kristine er kendt for at dele økonomiske tips, madplaner, opskrifter og oplevelser for familien - alt sammen med et ønske om, at hjælpe andre til at få et bedre økonomisk overblik.",
      "Profilen har været på en vild vækstrejse, og er på bare ét år gået fra 10.000 følgere til over 78.000 følgere, og Kristine har været på live tv flere gange og er omtalt i flere magasiner.",
      "Kristine er 32 år gammel og bor i Helsingør med sin mand og deres to børn, Annie på 6 år og Wilhelm på 3 år.",
    ],
    socials: [
      {
        platform: "Instagram",
        name: "@familieliv_paabudget",
        link: "https://www.instagram.com/familieliv_paabudget/",
      },
      {
        platform: "Mediakit",
        name: "Familieliv på budget",
        link: "https://booking.bloggersdelight.dk/widgets/offer?offer=TsBt0&p=piliagency1448",
      },
    ],
  },
  {
    name: "Sanne Natasha",
    image: "/creators/sanne_natasha.jpg",
    tags: [
      "Familie",
      "Elsker at lave sjove og releterbar reels",
      "Oplevelser",
      "Sport",
    ],
    texts: [
      "Sanne Natasha er 35 år, bor i Valby og er fantastisk sjov i hendes formidling af reels. Sanne arbejder som fuldtid med sin Instagram profil, som er i rivende udvikling!",
      "Hun formår at være relaterbar og personlig i hendes content. Man kan godt sige at hun virkelig har knækket koden til at underholde sine følgere!",
      "Hun er på kun to måneder gået fra 14.900 følgere med 196 avg. engagement. til 21.200 følgere med 1163 avg. engagement! Hun har 38,878.75 AVG. REACH igennem hendes sidste 50 stories, samt en engagement rate på 5.78% lige nu.",
      "Sanne er kommerciel dygtig inden for familie livet, samt hverdagslivet. Hun er allerbedst hvis hun får frie tøjler til at formidle en kreativ og sjov reel!",
    ],
    socials: [
      {
        platform: "Instagram",
        name: "@sannenatasha",
        link: "https://www.instagram.com/sannenatasha/",
      },
      {
        platform: "Tiktok",
        name: "@sannenatasha",
        link: "https://www.tiktok.com/@sannenatasha",
      },
      {
        platform: "Mediakit",
        name: "Sanne Natasha",
        link: "https://booking.bloggersdelight.dk/widgets/offer?offer=x67Ih&p=piliagency1448",
      },
    ],
  },
  {
    name: "Line Dupont",
    image: "/creators/line_dupont.jpg",
    tags: [
      "Familie",
      "DIY",
      "Bolig",
      "Indretning",
      "Gør det selv",
      "Oplevelser",
    ],
    texts: [
      "Line er kendt for hendes inspirerende og vilde bolig univers!",
      "Man kan også se på Lines tal, at hun inspirere mange af sine følgere! Hun når 92,453.19 AVG. REACH samt 1,245.82 AVG. ENGAGEMENT på sine post's, hvor hun har 107 tusinde følgere.",
      "Hendes passion har altid været DIY og indretning, som startede da hun istandsatte sin første lejlighed som 18 årig.",
      "Hun er kreativ på alle mulige måder og elsker alt, hvor hun kan bruger sine hænder. Herunder Ikeahacks, høje paneler, stuklofter, orangeriet, kunst, DIY bord mm. Derudover elsker hun indretning og interiører. Alt som relaterer sig til bolig.",
      "Line er kommercielt interesant for bolig, kunst, DIY og familie relaterede virksomheder.",
    ],
    socials: [
      {
        platform: "Instagram",
        name: "@_linedupont_",
        link: "https://www.instagram.com/_linedupont_/",
      },
      {
        platform: "Mediakit",
        name: "Line Dupont",
        link: "https://booking.bloggersdelight.dk/widgets/offer?offer=CDTTk&p=piliagency1448",
      },
    ],
  },
  {
    name: "Simone Lykke",
    image: "/creators/simone_lykke.jpg",
    tags: ["Vegan", "Interior", "Bæredygtig", "Familie", "Sorg og Angst"],
    texts: [
      "Simone Lykke slog for alvor igennem i 2016 i den anmelderroste danske biograffilm Hundeliv.",
      "Siden da har hun slået sit navn fast i både ind- og udland, som alt fra den den tjekkede skønhedsdronning Amanda i Friheden 2 til Benedikte Skans i hit-serien Kastanjemanden.",
      "På instagram er Simone en passioneret, æstetisk og humoristisk kvinde, der tager os med ind i familielivet med hendes datter Wilma på 1,5 år, som er svær ikke at falde pladask for. Hun tager os også ind i hende og hendes kærestes nyligt totalrenoverede hjem, hvor indretning og bæredygtige valg er i højsædet.",
      "Hun lader os også komme bag kameraet på de forskellige projekter, hun laver og ikke mindst ind i hendes hjerte, hvor netop især bæredygtighed er noget, Simone gerne vil slå et slag for.",
      "Simone har generelt ikke svært ved at tage de mere vigtige emner op, såsom sorg, angst, bæredygtighed osv., og Simones online univers rummer enormt meget oprigtighed og inspiration til at gøre en forskel og samtidigt få sig et godt grin.",
    ],
    lines: 3,
    socials: [
      {
        platform: "Instagram",
        name: "@simonelykkep",
        link: "https://www.instagram.com/simonelykkep/",
      },
      {
        platform: "Mediakit",
        name: "Simone Lykke",
        link: "https://booking.bloggersdelight.dk/widgets/offer?offer=Qg8U6&p=piliagency1448",
      },
    ],
  },
  {
    name: "Lisbeth Vernsted Fabricius",
    image: "/creators/lisbeth_fabricius.jpg",
    tags: [
      "Familie",
      "Angst",
      "Deltager i årgang 20 (TV2)",
      "Mor til 3",
      "Livsstil",
      "Bolig",
    ],
    texts: [
      "Lisbeth og familien er bedre kendt fra TV2's dokumentarserie, Årgang 20. Serien er en familie- og hverdagsrelateret serie på 18 sæsoner, med fast sæsonstart hvert år i januar.",
      "Lisbeth er 32 år, bor i en nybygget villa i Ålsgårde og er mor med stort M. Hun har Ayasofia på 3, Theodor på 6 & Filippa-Lucia på 8 år, som hun har sammen med sin mand Christian.",
      "Hun er meget åben og ærlig i sin tilgang til livet. Hun viser både de svære sider, og når det gælder om at vise styrke og udfordringer. Her især angst, vinkler fra livet med 3 børn og hvordan det kan påvirke parforholdet.",
    ],
    socials: [
      {
        platform: "Instagram",
        name: "@lisbethvfabricius",
        link: "https://www.instagram.com/lisbethvfabricius/",
      },
      {
        platform: "Mediakit",
        name: "Lisbeth Vernsted-Fabricius",
        link: "https://booking.bloggersdelight.dk/widgets/offer?offer=qilfg&p=piliagency1448",
      },
    ],
  },
  {
    name: "Malene Østergaard",
    image: "/creators/malene_ostergaard.jpg",
    tags: ["Vild Med Dans", "Mode", "Beauty", "Mor til 2", "Livsstil"],
    texts: [
      "Malene er 34 år, bor i en lejlighed på Islands Brygge og elsker livet som mor. Sammen med hendes mand Christian har hun drengene William og Oliver på 3 og 5år.",
      "Malene er idag en af Danmarks mest kendte dansere, udover at have vundet 'vild med Dans' i 2022 med skuespilleren Caspar Phillipson har hun også danset for artister som Jlo, Pitbull, Usher, Calvin Harris, Zendaya og Big Sean",
      "Hendes passion har altid været dans, bevægelse og koreografi, hvilket også afspejler sig i hendes kreative reels, hvor man altid er efterladt med et smil på læben.",
      "Hun nyder at dele hacks og tricks på alle mulige måder og elsker alt som relaterer sig til mode, beauty og selvfølgelig familielivet. For Malene handler det om at skabe magi i hverdagen, og det kan helt sikkert mærkes hos hendes trofaste følgere.",
    ],
    socials: [
      {
        platform: "Instagram",
        name: "@officialmalene",
        link: "https://instagram.com/officialmalene/",
      },
      {
        platform: "Malene Østergaard",
        name: "piliagency1448",
        link: "https://booking.bloggersdelight.dk/widgets/offer?offer=r0qeC&p=piliagency1448",
      },
    ],
  },
];

export default function creators() {
  return (
    <Layout title="Creators">
      <main className="pb-20">
        <div className="container max-w-6xl px-8 py-24 mx-auto xl:px-5">
          <h1 className="text-4xl font-serif font-extrabold mb-4 tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            Vores creators.
          </h1>
          <p className="text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
            Fremragende udvalg af influencere sikrer, at dit budskab når frem
            til de rigtige målgrupper.
          </p>
        </div>
        <div className="container max-w-6xl mx-auto px-4 sm:px-20 md:px-4 lg:px-16 flex flex-col gap-20">
          {creatorItems.map((item) => (
            <Creator key={item.name} {...item} />
          ))}
        </div>
      </main>
      <CTA
        heading="Har vi rette match til din næste kampagne?"
        subheading="Tøv ikke med at kontakte os."
      />
    </Layout>
  );
}
