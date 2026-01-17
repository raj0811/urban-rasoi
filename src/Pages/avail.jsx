export default function MandlaLaunchSection() {
  return (
    <section className="py-16 px-4 md:px-10 bg-gradient-to-r from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Urban Rasoi is Now in <span className="text-green-600">Mandla</span> 🎉
        </h2>

        {/* Description */}
        <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-8">
          We’re excited to bring our <strong>pure vegetarian, hygienic, home-style
          tiffin service</strong> to Mandla!  
          Freshly cooked meals delivered daily for students, working professionals,
          and families.
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="bg-white px-6 py-3 rounded-full shadow text-sm font-medium">
            🍱 Daily Tiffin Service
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow text-sm font-medium">
            🌿 100% Pure Veg
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow text-sm font-medium">
            🚴 Home Delivery in Mandla
          </div>
        </div>

        {/* CTA Button */}
        <button className="px-10 py-3 rounded-full bg-green-600 text-white text-lg font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl">
          Contact Us
        </button>

      </div>
    </section>
  )
}
