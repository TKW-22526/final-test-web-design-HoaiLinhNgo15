//==== FILE XỬ LÝ CÁC HÀNH ĐỘNG CHO TRANG CHỦ  =====


//1. Lấy các phần tử HTML cần xử lý thông qua ID
function filterContent () {
    const searchInput = document.getElementById("searchInput");
    const navList = document.querySelector(".navList");
    const navItems = navList.getElementsByTagName("li");

    //2. Thêm sự kiện "input" cho ô tìm kiếm
    searchInput.addEventListener("keyup", function() {
        //Lấy dữ liệu từ ô tìm kiếm và chuyển về so sánh không phân biệt hoa thường
        const filterValue = searchInput.value.toLowerCase();

        //3. Duyệt qua tất cả các mục trong thanh điều hướng
        for(let i=0; i<navItems.length; i++){
            const anchorTag = navItems[i].getElementsByTagName("a")[0];

            if(anchorTag){
                const textValue = anchorTag.textContent || anchorTag.innerText;
                if(textValue.toLowerCase().indexOf(filterValue) > -1){
                    navItems[i].style.display= "";
                } else {
                    navItems[i].style.display = "none";
                }
            }
        }
    });
}