// selectors
const body = document.querySelector('body');
const headerDate = document.querySelector('.headerDate');
const headerLink = document.querySelectorAll('.headerLink');
const header = document.querySelector('header');
const toggleIcon = document.querySelector('.toggleIcon');

// Color Variables
const offWhite = '#fafafa';
const offBlack = '#353839';

// dynamically sets date in header
const dateSetter = function() {
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const formattedDate = `${monthNames[month]} ${day}, ${year}`;
return formattedDate;
}

headerDate.innerText = dateSetter();

let isNightMode = false;
toggleIcon.addEventListener('click', () => {
    isNightMode = !isNightMode;
    isNightMode ? (nightMode(), toggleIcon.setAttribute('src', 'icons/sun.png')) : (dayMode(), toggleIcon.setAttribute('src', 'icons/moon.png'));
})

// Function that contains styles for nightmode
const nightMode = function() {
    body.style.backgroundColor = '#0b1117';
    body.style.color = offWhite;
    headerLink.forEach(element => element.style.color = offWhite);
}

// function that contains styles for daymode
const dayMode = function() {
    body.style.backgroundColor = offWhite;
    body.style.color = offBlack;
    headerLink.forEach(element => element.style.color = offBlack);
}