const ProductList = ({ products, addItem }) => {
  return (
    <div className="w-full p-4">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-5 tracking-wide">🍽️ Menu </h2>

      {/* Grid Menu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="relative p-4 rounded-2xl cursor-pointer
            bg-white/10 backdrop-blur-xl border border-white/10
            hover:scale-105 hover:bg-white/20 transition-all duration-200
            shadow-lg"
          >
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition
              bg-gradient-to-r from-purple-500/10 to-blue-500/10"
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-lg font-semibold">{p.name}</p>

              <p className="text-green-400 font-bold text-lg mt-1">
                ₹{p.price}
              </p>

              {/* Add Button */}
              <button
                onClick={() => addItem(p)}
                className="mt-3 w-full py-2 rounded-xl font-semibold
                bg-gradient-to-r from-blue-500 to-purple-600
                hover:from-purple-600 hover:to-blue-500
                active:scale-95 transition"
              >
                ➕ Add 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
