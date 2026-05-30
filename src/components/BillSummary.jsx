const BillSummary = ({ items, total, addQty, removeQty, generateBill }) => {
    return (
      <div className="w-1/2 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Bill</h2>
  
        {items.length === 0 && (
          <p className="text-gray-500">No items added</p>
        )}
  
        {items.map((i) => (
          <div
            key={i.productId}
            className="flex justify-between items-center mb-3"
          >
            <div>
              <p className="font-medium">{i.name}</p>
              <p className="text-sm text-gray-500">
                ₹{i.price} x {i.quantity}
              </p>
            </div>
  
            <div className="flex items-center gap-2">
              <button
                onClick={() => removeQty(i.productId)}
                className="px-2 bg-red-500 text-white rounded"
              >
                −
              </button>
              <span>{i.quantity}</span>
              <button
                onClick={() => addQty(i.productId)}
                className="px-2 bg-green-500 text-white rounded"
              >
                +
              </button>
            </div>
          </div>
        ))}
  
        <hr className="my-4" />
  
        <h3 className="text-lg font-bold">Total: ₹{total}</h3>
  
        <button
          onClick={generateBill}
          disabled={items.length === 0}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          Download PDF
        </button>
      </div>
    );
  };
  
  export default BillSummary;
  
