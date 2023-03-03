import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="bg-gray-100" id="kontakt">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full space-y-5 lg:w-3/5 md:pr-4 lg:pr-16">
            <p className="font-medium text-beigehover uppercase">Vi ser frem til at høre fra dig</p>
            <h3 className="text-2xl font-medium text-neutral-900 sm:text-3xl">
              Har du lyst til at høre mere om hvordan vi kan hjælpe dig, så kontakt os her.
            </h3>
          </div>

          <div className="w-full mt-16 md:mt-0 lg:w-2/5">
            <ContactForm className="py-10 px-4 sm:px-7 bg-white shadow-2xl rounded-lg -mx-2 sm:mx-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
