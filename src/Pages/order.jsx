import zomato from "../assets/zomato.png"
import swiggy from "../assets/swiggy.png"
import zustle from "../assets/zustle.png"

export default function OrderPlatforms() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Order From Your Favorite App
        </h2>
        <p className="text-gray-600 mb-12">
          Fresh • Pure Veg • Delivered Hot at Your Doorstep
        </p>

        {/* Platforms */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* Zomato */}
          <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer border hover:border-red-500">
            <img
              src={zomato}
              alt="Order on Zomato"
              className="h-20 mx-auto object-contain group-hover:scale-110 transition"
            />
            <p className="mt-4 font-medium text-gray-700">
              Order on Zomato
            </p>
          </div>

          {/* Swiggy */}
          <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer border hover:border-orange-500">
            <img
              src={swiggy}
              alt="Order on Swiggy"
              className="h-20 mx-auto object-contain group-hover:scale-110 transition"
            />
            <p className="mt-4 font-medium text-gray-700">
              Order on Swiggy
            </p>
          </div>

          {/* Zustle */}
          <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer border hover:border-green-500">
            <img
              src={zustle}
              alt="Order on Zustle"
              className="h-20 mx-auto object-contain group-hover:scale-110 transition"
            />
            <p className="mt-4 font-medium text-gray-700">
              Order on Zustle
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
