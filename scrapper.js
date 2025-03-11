const puppeteer = require("puppeteer");

async function scrapeProducts(url) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded" });

  const products = await page.evaluate(() => {
    let items = [];
    document.querySelectorAll(".product-card-selector").forEach((item) => {
      let title = item.querySelector("h2 a")?.innerText || "No title";
      let rating = item.querySelector(".rating-class")?.innerText || "No rating";
      let price = item.querySelector(".price-class")?.innerText || "No price";
      let image = item.querySelector("img")?.src || "";

      items.push({ title, rating, price, image });
    });
    return items;
  });

  await browser.close();
  return products;
}

scrapeProducts("https://bestreviewsonline.in/weighted-blanket")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
