function handleContactSubmit(){
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const msg = document.getElementById("contact-msg").value.trim();

    if(!name || !email || !msg) {
        alert("Vui lòng đầy đủ thông tin!");
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("Email không hợp lệ!");
        return;
    }

    alert(`Gửi thành công! Cảm ơn ${name} đã gửi tin nhắn cho chúng tôi, LinhTech Store sẽ phản hồi sớm nhất qua Email: ${email}`);
    document.getElementById("contact-name").value="";
    document.getElementById("contact-email").value="";
    document.getElementById("contact-msg").value="";
}