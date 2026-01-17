import dal from "../assets/daal.jpg"
import paneer from "../assets/panner.jpg"
import paratha from "../assets/paratha.jpg"
import tiffin from "../assets/tiffin.jpg"

export default function MenuAndTiffin() {
  return (
    <section className="bg-white px-4 md:px-10 py-16">

      {/* ================= WHAT WE SERVE ================= */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          What We Serve
        </h2>
        <p className="text-gray-600 mb-12">
          Simple • Fresh • Pure Veg Home-Style Food
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Dal Chawal */}
          <div className="group rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden">
              <img
                src={dal}
                alt="Dal Chawal"
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold transition group-hover:text-green-600">
                Dal Chawal
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Comforting dal with steamed rice, cooked daily.
              </p>
            </div>
          </div>

          {/* Paneer */}
          <div className="group rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden">
              <img
                src={paneer}
                alt="Paneer Sabzi"
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold transition group-hover:text-green-600">
                Paneer Sabzi
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Fresh paneer cooked with mild home spices.
              </p>
            </div>
          </div>

          {/* Paratha */}
          <div className="group rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden">
              <img
                src={paratha}
                alt="Paratha"
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold transition group-hover:text-green-600">
                Fresh Paratha
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Soft, fresh parathas made without reuse oil.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= TIFFIN PLANS ================= */}
      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Daily Tiffin Service
          </h2>

          <p className="text-gray-700 mb-4">
            Enjoy <span className="font-semibold text-green-600">pure vegetarian</span> meals
            cooked in a hygienic kitchen, just like home.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>🍱 Lunch & Dinner (2 Times Daily)</li>
            <li>🌿 100% Pure Veg Food</li>
            <li>🧼 Hygienic Cooking Standards</li>
            <li>🕒 Fixed Delivery Time</li>
            <li>📅 Weekly & Monthly Plans Available</li>
          </ul>

          <button className="mt-8 px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white transition shadow-lg">
            Subscribe Tiffin
          </button>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={tiffin}
            alt="Lunch Box Tiffin"
            className="rounded-3xl shadow-xl max-h-[420px] w-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  )
}
