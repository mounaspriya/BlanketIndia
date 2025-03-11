// import * as cheerio from "cheerio" // Changed from default import to named import

// export async function GET(req) {
//   try {
//     const url = "https://www.bestreviewsonline.in/weighted-blanket"

//     const response = await fetch(url, {
//       headers: {
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36", // More detailed user agent
//         Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
//         "Accept-Language": "en-US,en;q=0.5",
//       },
//       cache: "no-store", // Avoid caching issues
//     })

//     if (!response.ok) {
//       return new Response(
//         JSON.stringify({ error: `Failed to fetch page: ${response.status} ${response.statusText}` }),
//         {
//           status: 500,
//           headers: { "Content-Type": "application/json" },
//         },
//       )
//     }

//     // Get HTML content
//     const html = await response.text()

//     // Debug: Log the HTML response length
//     console.log(`Fetched HTML length: ${html.length}`)

//     if (!html || html.length < 50) {
//       throw new Error("Empty or invalid HTML response")
//     }

//     // Load HTML into Cheerio
//     const $ = cheerio.load(html)

//     const products = []

//     // Based on the screenshot, these are the correct selectors for the products
//     $(".product-card, article").each((index, element) => {
//       const title = $(element).find("h2, .product-title").text().trim()
//       const imageEl = $(element).find("img")
//       const image = imageEl.attr("src") || imageEl.attr("data-src")

//       // Extract rating
//       const rating = $(element).find(".rating-score").text().trim()

//       // Extract price/discount info
//       const discount = $(element).find(".discount-badge").text().trim()

//       // Extract brand
//       const brand = $(element).find(".brand-name").text().trim()

//       // Extract link
//       const viewDealEl = $(element).find("a.view-deal, a.btn-primary")
//       const link = viewDealEl.attr("href")

//       // Only add products with at least a title
//       if (title) {
//         products.push({
//           title,
//           image,
//           link,
//           rating,
//           discount,
//           brand,
//           rank: index + 1,
//         })
//       }
//     })

//     // If no products found with the above selectors, try alternative selectors
//     if (products.length === 0) {
//       console.log("No products found with primary selectors, trying alternative selectors")

//       // Look for any product-like structures
//       $("div, article, section").each((index, element) => {
//         const $el = $(element)
//         // Check if this element has both an image and heading - likely a product
//         const hasImage = $el.find("img").length > 0
//         const hasHeading = $el.find("h2, h3, h4, .title").length > 0

//         if (hasImage && hasHeading) {
//           const title = $el.find("h2, h3, h4, .title").first().text().trim()
//           const image = $el.find("img").first().attr("src")
//           const link = $el.find("a").attr("href")

//           if (title) {
//             products.push({ title, image, link, rank: index + 1 })
//           }
//         }
//       })
//     }

//     // If still no products, return the HTML structure for debugging
//     if (products.length === 0) {
//       return new Response(
//         JSON.stringify({
//           error: "No products found",
//           htmlStructure: $("body").html().substring(0, 1000), // First 1000 chars of body
//         }),
//         {
//           status: 200,
//           headers: { "Content-Type": "application/json" },
//         },
//       )
//     }

//     return new Response(JSON.stringify(products), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//         "Cache-Control": "no-cache, no-store, must-revalidate",
//       },
//     })
//   } catch (error) {
//     console.error("Scraping Error:", error.message, error.stack) // Log full error details
//     return new Response(JSON.stringify({ error: error.message, stack: error.stack }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     })
//   }
// }


// import * as cheerio from "cheerio"

// export async function GET(req) {
//   try {
//     const url = "https://www.bestreviewsonline.in/weighted-blanket"

//     const response = await fetch(url, {
//       headers: {
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
//         Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
//         "Accept-Language": "en-US,en;q=0.5",
//       },
//       cache: "no-store",
//     })

//     if (!response.ok) {
//       throw new Error(`Failed to fetch page: ${response.status} ${response.statusText}`)
//     }

//     const html = await response.text()

//     if (!html || html.length < 50) {
//       throw new Error("Empty or invalid HTML response")
//     }

//     const $ = cheerio.load(html)
//     const products = []

//     // Updated selectors based on the actual website structure
//     $("article, .product-card, .product-item").each((index, element) => {
//       const $element = $(element)

//       // Find title - look for various possible title elements
//       const title = $element.find("h2, h3, .product-title, .title").first().text().trim()

//       // Find image - check both src and data-src attributes
//       const imageEl = $element.find("img").first()
//       const image = imageEl.attr("src") || imageEl.attr("data-src")

//       // Find link - look for the main product link or view deal button
//       const linkEl = $element.find("a.view-deal, a.product-link, a").first()
//       const link = linkEl.attr("href")

//       // Only add products that have at least a title
//       if (title) {
//         products.push({
//           title,
//           image,
//           link,
//           rank: index + 1,
//         })
//       }
//     })

//     // If no products found with primary selectors, try alternative approach
//     if (products.length === 0) {
//       $("div.product, div[class*='product']").each((index, element) => {
//         const $element = $(element)
//         const title = $element.find("h2, h3, [class*='title']").first().text().trim()
//         const image = $element.find("img").attr("src")
//         const link = $element.find("a").attr("href")

//         if (title) {
//           products.push({
//             title,
//             image,
//             link,
//             rank: index + 1,
//           })
//         }
//       })
//     }

//     if (products.length === 0) {
//       console.log("No products found. HTML structure:", $.html().substring(0, 1000))
//       return new Response(JSON.stringify({ error: "No products found" }), {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       })
//     }

//     return new Response(JSON.stringify(products), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//         "Cache-Control": "no-cache, no-store, must-revalidate",
//       },
//     })
//   } catch (error) {
//     console.error("Scraping Error:", error)
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     })
//   }
// }


import * as cheerio from "cheerio"

export async function GET(req) {
  try {
    const url = "https://www.bestreviewsonline.in/weighted-blanket"

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
      },
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch page: ${response.status} ${response.statusText}`)
    }

    const html = await response.text()

    if (!html || html.length < 50) {
      throw new Error("Empty or invalid HTML response")
    }

    const $ = cheerio.load(html)
    const products = []
    const debugInfo = {
      totalElements: $("*").length,
      bodyContent: $("body").html().substring(0, 500),
      possibleProductElements: [],
    }

    // Try multiple selectors
    const selectors = [".product-card", "article", ".product-item", '[class*="product"]']

    selectors.forEach((selector) => {
      $(selector).each((index, element) => {
        const $element = $(element)

        const title = $element.find("h2, h3, .product-title, .title").first().text().trim()
        const image = $element.find("img").attr("src") || $element.find("img").attr("data-src")
        const link = $element.find("a").attr("href")
        const rank = $element.find('.rank, [class*="rank"]').text().trim().replace("#", "") || (index + 1).toString()

        debugInfo.possibleProductElements.push({
          selector,
          title,
          image,
          link,
          rank,
          html: $element.html().substring(0, 200), // First 200 characters of the element's HTML
        })

        if (title && (image || link)) {
          products.push({ title, image, link, rank: Number.parseInt(rank) || index + 1 })
        }
      })
    })

    if (products.length === 0) {
      console.log("Debug Info:", JSON.stringify(debugInfo, null, 2))
      return new Response(
        JSON.stringify({
          error: "No products found",
          debugInfo,
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    return new Response(JSON.stringify({ products, debugInfo }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    })
  } catch (error) {
    console.error("Scraping Error:", error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

