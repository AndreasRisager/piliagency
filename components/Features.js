import Image from "next/image";

export default function Features() {
  return (
    <section className="px-4 max-w-7xl mx-auto py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-y-20 items-center">
        <div className="md:pl-4">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">
            Troværdige kampagner:
          </h2>
          <p className="text-gray-700 lg:text-xl">
            Det der gør at influencer marketing skiller sig ud, er særligt én ting: autenticitet og
            troværdigheden! Aldrig har det været mere muligt at lave personlige kampagner. At
            kombinere et produkt eller ydelse i influenternes hverdag, så det passer naturligt ind,
            det giver os mulighed for at lave kampagner som bliver autentiske.
          </p>
        </div>
        <div>
          <Image
            height="479"
            width="718"
            src="/marketing2.jpg"
            alt="likes på post"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="md:col-start-2 md:row-start-2 md:pr-4">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">
            Datadrevet influencer marketing:
          </h2>
          <p className="text-gray-700 lg:text-xl">
            Vidste du at influencer marketing er muligt at data drive. Vi har adgang til alle vores
            influencers data og kan dermed nå ud til din målgruppe og opnå dine KPI'er.
          </p>
        </div>
        <div>
          <Image
            height="479"
            width="718"
            src="/screens.jpg"
            alt="skærme med data"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="md:pl-4">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">
            Dygtigste influencere som lever af dette arbejde.
          </h2>
          <p className="text-gray-700 lg:text-xl">
            Influencers lever af at formidle brugbart og flot content. De kan bruge al deres tid på
            det, da vi sidder med alt det tekniske og formelle. Der er ikke mange influencers i
            Danmark, der har en kommerciel forståelse, og ved hvor vigtigt det er at skabe værdi på
            metrics som klik, salg, nye købestærke følgere, social proof osv. Vores influencers er i
            fællesskabet med os, klædt på til at skabe mest mulig værdi for vores
            samarbejdspartnere.
          </p>
        </div>
        <div>
          <Image
            height="479"
            width="718"
            src="/marketing3.jpg"
            alt="instagram profil"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
