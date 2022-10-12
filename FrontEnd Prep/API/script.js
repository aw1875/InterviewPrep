const API_URI = "https://dummyjson.com/products/";

window.addEventListener("DOMContentLoaded", async() => {

    // Get Ref div
    const ref = document.querySelector(".ref");


    // Get Products from API
    const products = await getProducts();

    const productsDiv = createProductDivs(products);
    ref.append(productsDiv);
});

const getProducts = async () => {
    const data = await fetch(API_URI).then((res) => res.json());
    return data?.products.slice(0, -3);
}

const createProductDivs = (products) => {
    const div = document.createElement("div");
    div.classList.add("products");

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("productDiv");

        const title = document.createElement('h1');
        title.textContent = product.title;
        
        const brand = document.createElement("h3");
        brand.textContent = product.brand;

        const price = document.createElement('h2');
        price.textContent = `$${product.price}`;

        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.classList.add("thumbnailContainer");
        const thumbnail = document.createElement('img');
        thumbnail.src = product.thumbnail;
        thumbnailContainer.append(thumbnail);

        productDiv.append(title);
        productDiv.append(brand);
        productDiv.append(price);
        productDiv.append(thumbnailContainer);
        div.append(productDiv);
    });

    return div;
}
