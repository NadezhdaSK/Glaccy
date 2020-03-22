var button = document.querySelector(".popup-btn");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".btn-close");
var user = popup.querySelector("#your-name");
var email = popup.querySelector("#your-email");
var offer = popup.querySelector("#your-offer");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("user");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    user.value = storage;
    email.focus();
  }
  else {
    user.focus();
  }
});

close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt){
  if(evt.keyCode == 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

popup.addEventListener("submit", function(evt) {
  if (!user.value || !email.value || !offer.value ) {
    evt.preventDefault();
    popup.classList.remove("error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("error");
    console.log("Нужно заполнить все формы!");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("user", user.value);
    }
  }
});