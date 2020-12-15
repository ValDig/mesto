const popup = document.querySelector('.popup');
const btnEditProfile = document.querySelector('.profile__btn-edit');
const btnClosePopup = document.querySelector('.popup__close');
const profileEditForm = document.forms['profileEdit'];
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileJobInput = document.querySelector('.popup__input_type_job');

function popupOpen() {
    popup.classList.add('popup_opened');
    profileNameInput.value = profileName.textContent.trim();
    profileJobInput.value = profileJob.textContent.trim();
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent =  profileNameInput.value;
    profileJob.textContent =  profileJobInput.value;
    popupClose();
}

btnEditProfile.addEventListener('click', popupOpen);
btnClosePopup.addEventListener('click', popupClose);
profileEditForm.addEventListener('submit', formSubmitHandler);