import { useEffect, useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1AJEymYQpPGRpai7rAzWmPTGnJlu5sXcfWDHCaDdTY6k/Sheet1"
    )
      .then(res => res.json())
      .then(data => {
        setMenu(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const addItem = (item, index) => {
    setCart(prev => {
      const found = prev.find(i => i.id === index);
      if (found) {
        return prev.map(i =>
          i.id === index ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: index,
          name: item["Item Name"],
          price: Number(item.Price),
          qty: 1,
        },
      ];
    });
  };

  const removeItem = index => {
    setCart(prev =>
      prev
        .map(i =>
          i.id === index ? { ...i, qty: i.qty - 1 } : i
        )
        .filter(i => i.qty > 0)
    );
  };

  const totalAmount = cart.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  const placeOrderOnWhatsApp = () => {
    let message = `🛒 *Urban Rasoi Order*%0A%0A`;

    cart.forEach(item => {
      message += `• ${item.name} x ${item.qty} = ₹${item.price * item.qty}%0A`;
    });

    message += `%0A*Total:* ₹${totalAmount}%0A`;
    message += `%0A📍 Mandla%0A🙏 Please confirm my order.`;

    const phoneNumber = "917000061754";
    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading menu...
      </div>
    );
  }

  return (
    <>
      {/* 🔥 DARK SECONDARY NAVBAR */}
      <div className="h-[18vh] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto h-full px-4 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Urban Rasoi
          </h1>

          <div className="flex items-center gap-3 mt-2 text-sm text-gray-300">
            <span className="px-2 py-0.5 rounded bg-green-600 text-white text-xs">
              🌱 Pure Veg
            </span>
            <span>Home-style • Hygienic • Mandla</span>
          </div>

          <p className="text-sm text-gray-400 mt-3 max-w-xl">
            Freshly cooked vegetarian food, made daily just like home.
          </p>
        </div>
      </div>

      {/* MENU */}
      <section className="bg-gray-50 min-h-screen pb-36">
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-5">
          {menu.map((item, index) => {
            const cartItem = cart.find(i => i.id === index);

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm hover:shadow-md transition"
              >
                {/* LEFT */}
                <div className="flex-1">
                  <h3 className="font-semibold text-base md:text-lg">
                    🌱 {item["Item Name"]}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {item.Description}
                  </p>

                  <p className="mt-2 font-semibold text-gray-900">
                    ₹{item.Price}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="relative w-28 shrink-0">
                  {item["Image URL"] && (
                    <img
                      src={item["Image URL"]}
                      alt={item["Item Name"]}
                      className="h-24 w-full rounded-xl object-cover"
                    />
                  )}

                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                    {!cartItem ? (
                      <button
                        onClick={() => addItem(item, index)}
                        className="bg-white border border-green-600 text-green-600 px-4 py-1 rounded-lg text-sm font-semibold shadow"
                      >
                        ADD
                      </button>
                    ) : (
                      <div className="flex items-center bg-white border border-green-600 rounded-lg shadow text-green-600">
                        <button
                          onClick={() => removeItem(index)}
                          className="px-2 text-lg"
                        >
                          −
                        </button>
                        <span className="px-2 text-sm font-semibold">
                          {cartItem.qty}
                        </span>
                        <button
                          onClick={() => addItem(item, index)}
                          className="px-2 text-lg"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 🛒 BOTTOM ORDER BAR */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-green-600 text-white px-4 py-4 flex justify-between items-center shadow-2xl">
          <div>
            <p className="text-xs opacity-90">
              {cart.length} items
            </p>
            <p className="font-semibold text-lg">
              ₹{totalAmount}
            </p>
          </div>

          <button
            onClick={placeOrderOnWhatsApp}
            className="bg-white text-green-600 px-6 py-2 rounded-xl font-semibold"
          >
            Place Order →
          </button>
        </div>
      )}
    </>
  );
}
