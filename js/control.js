// JavaScript Document
$("#slider").owlCarousel({
  loop: true, // cho lặp lại
  items: 1, // xuất hiện 1 ảnh thôi
  smartSpeed: 1000, // tốc độ thay đổi ảnh
  autoplay: true, // cho phép tự động chạy
  autoplayTimeout: 5000, // thời gian chờ khi chuyển ảnh khi chạy tự động
  nav: true, // cho xuất hiện bộ nút tới lui
  dots: true,
});
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}
