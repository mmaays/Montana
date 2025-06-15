
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".myHeader");
    header.innerHTML = `
        <div class="header-area">
          <div class="main-header-area">
            <div class="container-fluid">
              <div class="row align-items-center">
                <div class="col-xl-5 col-lg-6 first-nav">
                  <div class="main-menu d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li><a class="active" href="index.html">Home</a></li>
                        <li><a href="./rooms.html">Rooms</a></li>
                        <li><a href="./about.html">About</a></li>
                        <li><a href="./blog.html">Blog <i class="fa-solid fa-chevron-down fa-xs"></i></a>
                          <ul class="submenu">
                            <li><a href="./blog.html">Blog</a> </li>
                            <li><a href="./singleBlog.html">Single Blog</a></li>
                          </ul>
                        </li>
                        <li><a href="./elements.html">pages <i class="fa-solid fa-chevron-down fa-xs"></i></a>
                          <ul class="submenu">
                            <li><a href="./elements.html">Elements</a></li>
                          </ul>
                        </li>
                        <li><a href="./contact.html">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 second-nav">
                  <div class="logo-img">
                    <a href="index.html">
                      <img src="./assets/images/banners/logo.png.webp" alt="">
                    </a>
                  </div>
                </div>
                <div class="col-xl-5 col-lg-4 third-nav">
                  <div class="book_room">
                    <div class="socail_links third-nav1">
                      <ul>
                        <li><a href="#"><i class="fa-brands fa-square-facebook fa-lg"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-twitter fa-lg"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-instagram fa-lg"></i></a></li>
                      </ul>
                    </div>
                    <div class="book_btn third-nav2">
                      <a href="#">Book A Room</a>
                    </div>
                  </div>
                </div>
                <div class="bars"><i class="fa-solid fa-bars fa-xl" style="color: #ffffff;"></i></div>
              </div>
            </div>
          </div>
        </div>

        <div class="side-menu">
          <div class="side-menu-content">
            <nav>
              <ul>
                <li><a class="active" href="index.html">home</a></li>
                <li><a href="./rooms.html">rooms</a></li>
                <li><a href="./about.html">About</a></li>
                <li class="side-menu-hover"><a href="./blog.html">Blog <i class="fa-solid fa-chevron-down fa-xs"></i></a>
                  <ul class="submenu">
                    <li><a href="./blog.html">Blog</a> </li>
                    <li><a href="./singleBlog.html">Single Blog</a></li>
                  </ul>
                </li>
                <li class="side-menu-hover"><a href="./elements.html">pages <i class="fa-solid fa-chevron-down fa-xs"></i></a>
                  <ul class="submenu">
                    <li><a href="elements.html">elements</a></li>
                  </ul>
                </li>
                <li><a href="./contact.html">Contact</a></li>
              </ul>
            </nav>
            <div class="book_room">
              <div class="book_btn">
                <a href="#">Book A Room</a>
              </div>
            </div>
            <div class="side-links">
              <div class="socail_links">
                <ul>
                  <li><a href="#"><i class="fa-brands fa-square-facebook fa-lg"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-twitter fa-lg"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-instagram fa-lg"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    `;

    const instagramSection = document.querySelector(".instragram_area");
    instagramSection.innerHTML = `
    <div class="single_instagram">
      <img src="./assets/images/instagram/1.png" alt="">
      <div class="ovrelay">
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>
    <div class="single_instagram">
      <img src="./assets/images/instagram/2.png" alt="">
      <div class="ovrelay">
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>
    <div class="single_instagram">
      <img src="./assets/images/instagram/3.png" alt="">
      <div class="ovrelay">
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>
    <div class="single_instagram">
      <img src="./assets/images/instagram/4.png" alt="">
      <div class="ovrelay">
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>
    <div class="single_instagram">
      <img src="./assets/images/instagram/5.png" alt="">
      <div class="ovrelay">
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>
  `;

    const footer = document.querySelector(".footer");
    footer.innerHTML = `
    <div class="footer_top">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-md-6 col-lg-3">
            <div class="footer_widget">
              <h3 class="footer_title">address</h3>
              <p class="footer_text"> 200, Green road, Mongla, <br>
                New Yor City USA</p>
              <a href="#" class="line-button">Get Direction</a>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 col-lg-3">
            <div class="footer_widget">
              <h3 class="footer_title">Reservation</h3>
              <p class="footer_text">+10 367 267 2678 <br>
                reservation@montana.com</p>
            </div>
          </div>
          <div class="col-xl-2 col-md-6 col-lg-2">
            <div class="footer_widget">
              <h3 class="footer_title">Navigation</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Rooms</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">News</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-md-6 col-lg-4">
            <div class="footer_widget">
              <h3 class="footer_title">Newsletter</h3>
              <form action="#" class="newsletter_form">
                <input type="text" placeholder="Enter your mail" required>
                <button type="submit">Sign Up</button>
              </form>
              <p class="newsletter_text">Subscribe newsletter to get updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_social">
      <div class="container">
        <div class="footer_border"></div>
        <div class="row">
          <div class="socail_links">
            <ul>
              <li>
                <a href="#"><i class="fa-brands fa-square-facebook fa-lg"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-twitter fa-lg"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-instagram fa-lg"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

    const myswiper1 = document.querySelector(".mySwiper1 .swiper");
    myswiper1.innerHTML = `
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background-image: url('./assets/images/banners/banner.png');">
          <div class="slide-content">
            <h3>Montana Resort</h3>
            <p>Unlock to enjoy the view of Martine</p>
          </div>
        </div>

        <div class="swiper-slide" style="background-image: url('./assets/images/banners/banner2.png');">
          <div class="slide-content">
            <h3>Life is Beautiful</h3>
            <p>Unlock to enjoy the view of Martine</p>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    `;

    const swiper = new Swiper('.swiper', {

        slidesPerView: 1,
        effect: 'slide',

        autoplay: {
            delay: 5000,
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    const myAbout = document.querySelector(".about_area");
    myAbout.innerHTML = `
     <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-5">
            <div class="about_info">
              <div class="section_title mb-20px">
                <span>About Us</span>
                <h3>A Luxuries Hotel <br>
                  with Nature</h3>
              </div>
              <p>Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare
                dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque
                sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.</p>
              <a href="#" class="line-button">Learn More</a>
            </div>
          </div>
          <div class="col-xl-7 col-lg-7">
            <div class="about_thumb d-flex">
              <div class="img_1">
                <img src="./assets/images/about/about_1.png" alt="">
              </div>
              <div class="img_2">
                <img src="./assets/images/about/about_2.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      `;

    window.onscroll = function () {
        const header = document.querySelector(".header-area");
        const button = document.querySelector('.book_btn');

        if (window.scrollY >= 640) {
            header.classList.add("sticky-header");
            button.classList.add('btn-blue-white');
        }
        else {
            header.classList.remove("sticky-header");
            button.classList.remove('btn-blue-white');
        }
    }


});



document.addEventListener("DOMContentLoaded", function () {
    const myAbout = document.querySelector(".about_area");
    myAbout.innerHTML = `
     <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-5">
            <div class="about_info">
              <div class="section_title mb-20px">
                <span>About Us</span>
                <h3>A Luxuries Hotel <br>
                  with Nature</h3>
              </div>
              <p>Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare
                dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque
                sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.</p>
              <a href="#" class="line-button">Learn More</a>
            </div>
          </div>
          <div class="col-xl-7 col-lg-7">
            <div class="about_thumb d-flex">
              <div class="img_1">
                <img src="./assets/images/about/about_1.png" alt="">
              </div>
              <div class="img_2">
                <img src="./assets/images/about/about_2.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
});




const swiper = new Swiper('.swiper', {

    slidesPerView: 1,
    effect: 'slide',

    autoplay: {
        delay: 5000,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


//header scroll
window.onscroll = function () {
    const header = document.querySelector(".header-area");
    const button = document.querySelector('.book_btn');

    if (window.scrollY >= 640) {
        header.classList.add("sticky-header");
        button.classList.add('btn-blue-white');
    }
    else {
        header.classList.remove("sticky-header");
        button.classList.remove('btn-blue-white');
    }
}


//bars
document.addEventListener("DOMContentLoaded", function () {
    const bars = document.querySelector('.bars');
    const sideMenu = document.querySelector('.side-menu');

    bars.addEventListener('click', (event) => {
        event.stopPropagation();
        sideMenu.classList.toggle('open');
        bars.classList.add("d-none");
    });

    document.addEventListener('click', (event) => {
        if (!sideMenu.contains(event.target) && !bars.contains(event.target)) {
            sideMenu.classList.remove('open');
            bars.classList.remove("d-none");
        }
    });
});


//active
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("#navigation li a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const linkHref = link.getAttribute("href");
        if (linkHref === currentPage || linkHref === "./" + currentPage) {
            link.classList.add("active");
        }
        else {
            link.classList.remove("active");
        }
    });
});



//book a room btn 
document.addEventListener("DOMContentLoaded", function () {
    const bookBtns = document.querySelectorAll(".book_btn");
    const popup = document.getElementById("booking-form");
    const popupContent = document.querySelector(".popup-content");

    if (bookBtns && popup && popupContent) {
        bookBtns.forEach(btn => {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                popup.style.display = "flex";
                document.body.style.overflow = "hidden";
            });
        });

        popup.addEventListener("click", function (e) {
            if (!popupContent.contains(e.target)) {
                popup.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") {
                popup.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    }
});



// flatpickr library
document.addEventListener("DOMContentLoaded", function () {
    const checkInInput = document.querySelectorAll('.custom-button input')[0];
    const checkOutInput = document.querySelectorAll('.custom-button input')[1];

    flatpickr(checkInInput, {
        dateFormat: "Y-m-d",
        onChange: function (selectedDates, dateStr) {
            checkInInput.value = dateStr;
        }
    });

    flatpickr(checkOutInput, {
        dateFormat: "Y-m-d",
        onChange: function (selectedDates, dateStr) {
            checkOutInput.value = dateStr;
        }
    });
});



