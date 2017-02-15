import data from './user-data';

console.log(data);

const photoEl = document.querySelector('.user-info__pic img');
photoEl.src = data.results[0].picture.large;

// const titleNameEl = document.querySelector('.user-info__name');
// titleNameEl.innerText = data.results[0].name.title;

const firstNameEl = document.querySelector('.user-info__name');
firstNameEl.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;

const emailEl = document.querySelector('.user-info__email');
emailEl.innerText = data.results[0].email;

const phoneEl = document.querySelector('.user-info__phone');
phoneEl.innerText = data.results[0].phone;

const locationEl = document.querySelector('.user-info__location');
locationEl.innerText = `${data.results[0].location.city} ${data.results[0].location.state}`;

const passwordEl = document.querySelector('.user-info__password');
passwordEl.innerText = data.results[0].login.password;
