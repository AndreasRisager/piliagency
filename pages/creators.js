import Creator from "../components/Creator";
import CTA from "../components/CTA";
import Layout from "../components/Layout";

const creatorItems = [
  {
    name: "Anna David",
    images: [
      "/creators/anna_david/anna_david.jpg",
      "/creators/anna_david/anna_david-2.jpg",
      "/creators/anna_david/anna_david-3.jpg",
      "/creators/anna_david/anna_david-4.jpg",
    ],
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
    ],
    priority: true,
  },
  {
    name: "Mette Sommer",
    images: ["/creators/mette_sommer/mette_sommer.jpg"],
    tags: ["Natur", "Oplevelser", "Socialt Liv", "Livsstil"],
    texts: [
      "Mettes profil er blevet taget med storm, netop på grund af hendes uopstillede profil, som tager sine følgere med i et ærligt og troværdigt univers.",
      `Der har været meget fokus på Mette, grundet hendes deltagelse i Tv programmet “Bachelor”, som rullede over skærmen i foråret samt hendes sag hvor hun var med i "Støt brysterne". Dette kan også ses på hendes høje reach, både på post og stories.`,
      'Mette er 34 år og bor i en lejlighed i København, sammen med hendes kæreste.',
      'Hun har en meget målrettet niche inden for oplevelser, livsstil og natur, men mest af alt så vil hun gerne ses som "den helt almindelige danske kvinde". Dette er også noget hendes følgere kan relatere til og det ses også i hendes meget aktive engagement rate.'
      ],
    socials: [
      {
        platform: "Instagram",
        name: "@mettecsommer",
        link: "https://www.instagram.com/mettecsommer/",
      },
    ],
  },
  {
    name: "Sanne Natasha",
    images: ["/creators/sanne_natasha/sanne_natasha.jpg"],
    tags: [
      "Familie",
      "Elsker at lave sjove og releterbar reels",
      "Oplevelser",
      "Sport",
    ],
    texts: [
      "Sanne Natasha er 36 år, bor i Valby med hendes mand og deres to drenge. Sanne er fantastisk sjov i hendes formidling af reels! Hun arbejder fuldtid med sin profil på Instagram, som er i rivende udvikling!",
      "Hun formår at være relaterbar og personlig i hendes content. Man kan godt sige at hun virkelig har knækket koden til at underholde sine følgere!",
      "Sanne forstår sit publikum og deres behov, og hun formår at levere indhold, der er både informativt og underholdende. Hendes reels/post og stories viser hendes daglige liv som mor og giver en ærlig og autentisk indsigt i, det at være en alm. børnefamilie.",
      "Sanne er kommerciel dygtig inden for familielivet, oplevelser, livsstil, træning og beauty. Hun er allerbedst hvis hun får frie tøjler til at formidle en kreativ og sjov reel!",
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
    ],
  },
  {
    name: "Line Dupont",
    images: ["/creators/line_dupont/line_dupont.jpg", "/creators/line_dupont/line_dupont-2.jpg", "/creators/line_dupont/line_dupont-3.jpg", "/creators/line_dupont/line_dupont-4.jpg", "/creators/line_dupont/line_dupont-5.jpg", "/creators/line_dupont/line_dupont-6.jpg", "/creators/line_dupont/line_dupont-7.jpg"],
    tags: [
      "Familie",
      "DIY",
      "Bolig",
      "Indretning",
      "Gør det selv",
      "Oplevelser",
    ],
    texts: [
      "Line er kendt for hendes inspirerende og vilde bolig univers! Hun er en af de mest indflydelsesrige stemmer inden for bolig- og interiørindustrien.",
      "Hendes passion har altid været DIY og indretning, som startede da hun istandsatte sin første lejlighed som 18-årig. Hendes store passion for indretning har medført, at hun har opbygget et stort følgeskab på sin profil, hvor hun deler ud af sin kreative tilgang til DIY-projekter, Ikea-hacks, indretning og meget mere.",
      "Line er netop flyttet ind i deres nye hus på Østerbro med sin familie, som hun selv har været med til at total renovere!",
      "Hun er kommercielt interessant for bolig både inde og ude, kunst, DIY samt familie relaterede virksomheder.",
    ],
    socials: [
      {
        platform: "Instagram",
        name: "@_linedupont_",
        link: "https://www.instagram.com/_linedupont_/",
      },
    ],
  },
  {
    name: "Lisbeth Vernsted Fabricius",
    images: ["/creators/lisbeth_fabricius/lisbeth_fabricius.jpg", "/creators/lisbeth_fabricius/lisbeth_fabricius-2.jpg", "/creators/lisbeth_fabricius/lisbeth_fabricius-3.jpg", "/creators/lisbeth_fabricius/lisbeth_fabricius-4.jpg", "/creators/lisbeth_fabricius/lisbeth_fabricius-5.jpg", "/creators/lisbeth_fabricius/lisbeth_fabricius-6.jpg"],
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
      "Lisbeth er 33 år, bor i en nybygget villa i Ålsgårde og er mor med stort M. Hun har Ayasofia på 4, Theodor på 7 & Filippa-Lucia på 9 år, som hun har sammen med sin mand Christian.",
      "Hun er meget åben og ærlig i sin tilgang til livet. Hun viser både de svære sider, og når det gælder om at vise styrke og udfordringer. Her især angst, vinkler fra livet med 3 børn og hvordan det kan påvirke parforholdet. Lisbeth er en rollemodel for mange af sine følgere og har et særligt sammenhold på hendes profil.",
    ],
    socials: [
      {
        platform: "Instagram",
        name: "@lisbethvfabricius",
        link: "https://www.instagram.com/lisbethvfabricius/",
      },
    ],
  },
  {
    name: "Malene Østergaard",
    images: ["/creators/malene_ostergaard/malene_ostergaard.jpg","/creators/malene_ostergaard/malene_ostergaard-2.jpg","/creators/malene_ostergaard/malene_ostergaard-3.jpg","/creators/malene_ostergaard/malene_ostergaard-4.jpg","/creators/malene_ostergaard/malene_ostergaard-5.jpg","/creators/malene_ostergaard/malene_ostergaard-6.jpg","/creators/malene_ostergaard/malene_ostergaard-7.jpg","/creators/malene_ostergaard/malene_ostergaard-8.jpg","/creators/malene_ostergaard/malene_ostergaard-9.jpg","/creators/malene_ostergaard/malene_ostergaard-10.jpg","/creators/malene_ostergaard/malene_ostergaard-11.jpg"],
    tags: ["Vild Med Dans", "Mode", "Beauty", "Mor til 2", "Livsstil"],
    texts: [
      "Malene er 35 år, bor i en lejlighed på Islands Brygge og elsker livet som mor. Sammen med hendes mand Christian har hun drengene William og Oliver på 5 og 7 år.",
      "Malene er i dag en af Danmarks mest kendte dansere, udover at have vundet 'Vild med Dans' i 2022 med skuespilleren Caspar Phillipson har hun også danset for artister som Jlo, Pitbull, Usher, Calvin Harris, Zendaya og Big Sean. Malene deltager også i dette års Vild med Dans.",
      "Hendes passion har altid været dans, bevægelse og koreografi, hvilket også afspejler sig i hendes kreative reels, hvor man altid er efterladt med et smil på læben.",
      "Hun nyder at dele tips og tricks på alle mulige måder og elsker alt som relaterer sig til mode, beauty og selvfølgelig familielivet. For Malene handler det om at skabe magi i hverdagen, og det kan helt sikkert mærkes hos hendes trofaste følgere.",
    ],
    socials: [
      {
        platform: "Instagram",
        name: "@officialmalene",
        link: "https://instagram.com/officialmalene/",
      },
    ],
  },
  {
    name: "Simone Lykke",
    images: ["/creators/simone_lykke/simone_lykke.jpg", "/creators/simone_lykke/simone_lykke-2.jpg", "/creators/simone_lykke/simone_lykke-3.jpg", "/creators/simone_lykke/simone_lykke-4.jpg"],
    tags: ["Vegan", "Interior", "Bæredygtig", "Familie", "Sorg og Angst"],
    texts: [
      "Simone Lykke slog for alvor igennem i 2016 i den anmelderroste danske biograffilm Hundeliv.",
      "Siden da har hun slået sit navn fast i både ind- og udland, som alt fra den tjekkede skønhedsdronning Amanda i Friheden 2 til Benedikte Skans i hit-serien Kastanjemanden, som mildest talt tog danskerne med storm.",
      "På instagram er Simone en passioneret, æstetisk og humoristisk kvinde, som har en målrettet profil inden for bæredygtighed og vegetarisk mad. Som hun selv beskriver det ”Bare at være rigtig god mod jorden!”.",
      "Simone bor til dagligt i København, med hendes kæreste og to døtre, som er svære ikke at falde pladask for.",
      "Simone og hendes kæreste har fornyeligt totalrenoveret deres (bæredygtige) hjem, hvor indretning og bæredygtige valg er i højsæde. Simone vil meget gerne tale højt om at passe på sig selv og på vores miljø!",
    ],
    lines: 3,
    socials: [
      {
        platform: "Instagram",
        name: "@simonelykkep",
        link: "https://www.instagram.com/simonelykkep/",
      },
    ],
  },
  {
    name: "Rasmus Andersen",
    images: ["/creators/rasmus_andersen/rasmus_andersen.jpg"],
    texts: [
      "Autencitet, humør, ægthed, kvalitet og gode oplevelser er nøgleordene i Rasmus liv. Han er til daglig alenefar med sin lille hund Bo og de gør et ihærdigt forsøg på, at få det bedste ud af livet. Rasmus er én humoristisk, autentisk og jordnær person.",
      "Rasmus har en bred skarre af interesser, han elsker nemlig alt fra mode, indretning, oplevelser og god mad. ",
      "Han har deltaget i TV2 programmet Sommerdrømme og dette års Bachelorette.",
      "Hans force er helt klart, at han er 100 procent sig selv, og ikke er bange for at dele ud af livets op- og nedture, hvilket gør at hans SoMe kanaler er meget autentiske. Han har også en forkærlighed for TikTok hvor han deler ud af sin hverdag - allerhelst på en humoristisk måde.",
      "Rasmus brænder for at arbejde med unge mennesker, og er ikke bleg for at italesætte svære emner såsom mobning, ensomhed og uddannelsesvalg.",
    ],
    socials: [
      {
        platform: "Instagram",
        name: "@fartilbo",
        link: "https://www.instagram.com/fartilbo/",
      },
      {
        platform: "Tiktok",
        name: "@fartilbo",
        link: "https://www.tiktok.com/@fartilbo",
      },
    ],
  },
  {
    name: "Anne Bertram",
    images: ["/creators/anne_bertram/anne_bertram.jpg"],
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
    ],
  },
  {
    name: "Kristine Melgaard-Mani",
    images: ["/creators/kristine_melgaard-mani/kristine_melgaard-mani.jpg","/creators/kristine_melgaard-mani/kristine_melgaard-mani-2.jpg","/creators/kristine_melgaard-mani/kristine_melgaard-mani-3.jpg"],
    tags: ["økonomi", "opskrifter", "familie", "oplevelser"],
    texts: [
      "Kristine er kendt for at dele økonomiske tips, madplaner, opskrifter og oplevelser for familien - alt sammen med et ønske om, at hjælpe andre til at få et bedre økonomisk overblik.",
      "Profilen har været på en vild vækstrejse, og er på bare ét år gået fra 10.000 følgere til over 81.000 følgere. Kristine har været på live TV flere gange og er omtalt i flere magasiner.",
      "Lige nu er hun i gang med at skrive en kogebog, som deler økonomiske tips til madplaner, indkøb og opskrifter.",
      "Kristine er 32 år gammel og bor i Helsingør med sin mand og deres to børn, Annie på 6 år og Wilhelm på 3 år.",
      "Hun skaber autentisk og informerede indhold, der kan hjælpe almindelig dansker med sparetricks i hverdagen!"
    ],
    socials: [
      {
        platform: "Instagram",
        name: "@familieliv_paabudget",
        link: "https://www.instagram.com/familieliv_paabudget/",
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
