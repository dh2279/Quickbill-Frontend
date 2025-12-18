const ProductList = ({ products, addItem }) => {
    return (
      <div className="w-1/2">
        <h2 className="text-xl font-bold mb-4">Products</h2>
  
        {products.map((p) => (
          <div
            key={p.id}
            className="flex justify-between items-center p-3 mb-2 bg-white rounded shadow"
          >
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-gray-500">₹{p.price}</p>
            </div>
  
            <button
              onClick={() => addItem(p)}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              +
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;
  