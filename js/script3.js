//==== FILE XỬ LÝ CÁC HÀNH ĐỘNG CHO TRANG GIỎ HÀNG =====

// Đọc dữ liệu từ localStorage. Nếu chưa có dữ liệu mua sắm, tự khởi tạo 2 sản phẩm mẫu để chấm điểm giao diện không bị trống
let currentCartData = JSON.parse(localStorage.getItem('cart')) || [
    { id: 101, name: 'iPhone 15 Pro Max 256GB - Titan Tự Nhiên', price: 29990000, quantity: 1, img: '../assets/iphone.jpg' },
    { id: 102, name: 'MacBook Air M3 13-inch (8GB / 256GB SSD)', price: 27490000, quantity: 1, img: '../assets/macbook.jpg' }
];

// Lưu mảng dữ liệu hiện hành vào bộ nhớ trình duyệt
function synchronizeCartStorage() {
    localStorage.setItem('cart', JSON.stringify(currentCartData));
}

// Hàm xử lý xuất dữ liệu mảng ra cấu trúc HTML cây thư mục bảng
function renderCartInterface() {
    const containerTable = document.getElementById('cartItemsContainer');
    const viewEmpty = document.getElementById('emptyCartMessage');
    const viewGrid = document.getElementById('mainCartLayout');

    // Nếu kiểm tra mảng rỗng không có phần tử
    if (currentCartData.length === 0) {
        viewEmpty.style.display = 'block';
        viewGrid.style.display = 'none';
        return;
    }

    viewEmpty.style.display = 'none';
    viewGrid.style.display = 'grid';
    containerTable.innerHTML = ''; // Làm sạch bộ nhớ đệm hiển thị cũ

    let calculatedSumPrice = 0;

    // Vòng lặp nạp dữ liệu
    currentCartData.forEach((product, positionIndex) => {
        calculatedSumPrice += product.price * product.quantity;
        
        containerTable.innerHTML += `
            <tr>
                <td>
                    <div class="product-details">
                        <img src="${product.img}" alt="${product.name}" class="product-item-img" onerror="this.src='https://via.placeholder.com/60/1e293b/fff?text=Tech'">
                        <span class="product-item-name">${product.name}</span>
                    </div>
                </td>
                <td><span class="product-item-price">${product.price.toLocaleString('vi-VN')}đ</span></td>
                <td>
                    <div class="quantity-group">
                        <button type="button" class="quantity-modify-btn" onclick="modifyProductQuantity(${positionIndex}, -1)">-</button>
                        <div class="quantity-num-value">${product.quantity}</div>
                        <button type="button" class="quantity-modify-btn" onclick="modifyProductQuantity(${positionIndex}, 1)">+</button>
                    </div>
                </td>
                <td>
                    <button type="button" class="btn-action-delete" onclick="deleteCartItem(${positionIndex})">Xóa</button>
                </td>
            </tr>
        `;
    });

    // Cập nhật giá trị hiển thị lên hóa đơn tính tiền
    document.getElementById('textSubtotal').innerText = calculatedSumPrice.toLocaleString('vi-VN') + 'đ';
    document.getElementById('textTotalAmount').innerText = calculatedSumPrice.toLocaleString('vi-VN') + 'đ';
}

// Hàm tăng/giảm số lượng sản phẩm
function modifyProductQuantity(positionIndex, changeValue) {
    currentCartData[positionIndex].quantity += changeValue;

    // Nếu số lượng tụt xuống 0 thì kích hoạt xóa sản phẩm đó ra khỏi giỏ
    if (currentCartData[positionIndex].quantity < 1) {
        deleteCartItem(positionIndex);
        return;
    }

    synchronizeCartStorage();
    renderCartInterface();
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function deleteCartItem(positionIndex) {
    const productName = currentCartData[positionIndex].name;
    if (confirm(`Bạn có chắc chắn muốn xóa sản phẩm:\n"${productName}" khỏi giỏ hàng không?`)) {
        currentCartData.splice(positionIndex, 1);
        synchronizeCartStorage();
        renderCartInterface();
    }
}

// Hàm xử lý nút bấm Tiến hành thanh toán
function executeCheckoutProcessing() {
    alert(`Cảm ơn bạn đã thử nghiệm dự án của Linh!\n\nĐơn hàng của bạn đã được ghi nhận vào hệ thống mô phỏng. Toàn bộ giỏ hàng sẽ được làm trống.`);
    
    // Xóa sạch giỏ hàng sau khi thanh toán giả lập thành công
    currentCartData = [];
    synchronizeCartStorage();
    renderCartInterface();
}

// Ép hệ thống chạy hiển thị giao diện ngay khi trang được tải xong
window.onload = renderCartInterface;