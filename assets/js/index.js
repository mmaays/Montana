
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

