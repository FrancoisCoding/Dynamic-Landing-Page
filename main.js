// DOM Selectors
const time = document.getElementById('time');
let greeting = document.getElementById('greeting');
let h2 = document.querySelectorAll("h2");
let name = document.getElementById('name');
let focus = document.getElementById('focus');
const amPmButton = document.getElementById('1');
const militaryTimeButton = document.getElementById('2');

// Variables
const morningImages = ['https://i.ibb.co/7vDLJFb/morning.jpg', 'images/morning1.jpg', 'images/morning2.jpg', 'images/morning3.jpg', 'images/morning4.jpg', 'images/morning5.jpg'];
const morningImgRandom = morningImages[Math.floor(Math.random() * 6)];

const afternoonImages = ['https://i.ibb.co/3mThcXc/afternoon.jpg', 'images/evening1.jpg', 'images/evening2.jpg', 'images/evening3.jpg', 'images/evening4.jpg', 'images/evening5.jpg'];
const afternoonImgRandom = afternoonImages[Math.floor(Math.random() * 6)];

const nightImages = ['https://i.ibb.co/924T2Wv/night.jpg', 'images/night1.jpg', 'images/night2.jpg', 'images/night3.jpg', 'images/night4.jpg', 'images/night5.jpg'];
const nightImgRandom = nightImages[Math.floor(Math.random() * 6)];

// Options
showAmPm = true;
showMilitaryTime = false;

amPmButton.addEventListener('click', function () {
    if (showAmPm == true) showAmPm = false;
    else showAmPm = true;

    // Changes Button Text on Click
    if (amPmButton.textContent == "Remove Am/Pm") amPmButton.textContent = "Add Am/Pm";
    else amPmButton.textContent = "Remove Am/Pm";
})

militaryTimeButton.addEventListener('click', function () {
    if (showMilitaryTime == false) showMilitaryTime = true;
    else showMilitaryTime = false;
})

// Display Time
function showTime() {
    let currentTime = new Date(),
        hour = currentTime.getHours(),
        min = currentTime.getMinutes(),
        sec = currentTime.getSeconds(),
        militaryHour = currentTime.getHours();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    if (showMilitaryTime == false) {
        time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`
    } else {
        time.innerHTML = `${militaryHour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`
    }

    setTimeout(showTime, 1000);
}

// Fix Missing Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background Image and Greeting based on Time
function setBgGreet() {
        let currentTime = new Date(),
        hour = currentTime.getHours(),
        militaryHour = currentTime.getHours();

    if (hour < 12 || militaryHour < 12) {
        // Morning
        if (morningImgRandom == `images/morning3.jpg`) {
            h2[0].style.opacity = '1';
            h2[1].style.opacity = '1';
        } else if (morningImgRandom == `images/morning4.jpg`) {
            h2[0].style.opacity = '.8';
            h2[1].style.opacity = '.8';
        }

        document.body.style.backgroundImage = `url(${morningImgRandom})`;
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Morning';
    } else if (hour < 20 || militaryHour < 20) {
        // Afternoon
        if (afternoonImgRandom == `images/evening5.jpg`) {
            time.style.color = 'white';
            greeting.style.color = 'white';
            name.style.color = 'white';
            h2[0].style.color = 'white';
            h2[1].style.color = 'white';
            h2[0].style.opacity = '.8';
            h2[1].style.opacity = '.8';
        }
        document.body.style.backgroundImage = `url(${afternoonImgRandom})`;
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Afternoon';
    } else {
        // Night
        document.body.style.backgroundImage = `url(${nightImgRandom})`;
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';

    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Check if Enter is Pressed
        if (e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Check if Enter is Pressed
        if (e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Update Name and Focus Listeners
name.addEventListener('keypress',
    setName);
name.addEventListener('blur',
    setName);
focus.addEventListener('keypress',
    setFocus);
focus.addEventListener('blur',
    setFocus);


// Start Functions
showTime();
setBgGreet();
getName();
getFocus();
