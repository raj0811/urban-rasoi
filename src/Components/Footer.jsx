export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Urban Rasoi
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Pure vegetarian, home-style meals cooked with hygiene and care.
              Daily tiffin service for students, professionals, and families.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-green-400 cursor-pointer">Home</li>
              <li className="hover:text-green-400 cursor-pointer">Menu</li>
              <li className="hover:text-green-400 cursor-pointer">Tiffin Plans</li>
              <li className="hover:text-green-400 cursor-pointer">About Us</li>
              <li className="hover:text-green-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* TIFFIN SERVICE */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Tiffin Service
            </h3>
            <ul className="space-y-2 text-sm">
              <li>🍱 Lunch & Dinner</li>
              <li>🌿 100% Pure Veg</li>
              <li>🧼 Hygienic Kitchen</li>
              <li>🚴 Daily Home Delivery</li>
              <li>📅 Weekly & Monthly Plans</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li>📞 +91 98765 43210</li>
              <li>📍 Serving Selected Areas</li>
              <li>🕒 Lunch & Dinner Timings</li>
              <li>
                <button className="mt-3 inline-block px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white transition">
                  WhatsApp Order
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Urban Rasoi. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
