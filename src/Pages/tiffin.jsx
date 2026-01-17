import delivery from "../assets/food-del.jpg"

export default function TiffinPlans() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Tiffin Plans & Pricing
          </h1>
          <p className="text-gray-600">
            Affordable • Pure Veg • Home-Style Meals Delivered Daily
          </p>
        </div>

        {/* ================= PRICING CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* -------- Lunch Plan -------- */}
          <div className="
            bg-white rounded-3xl p-8 text-center
            border-2 border-transparent
            shadow-md
            transition-all duration-300
            hover:scale-105
            hover:border-green-500
            hover:shadow-2xl
          ">
            <h3 className="text-xl font-semibold mb-3">Lunch Tiffin</h3>
            <p className="text-gray-600 mb-6">Perfect for office & students</p>

            <div className="text-3xl font-bold text-green-600 mb-2">
              ₹80<span className="text-base text-gray-500"> / day</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">Weekly & Monthly Plans</p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li>🍚 Roti / Rice</li>
              <li>🥗 Sabzi + Dal</li>
              <li>🧼 Hygienic Packing</li>
              <li>🕒 Fixed Lunch Delivery</li>
            </ul>

            <button className="w-full py-3 rounded-full bg-green-500 hover:bg-green-600 text-white transition">
              Subscribe Lunch
            </button>
          </div>

          {/* -------- Lunch + Dinner (POPULAR) -------- */}
          <div className="
            bg-white rounded-3xl p-8 text-center
            hover:border-2 border-green-500
            shadow-xl
            scale-105
            transition-all duration-300
            hover:scale-110
            hover:shadow-2xl
          ">
            <span className="inline-block mb-4 px-4 py-1 text-sm bg-green-100 text-green-700 rounded-full">
              Most Popular
            </span>

            <h3 className="text-xl font-semibold mb-3">Lunch + Dinner</h3>
            <p className="text-gray-600 mb-6">Complete daily meals</p>

            <div className="text-3xl font-bold text-green-600 mb-2">
              ₹150<span className="text-base text-gray-500"> / day</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">Best Value Plan</p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li>🍱 2 Meals Daily</li>
              <li>🌿 100% Pure Veg</li>
              <li>🧼 Hygienic Kitchen</li>
              <li>🕒 Timely Delivery</li>
            </ul>

            <button className="w-full py-3 rounded-full bg-green-600 hover:bg-green-700 text-white transition">
              Subscribe Full Plan
            </button>
          </div>

          {/* -------- Dinner Plan -------- */}
          <div className="
            bg-white rounded-3xl p-8 text-center
            border-2 border-transparent
            shadow-md
            transition-all duration-300
            hover:scale-105
            hover:border-green-500
            hover:shadow-2xl
          ">
            <h3 className="text-xl font-semibold mb-3">Dinner Tiffin</h3>
            <p className="text-gray-600 mb-6">Light & homely dinner</p>

            <div className="text-3xl font-bold text-green-600 mb-2">
              ₹80<span className="text-base text-gray-500"> / day</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">Weekly & Monthly Plans</p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li>🥘 Fresh Dinner</li>
              <li>🍽️ Home-Style Taste</li>
              <li>🧼 Clean Packaging</li>
              <li>🕒 Fixed Dinner Delivery</li>
            </ul>

            <button className="w-full py-3 rounded-full bg-green-500 hover:bg-green-600 text-white transition">
              Subscribe Dinner
            </button>
          </div>
        </div>

        {/* ================= DELIVERY SECTION ================= */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Reliable Daily Delivery
            </h2>

            <p className="text-gray-700 mb-4">
              Your tiffin is delivered <span className="font-semibold text-green-600">fresh & on time</span>,
              directly from our kitchen to your doorstep.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>🚴 Dedicated delivery partners</li>
              <li>📦 Secure & hygienic packaging</li>
              <li>⏰ Fixed delivery slots</li>
              <li>📍 Limited delivery radius for freshness</li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={delivery}
              alt="Tiffin Delivery Service"
              className="rounded-3xl shadow-xl w-full max-h-[420px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
