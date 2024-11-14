
// Nav functions
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}



// swipper

var swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-next-button",
		prevEl: ".swiper-prev-button"
	},
	effect: "fade",
	loop: "infinite",
	pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        }
});

swiper.on('slideChange', function(sld) {
	document.body.setAttribute('data-sld', sld.realIndex);
})
  

// carousel

  let currentIndex = 0;

  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  
  document.querySelector('.next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
  });
  
  document.querySelector('.prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
  });
  
  function updateCarousel() {
      const carouselContent = document.querySelector('.carousel-content');
      const width = carouselContent.clientWidth;
      carouselContent.style.transform = `translateX(-${currentIndex * width}px)`;
  }
   