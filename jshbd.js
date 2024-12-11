function showBirthdayMessage() {
    // Lấy giá trị tên từ ô nhập liệu
    const name = document.getElementById("nameInput").value;

    // Kiểm tra nếu người dùng đã nhập tên
    if (name) {
        // Thay đổi thông điệp chúc mừng
        document.getElementById("greeting").textContent = `🎉 Chúc Mừng Sinh Nhật, ${name}! 🎉`;

        // Hiển thị ảnh và thông điệp
        document.getElementById("birthdayMessage").style.display = "block";
        
        // Phát nhạc khi người dùng nhấn nút
        const music = document.getElementById("background-music");
        music.play(); // Phát nhạc
    } else {
        alert("Hãy nhập tên của bạn trước khi nhấn nút!");
    }
}