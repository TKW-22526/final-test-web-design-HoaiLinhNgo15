import {defaultproducts} from "../db/products.js";

//Nạp dữ liệu vào localStorage
if(!localStorage.getItem("products")){
    localStorage.setItem("products", JSON.stringify(defaultproducts));
}

export function loadAllProducts(){
    for(let x in defaultproducts){
        if(defaultproducts[x].status === "active"){
            addProduct(defaultproducts[x]);
        }
    }
}
function addProduct(product) {
    const frame = document.createElement("div");
    frame.setAttribute("class", "product");

    //Tạo khung chứa ảnh sản phẩm
    const imgFrame = document.createElement("div");
    imgFrame.setAttribute("class", "product-image-frame");

    //tạo một hình ảnh
    const image = document.createElement("img");
    image.setAttribute("src", product.image);
    image.setAttribute("alt", product.name);
    image.setAttribute("class", "product-image");
    imgFrame.appendChild(image);

    //tạo tên sản phẩm
    const name = document.createElement("h2");
    const textName = document.createTextNode(product.name);
    name.appendChild(textName);
    name.setAttribute("class", "product-name");

    //tạo giá sản phẩm
    const price = document.createElement('p');
    const textPrice = document.createTextNode(`${product.price.toLocaleString()}` + " " + product.currency);
    price.appendChild(textPrice);
    price.setAttribute("class", "product-price");

    //tạo một nút để xem chi tiết sản phẩm
    const button = document.createElement("a");
    button.setAttribute("href", product.link + "?id=" + product.id);
    button.setAttribute("class", "product-detail");
    button.textContent = "Xem chi tiết";

    //thêm các thành phần vào khung chứa sản phẩm
    frame.appendChild(imgFrame);
    frame.appendChild(name);
    frame.appendChild(price);
    frame.appendChild(button);

    //thêm khung sản phẩm vào trang web
    document.getElementsByClassName("product-list")[0].appendChild(frame);
}

function createProductCard(product){
    const frame = document.createElement("div");
    frame.setAttribute("class", "product");

    //Tạo khung chứa ảnh sản phẩm
    const imgFrame = document.createElement("div");
    imgFrame.setAttribute("class", "product-image-frame");

    //tạo một hình ảnh
    const image = document.createElement("img");
    image.setAttribute("src", product.image);
    image.setAttribute("alt", product.name);
    image.setAttribute("class", "product-image");
    imgFrame.appendChild(image);

    //tạo tên sản phẩm
    const name = document.createElement("h2");
    const textName = document.createTextNode(product.name);
    name.appendChild(textName);
    name.setAttribute("class", "product-name");

    //tạo giá sản phẩm
    const price = document.createElement('p');
    const textPrice = document.createTextNode(`${product.price.toLocaleString()}` + " " + product.currency);
    price.appendChild(textPrice);
    price.setAttribute("class", "product-price");

    //tạo một nút để xem chi tiết sản phẩm
    const button = document.createElement("a");
    button.setAttribute("href", product.link + "?id=" + product.id);
    button.setAttribute("class", "product-detail");
    button.textContent = "Xem chi tiết";

    //thêm các thành phần vào khung chứa sản phẩm
    frame.appendChild(imgFrame);
    frame.appendChild(name);
    frame.appendChild(price);
    frame.appendChild(button);

    return frame;
}

export function renderProductsGrid(){
    //Dùng querySelector()
    const container = document.querySelector(".product-list");
    if(!container) return;

    //lấy dữ liệu sản phẩm từ localStorage
    let currentProduct = JSON.parse(localStorage.getItem("products")) || [];

    container.innerHTML = "";

    currentProduct.forEach(product => {
        if(product.status === "active"){
            const cardElement = createProductCard(product);
            container.appendChild(cardElement);
        }
    });
}