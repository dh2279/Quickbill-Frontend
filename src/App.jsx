import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import BillSummary from "./components/BillSummary";
import { getProducts, createBill, downloadPdf } from "./services/api";

function App() {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
  }, []);

  const addItem = (p) => {
    const found = items.find((i) => i.productId === p.id);

    if (found) {
      setItems(
        items.map((i) =>
          i.productId === p.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setItems([
        ...items,
        {
          productId: p.id,
          name: p.name,
          price: p.price,
          quantity: 1,
        },
      ]);
    }
  };

  const addQty = (id) => {
    setItems(
      items.map((i) =>
        i.productId === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const removeQty = (id) => {
    setItems(
      items
        .map((i) =>
          i.productId === id
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const total = items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  const generateBill = async () => {
    const bill = {
      items: items.map((i) => ({
        productId: i.productId,
        quantity: i.quantity,
      })),
    };

    const res = await createBill(bill);
    const billId = res.data.id;

    const pdf = await downloadPdf(billId);
    const url = window.URL.createObjectURL(new Blob([pdf.data]));
    const a = document.createElement("a");
    a.href = url;
    a.download = "invoice.pdf";
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Cafe Billing System
      </h1>

      <div className="flex gap-6">
        <ProductList products={products} addItem={addItem} />
        <BillSummary
          items={items}
          total={total}
          addQty={addQty}
          removeQty={removeQty}
          generateBill={generateBill}
        />
      </div>
    </div>
  );
}

export default App;
