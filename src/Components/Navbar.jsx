import React from "react"
import veg from "../assets/veg.jpg"
export default function NavbarHero() {
  return (
    <header
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{
         backgroundImage: `url(${veg})`,
      }}
    >
      {/* STRONG OVERLAY FOR CONTRAST */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* NAVBAR */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-white">
        <div className="text-2xl font-bold tracking-wide text-green-400">
          Urban Rasoi 2
        </div>

        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-green-400 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-green-400 cursor-pointer transition">
            About
          </li>
          <li className="hover:text-green-400 cursor-pointer transition">
            Contact
          </li>
        </ul>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-10 min-h-[80vh] flex items-center justify-end px-6 md:px-20">
        <div className="max-w-xl text-right text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">
            Pure Veg <span className="text-green-400">Food Like Home</span>
          </h1>

          <p className="mt-5 text-lg text-gray-200 italic leading-relaxed">
            “Wholesome vegetarian meals cooked with purity, tradition,
            and the warmth of a home kitchen.”
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-12 flex flex-wrap justify-end gap-4">
            <button className="px-7 py-3 rounded-full border border-white/80 hover:bg-white hover:text-black transition duration-300">
              Home
            </button>

            <button className="px-7 py-3 rounded-full bg-green-500 hover:bg-green-600 transition duration-300 shadow-lg">
              Order Now
            </button>

            <button className="px-7 py-3 rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition duration-300">
              Subscribe (Tiffin)
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
