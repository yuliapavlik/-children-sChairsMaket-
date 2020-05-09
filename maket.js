let popup = document.querySelector('.callback');
let openPopupButton = document.querySelectorAll('.button-open');
let closePopupButton = popup.querySelector('.button-close');


for (let i = 0; i < openPopupButton.length; i++) {
openPopupButton[i].addEventListener('click', function (evt) {
	 evt.preventDefault();
	 popup.classList.add('callback-show');
  
});
}

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('callback-show');
});

let popupCompleted = document.querySelector('.completed');
let openCompletedButton = document.querySelectorAll('.completed-open');
let closeCompletedButton = popupCompleted.querySelector('.button-close');

for (let i = 0; i < openCompletedButton.length; i++) {
openCompletedButton[i].addEventListener('click', function (evt) {
	 evt.preventDefault();
	 popupCompleted.classList.add('completed-show');
  
});
}

closeCompletedButton.addEventListener('click', function () {
  popupCompleted.classList.remove('completed-show');
});

