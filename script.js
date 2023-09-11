let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  
  setTimeout(showSlides, 2000);
}

// Phần máy đánh chữ
const text = "Xin Chào ! Mình là Nhã sinh viên năm hai ngành CNTT chuyên ngành Kỹ thuật phần mềm trường Đại Học Nguyễn Tất Thành. Rất vui được gặp các bạn !";
let index = 0;

function typeWriter() {
  const typingText = document.getElementById("typing-text");
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 30); // Thay đổi 50 thành thời gian trễ giữa mỗi ký tự (ms)
  }
}

typeWriter();


// Croll mouse
let elToShow = document.querySelectorAll('.show-on-scroll')

let isElInViewPort = (el) => {
	let rect = el.getBoundingClientRect()
	let viewHeight = window.innerHeight || document.documentElement.clientHeight
	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >= viewHeight && rect.top <= viewHeight) ||
		(rect.top >= 0 && rect.bottom <= viewHeight)
	)
}
function loop() {
	elToShow.forEach((item) => {
		if (isElInViewPort(item)) {
			item.classList.add('start')
		} else {
			item.classList.remove('start')
		}
	})
}
window.onscroll = loop

loop()