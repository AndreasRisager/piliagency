import Image from "next/image";

export default function CaseIcon({ icon, headline, subheadline }) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 md:w-16 md:h-16 bg-darkpurple rounded-xl p-3 md:p-4 flex-shrink-0 flex items-center justify-center">
        <Image src={icon} height="50" width="50" alt="icon" />
      </div>
      <div className="ml-3 max-w-[215px]">
        <h3 className="text-lg md:text-3xl font-serif">{headline}</h3>
        <h4 className="text-sm md:text-base uppercase font-medium">{subheadline}</h4>
      </div>
    </div>
  );
}
