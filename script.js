let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');

  showSlides(1);
  
  function showSlides(n) {

    if (n < 1) {
      slideIndex = slides.length;
    } else if (n > slides.length) {
      slideIndex = 1;
    }

    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active'));
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusIndex(n) {
    showSlides(slideIndex += n);
  }

  prev.addEventListener('click', function() {
    plusIndex(-1);
  });

  next.addEventListener('click', function() {
    plusIndex(1);
  });

  function currentSlide(index) {
    showSlides(slideIndex = index);
  }

  dotsWrap.addEventListener('click', function(e) {
    for (let i = 1; i <= dots.length; i++) {
      if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  })
