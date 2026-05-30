import { useMemo } from "react";

const BillSummary = ({
  items,
  total,
  addQty,
  removeQty,
  generateBill,
  loading = false,
}) => {
  const isEmpty = items.length === 0;

  const formattedTotal = useMemo(() => {
    return new Intl.NumberFormat("en-IN").format(total);
  }, [total]);

  return (
    <div
      className="w-full md:w-1/2 p-5 rounded-2xl shadow-2xl 
      bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white
      border border-gray-700"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold tracking-wide">🧾 Smart Bill</h2>

        <span className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20">
          {items.length} Items
        </span>
      </div>

      {/* Empty State */}
      {isEmpty && (
        <div className="text-center py-14 text-gray-400">
          <div className="text-4xl mb-2">🛒</div>
          <p className="text-lg font-semibold">Your cart is empty</p>
          <p className="text-sm">Add items to generate smart bill</p>
        </div>
      )}

      {/* Items */}
      {!isEmpty && (
        <div className="space-y-3 max-h-72 overflow-y-auto pr-2">
          {items.map((i) => (
            <div
              key={i.productId}
              className="flex justify-between items-center p-3 rounded-xl
              bg-white/10 backdrop-blur-md border border-white/10
              hover:bg-white/15 transition"
            >
              {/* Left */}
              <div>
                <p className="font-semibold">{i.name}</p>
                <p className="text-xs text-gray-300">
                  ₹{i.price} × {i.quantity} ={" "}
                  <span className="text-white font-medium">
                    ₹{i.price * i.quantity}
                  </span>
                </p>
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeQty(i.productId)}
                  className="w-8 h-8 rounded-lg bg-red-500 hover:bg-red-600"
                >
                  −
                </button>

                <span className="w-6 text-center">{i.quantity}</span>

                <button
                  onClick={() => addQty(i.productId)}
                  className="w-8 h-8 rounded-lg bg-green-500 hover:bg-green-600"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      {!isEmpty && (
        <>
          <div className="my-5 border-t border-white/20"></div>

          {/* Total Card */}
          <div
            className="flex justify-between items-center p-4 rounded-xl
            bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg"
          >
            <span className="font-semibold">Total Amount</span>
            <span className="text-2xl font-bold">₹{formattedTotal}</span>
          </div>

          {/* Button */}
          <button
            onClick={generateBill}
            disabled={loading}
            className={`w-full mt-4 py-3 rounded-xl font-bold transition
              ${
                loading
                  ? "bg-gray-500 cursor-not-allowed opacity-70"
                  : "bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white shadow-lg hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200"
              }`}
          >
            {loading ? "Generating..." : " Generate & Download Bill"}
          </button>
        </>
      )}
    </div>
  );
};

export default BillSummary;
