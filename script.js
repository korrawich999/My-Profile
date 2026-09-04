function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

let likes = parseInt(localStorage.getItem('my_likes') || '0');
document.getElementById('like-count').innerText = likes;

let toastTimeout;

function countClick() {
  likes = likes + 1;
  localStorage.setItem('my_likes', likes);
  document.getElementById('like-count').innerText = likes;

  // แอนิเมชันหัวใจเต้น
  const heart = document.getElementById('heart-icon');
  heart.classList.remove('heart-pop');
  void heart.offsetWidth; // บังคับให้เบราว์เซอร์รีเฟรช DOM ทันที
  heart.classList.add('heart-pop');

  // แสดง Toast Popup
  showToast();
}

function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}