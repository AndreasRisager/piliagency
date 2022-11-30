export default function ContactForm() {
  return (
    <section className="bg-gray-100" id="kontakt">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full space-y-5 lg:w-3/5 md:pr-4 lg:pr-16">
            <p className="font-medium text-beigehover uppercase">Vi ser frem til at høre fra dig</p>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-5xl">
              Vi hjælper dig med at vækste med influencer marketing.
            </h2>
            <p className="text-xl text-gray-600 md:pr-16">
              Har du lyst til at høre mere om hvordan vi kan hjælpe dig, så kontakt os her.
            </p>
          </div>

          <div className="w-full mt-16 md:mt-0 lg:w-2/5">
            <form
              method="POST"
              data-netlify="true"
              name="kontakt"
              id="contact"
              className="relative z-10 h-auto py-10 px-4 sm:px-7 overflow-hidden bg-white border-b-2 border-gray-300 shadow-2xl sm:rounded-lg -mx-4 sm:mx-0">
              <input type="hidden" name="subject" value="Formularindsendelse - Pili Agency." />
              <input
                type="text"
                name="name"
                className="block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 focus:ring focus:ring-beige focus:outline-none rounded-lg"
                placeholder="Fulde navn"
                required
              />
              <input
                type="email"
                name="email"
                className="block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 focus:ring focus:ring-beige focus:outline-none rounded-lg"
                placeholder="Email address"
                required
              />
              <textarea
                name="message"
                className="block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 focus:ring focus:ring-beige focus:outline-none rounded-lg"
                placeholder="Besked"
                required></textarea>
              <button className="w-full px-3 py-4 font-medium text-white bg-beige hover:bg-beigehover focus:bg-beigehover rounded-lg">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
