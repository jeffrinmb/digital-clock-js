'use strict';
const clockContainer = document.querySelector('.container');
const hourAndMin = document.querySelector('.hour-and-min');
const second = document.querySelector('.second');
const amPm = document.querySelector('.ampm');
const dateContainer = document.querySelector('.date');

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const generateTime = () => {
  const date = new Date();
  const timeVal = date.toLocaleTimeString().split(':');
  const dateVal = date.toLocaleDateString('en-IN', options);
  if (+timeVal[0] < 10) {
    timeVal[0] = '0' + timeVal[0];
  }
  const secondVal = timeVal[2].split(' ')[0];
  const ampmVal = timeVal[2].split(' ')[1];
  hourAndMin.innerText = timeVal[0] + ' : ' + timeVal[1];
  second.innerText = secondVal;
  amPm.innerText = ampmVal;
  dateContainer.innerText = dateVal;
};

setInterval(generateTime, 1000);
