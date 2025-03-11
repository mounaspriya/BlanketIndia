// "use client";
// import { useState, useEffect } from "react";

// export default function Home() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/api/scrape?q=weighted+blanket")
//       .then(res => res.json())
//       .then(data => setProducts(data))
//       .catch(err => console.error("Error fetching products:", err));
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">10 Best Weighted Blankets</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product, index) => (
//           <div key={index} className="border p-4 rounded-lg shadow-md">
//             <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
//             <h2 className="text-lg font-semibold">{product.title}</h2>
//             <p className="text-gray-600">Price: ₹{product.price}</p>
//             <p className="text-yellow-500">{product.rating}</p>
//             <a
//               href={product.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               View Deal
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import ProductList from "../../src/components/ProductList"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Best Weighted Blankets in India</h1>
        <ProductList />
      </div>
    </main>
  )
}


