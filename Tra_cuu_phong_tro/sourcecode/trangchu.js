document.addEventListener('DOMContentLoaded', function() {
    // Lấy các liên kết điều hướng
    const lien_ket_dieu_huong = document.querySelectorAll('nav a');

    // Thêm sự kiện click cho từng liên kết
    lien_ket_dieu_huong.forEach(lien_ket => {
        lien_ket.addEventListener('click', function() {
            // Xóa lớp 'active' khỏi tất cả các liên kết
            lien_ket_dieu_huong.forEach(lien_ket => lien_ket.classList.remove('active'));

            // Thêm lớp 'active' cho liên kết được nhấn
            this.classList.add('active');
        });
    });
});
