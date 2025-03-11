"use client"

// import { useEffect, useState } from "react"

// export default function ProductList() {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         setLoading(true)
//         const res = await fetch("/api/scrape")

//         if (!res.ok) {
//           throw new Error(`HTTP error! Status: ${res.status}`)
//         }

//         const data = await res.json()

//         if (data.error) {
//           throw new Error(data.error)
//         }

//         setProducts(data)
//         setError(null)
//       } catch (error) {
//         console.error("Error fetching products:", error)
//         setError(error.message)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchProducts()
//   }, [])

//   if (error) {
//     return (
//       <div className="p-4 max-w-4xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4">Weighted Blankets</h2>
//         <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
//           <p>Error: {error}</p>
//           <p className="text-sm mt-2">Please try again later or contact support if the issue persists.</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Weighted Blankets</h2>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//           <span className="ml-2">Loading products...</span>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.length > 0 ? (
//             products.map((product, index) => (
//               <div
//                 key={index}
//                 className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <div className="relative">
//                   {product.discount && (
//                     <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
//                       {product.discount}
//                     </span>
//                   )}
//                   <div className="h-48 bg-gray-100 flex items-center justify-center">
//                     {product.image ? (
//                       <img
//                         src={product.image || "/placeholder.svg"}
//                         alt={product.title}
//                         className="h-full w-full object-contain p-2"
//                         onError={(e) => {
//                           e.target.onerror = null
//                           e.target.src = `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(product.title)}`
//                         }}
//                       />
//                     ) : (
//                       <img
//                         src={`/placeholder.svg?height=200&width=200&text=${encodeURIComponent(product.title)}`}
//                         alt={product.title}
//                         className="h-full w-full object-contain"
//                       />
//                     )}
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   {product.rank && (
//                     <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded mb-2">
//                       #{product.rank}
//                     </span>
//                   )}
//                   {product.brand && <p className="text-sm text-gray-500 mb-1">{product.brand}</p>}
//                   <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
//                   {product.rating && (
//                     <div className="flex items-center mb-2">
//                       <div className="flex text-yellow-400">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                           <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                             <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                           </svg>
//                         ))}
//                       </div>
//                       <span className="ml-1 text-sm font-medium text-gray-600">{product.rating}</span>
//                     </div>
//                   )}
//                   {product.link && (
//                     <a
//                       href={product.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="mt-2 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-sm transition-colors"
//                     >
//                       View Product
//                     </a>
//                   )}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-span-full text-center py-10">
//               <p className="text-gray-500">No products found. Please try again later.</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }




// import { useEffect, useState } from "react"

// export default function ProductList() {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         setLoading(true)
//         const res = await fetch("/api/scrape")

//         if (!res.ok) {
//           throw new Error(`HTTP error! Status: ${res.status}`)
//         }

//         const data = await res.json()

//         if (data.error) {
//           throw new Error(data.error)
//         }

//         // Ensure all required fields are present and format the data
//         const formattedProducts = data.map((product) => ({
//           title: product.title || "Untitled Product",
//           image: product.image || "/placeholder.svg",
//           link: product.link?.startsWith("/") ? `https://www.bestreviewsonline.in${product.link}` : product.link || "#",
//           rank: product.rank || 0,
//         }))

//         setProducts(formattedProducts)
//         setError(null)
//       } catch (error) {
//         console.error("Error fetching products:", error)
//         setError(error.message)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchProducts()
//   }, [])

//   if (error) {
//     return (
//       <div className="p-4 max-w-4xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4">Weighted Blankets</h2>
//         <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
//           <p>Error: {error}</p>
//           <p className="text-sm mt-2">Please try again later or contact support if the issue persists.</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Weighted Blankets</h2>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//           <span className="ml-2">Loading products...</span>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.length > 0 ? (
//             products.map((product, index) => (
//               <div
//                 key={index}
//                 className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <div className="relative">
//                   <div className="h-48 bg-gray-100 flex items-center justify-center">
//                     <img
//                       src={product.image || "/placeholder.svg"}
//                       alt={product.title}
//                       className="h-full w-full object-contain p-2"
//                       onError={(e) => {
//                         e.target.onerror = null
//                         e.target.src = `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(product.title)}`
//                       }}
//                     />
//                   </div>
//                   {product.rank > 0 && (
//                     <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//                       #{product.rank}
//                     </span>
//                   )}
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-semibold text-lg mb-4 line-clamp-2">{product.title}</h3>
//                   <a
//                     href={product.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center transition-colors"
//                   >
//                     View Product
//                   </a>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-span-full text-center py-10">
//               <p className="text-gray-500">No products found. Please try again later.</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }




//"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        const res = await fetch("/api/scrape")

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const data = await res.json()

        if (data.error) {
          throw new Error(data.error)
        }

        // Ensure all products have valid image URLs
        const formattedProducts = (data.products || []).map((product) => ({
          ...product,
          // Use a placeholder if no image is available
          image: product.image || "/placeholder.svg",
        }))

        setProducts(formattedProducts)
        setError(null)
      } catch (error) {
        console.error("Error fetching products:", error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Weighted Blankets</h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-2">Loading products...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    {product.image && product.image !== "/placeholder.svg" ? (
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title || "Product image"}
                        width={200}
                        height={200}
                        className="object-contain"
                        unoptimized // Add this if the images are already optimized from the source
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full w-full bg-gray-100">
                        <span className="text-gray-400">No image available</span>
                      </div>
                    )}
                  </div>
                  {product.rank && (
                    <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      #{product.rank}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-4 line-clamp-2">{product.title || "Untitled Product"}</h3>
                  {product.link && (
                    <a
                      href={
                        product.link.startsWith("/") ? `https://www.bestreviewsonline.in${product.link}` : product.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center transition-colors"
                    >
                      View Product
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">No products found. Please try again later.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}


