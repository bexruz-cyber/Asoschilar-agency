
let hamburgerBtn=document.querySelector('.header-hamburger-menyu')
let hamburgerClose=document.querySelector('.header-responsive-close')
let hamburgerMenyu=document.querySelector('.header-responsive')
let xizmatlar =document.querySelectorAll(".header-responsive-link")


hamburgerBtn.addEventListener('click', function(){
    hamburgerMenyu.classList.add("show")
})
hamburgerClose.addEventListener('click', function(){
    hamburgerMenyu.classList.remove("show")
})
xizmatlar.forEach(function (item) {
  item.addEventListener('click', function () {
      hamburgerMenyu.classList.remove("show")
  })
})





  document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
      // Konfiguratsiya parametrlarini qo'shish
      direction: 'horizontal', // Slayd yo'nalishi
      loop: true, // Oxiridan boshiga o'tish imkoniyati
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 4000, // Avtomatik slayd vaqt oralig'i (ms)
      },
    });
  });

//   let btnImg = document.querySelectorAll(".form-btn")

//   // Formlar va validatsiya xabarlarini boshqaruvchi funksiyalar
// function validateForm(formName, nameId, phoneId, nameErrorId, phoneErrorId) {
//     const form = document.forms[formName];
//     const nameInput = document.getElementById(nameId);
//     const phoneInput = document.getElementById(phoneId);
//     const nameError = document.getElementById(nameErrorId);
//     const phoneError = document.getElementById(phoneErrorId);

//     // Telefon raqam uchun mask
//     phoneInput.addEventListener("input", (e) => {
//         let input = e.target.value.replace(/\D/g, "");
//         if (input.startsWith("998")) {
//             input = input.slice(3);
//         }
//         let formatted = "+998 ";
//         if (input.length > 0) formatted += input.substring(0, 2) + " ";
//         if (input.length > 2) formatted += input.substring(2, 5) + " ";
//         if (input.length > 5) formatted += input.substring(5, 7) + " ";
//         if (input.length > 7) formatted += input.substring(7, 9);

//         e.target.value = formatted.trim();
//     });

//     // Form validatsiyasi
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         let isValid = true;
//         // Ism validatsiyasi
//         const nameValue = nameInput.value.trim();
//         if (!/^[A-Za-z\s]+$/.test(nameValue)) {
//             isValid = false;
//         } else {
//         }

//         // Telefon raqami validatsiyasi
//         const phoneValue = phoneInput.value.trim();
//         if (!/^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/.test(phoneValue)) {
//             isValid = false;
//         } else {
//         }
//         //  // Agar validatsiya muvaffaqiyatli bo'lsa, formani yuborish
//          if (isValid) {
//             btnImg[0].classList.add("rotating")
//             btnImg[1].classList.add("rotating")
            
//             fetch("https://script.google.com/macros/s/AKfycbwef2DiQYeiWMOONPNImI-QWtyNrx39VWRdsoa6hFRCh9h6y_vi_DIxwoWy6e0qS1sj/exec", {
//                 method: "POST",
//                 body: new FormData(form)
//             })
            
//                 .then((response) => {
                  
//                 })
//                 .catch((error) => {
               
//                 });
//         }
//     });
// }

// // Har bir form uchun validatsiyani ishga tushirish
// validateForm("application-form-1", "name-1", "phone-1", "name-error1", "phone-error1");
// validateForm("application-form-2", "name-2", "phone-2", "name-error", "phone-error");
        
    
const scriptURL = 'https://script.google.com/macros/s/AKfycbzimi7yXqusuygOYk8bYkjAJhvJDrGSu9yOxi4SJsj57VqA-Q51GLqXaHJYZNO3qu0E/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


