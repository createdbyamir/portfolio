// src/sections/ContactSection.jsx

function ContactSection() {
  return (
    <section className="max-w-[700px] mx-auto px-4 py-12" id="contact">
      <h2 className="text-2xl font-lemon text-accent mb-6">Contact</h2>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-700 text-white placeholder-gray-400 border-none rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-700 text-white placeholder-gray-400 border-none rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full bg-gray-700 text-white placeholder-gray-400 border-none rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-accent text-foreground font-semibold px-4 py-2 rounded-md shadow hover:bg-yellow-400 transition" >
          Send message
        </button>
      </form>
    </section>
  );
}

export default ContactSection;
