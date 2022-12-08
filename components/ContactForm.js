export default function ContactForm({ name = "kontakt", className }) {
  if (typeof window === "undefined") return;

  return (
    <form
      method="POST"
      data-netlify="true"
      action="/succes"
      name={name}
      id="contact"
      className={className}>
      <input
        type="hidden"
        name="subject"
        value="Formularindsendelse - Pili Agency."
        className="hidden"
      />
      <input
        type="text"
        name="name"
        className="block w-full px-4 py-3 mb-4 border-2 border-gray-200 focus:ring focus:ring-beige focus:outline-none rounded-lg"
        placeholder="Fulde navn"
        required
      />
      <input
        type="email"
        name="email"
        className="block w-full px-4 py-3 mb-4 border-2 border-gray-200 focus:ring focus:ring-beige focus:outline-none rounded-lg"
        placeholder="Email address"
        required
      />
      <textarea
        name="message"
        className="block w-full px-4 py-3 mb-4 border-2 border-gray-200 focus:ring focus:ring-beige focus:outline-none rounded-lg"
        placeholder="Besked"
        required></textarea>
      <button
        className="block w-full px-3 py-4 font-medium text-white bg-beige hover:bg-beigehover focus:bg-beigehover focus:ring focus:ring-gray-900 focus:outline-none rounded-lg"
        type="submit">
        Send
      </button>
    </form>
  );
}
