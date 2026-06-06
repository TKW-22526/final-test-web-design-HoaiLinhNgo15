import {defaultproducts} from "../db/products.js";

//Đảm bảo dữ liệu luôn đồng nhất
if(!localStorage.getItem("products")){
    localStorage.setItem("products", JSON.stringify(defaultproducts));
}
let products = JSON.parse(localStorage.getItem("products"));

//Hàm in tất cả sản phẩm vào bảng quản lý
export function renderAdminTable() {
    const tableBody = document.getElementById("adminProductTable");
    if(!tableBody) return;

    products = JSON.parse(localStorage.getItem("products")) || [];

    tableBody.innerHTML = "";
    products.forEach((prod)=> {
        const statusText = prod.status === "active" ? "Còn hàng" : "Hết hàng";
        const statusColor = prod.status === "active" ? "#22c55e" : "#ef4444";

        tableBody.innerHTML += `
            <tr>
                <td><img src="${prod.image}" width="50"></td>
                    <td><strong>${prod.name}</strong></td>
                    <td style="color:red;">${prod.price}</td>
                    <td><span style="color: ${statusColor}; font-weight: bold;">${statusText}</span></td>
                    <td>
                        <button onclick="window.editProduct('${prod.id}')">Sửa</button>
                        <button onclick="window.deleteProduct('${prod.id}')">Xóa</button>
                    </td>
            </tr>
        `;
    });
}

//Hàm lưu sản phẩm
export function saveProduct(){
    const id = document.getElementById("product-id").value.trim();
    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;
    const img = document.getElementById("product-img").value;
    const status = document.getElementById("product-status").value;

    if(!name || !price || !img){
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if(id){
        //tìm id trùng khớp
        let index = products.findIndex(p => p.id.toString().trim() === id.toString().trim());

        if(index!=-1){
            products[index] = { ...products[index], name: name, price: parseInt(price, 10), image: img, status: status };
            alert("Cập nhật thành công!");
        }
    } 
    //Thêm một sản phẩm mới
    else {
        let newId = "p001"; //mảng trống
        if(products.length > 0){
            //Lấy id của sản phẩm cuối mảng
            let lastId = products[products.length - 1].id.toString();

            //Loại bỏ p trong id
            let lastNumber = parseInt(lastId.replace("p", ""), 10);

            //Tăng lên 1 đơn vị
            let nextNumber = lastNumber + 1;

            //Tạo chuỗi mới
            newId = "p" + nextNumber.toString().padStart(3, "0");
        }
        products.push({id:newId, name: name, price: parseInt(price, 10), currency: "VND", image: img, link: "chi-tiet.html",status: status});
        alert(`Thêm sản phẩm mới thành công với ID: ${newId}`);
    }
    //Lưu vào LocalStorage và vẽ lại bảng 
    localStorage.setItem("products", JSON.stringify(products));
    renderAdminTable();
    resetForm();
}

//Hàm xóa sản phẩm
export function deleteProduct(id){
    if(confirm("Bạn có chắc muốn xóa sản phẩm này không?")){
        products = products.filter(p => p.id.toString().trim() !== id.toString().trim());

        localStorage.setItem("products", JSON.stringify(products));
        renderAdminTable();
    }
}

//Đẩy sản phẩm lên form
export function editProduct(id) {
    //tìm sản phẩm 
    let prod = products.find(p=>p.id.toString().trim() === id.toString().trim());

    if(prod){
        document.getElementById("product-id").value = prod.id;
        document.getElementById("product-name").value = prod.name;
        document.getElementById("product-price").value = prod.price;
        document.getElementById("product-img").value = prod.image;
        document.getElementById("product-status").value = prod.status || "active";

        document.getElementById("frm-title").innerText = "Chỉnh sửa thông tin sản phẩm: " + prod.id;
        document.getElementById("btn-cancel").style.display = "inline-block";
    }
}

export function resetForm(){
    document.getElementById("product-id").value = "";
    document.getElementById("product-name").value="";
    document.getElementById("product-price").value="";
    document.getElementById("product-img").value="";
    document.getElementById("product-status").value = "active";
    document.getElementById("frm-title").innerText ="Thêm sản phẩm mới";
    document.getElementById("btn-cancel").style.display = "none";
}

//Đẩy các hàm ra window do dùng (type = "module")
window.saveProduct = saveProduct;
window.deleteProduct = deleteProduct;
window.editProduct = editProduct;
window.resetForm = resetForm;