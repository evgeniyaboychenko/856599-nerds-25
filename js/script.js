var popup = document.querySelector(".modal");
var button = document.querySelector(".contacts .button");
var close = popup.querySelector(".close");

var slide1 = document.querySelector(".principle-design");
var slide2 = document.querySelector(".principle-math");
var slide3 = document.querySelector(".principle-work");
var btn1 = document.querySelector(".slide-btn-first");
var btn2 = document.querySelector(".slide-btn-second");
var btn3 = document.querySelector(".slide-btn-third");

var firstName = popup.querySelector("#name");
var email = popup.querySelector("#email");
var letter = popup.querySelector("#letter");
var form = popup.querySelector(".form-modal");

var storageName = "";
var storageMail = "";
var isStorageSupport = true;

try {
  storageName = localStorage.getItem("name");
  storageMail = localStorage.getItem("email");
}
catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storageName) {
    firstName.value = storageName;
  }
  if (storageMail) {
    email.value = storageMail;
  }
  if (!firstName.value) {
    firstName.focus();
  } else {
    if (!email.value) {
      email.focus();
    } else letter.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-error");
      popup.classList.remove("modal-show");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!firstName.value || !email.value || !letter.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    setTimeout(function () {
      popup.classList.add("modal-error");
    }, 1);
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", firstName.value);
      localStorage.setItem("email", email.value);
    }
  }
});

btn1.addEventListener("click", function (evt) {
  evt.preventDefault();

  slide2.classList.remove("principle-checked");
  slide3.classList.remove("principle-checked");
  slide1.classList.add("principle-checked");

  btn2.classList.remove("slide-current");
  btn3.classList.remove("slide-current");
  btn1.classList.add("slide-current");
});

btn2.addEventListener("click", function (evt) {
  evt.preventDefault();

  slide1.classList.remove("principle-checked");
  slide3.classList.remove("principle-checked");
  slide2.classList.add("principle-checked");

  btn1.classList.remove("slide-current");
  btn3.classList.remove("slide-current");
  btn2.classList.add("slide-current");
});

btn3.addEventListener("click", function (evt) {
  evt.preventDefault();

  slide1.classList.remove("principle-checked");
  slide2.classList.remove("principle-checked");
  slide3.classList.add("principle-checked");

  btn1.classList.remove("slide-current");
  btn2.classList.remove("slide-current");
  btn3.classList.add("slide-current");
});
