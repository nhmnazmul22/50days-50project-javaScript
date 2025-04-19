// Select dom element
const hourElement = document.getElementById("hours");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");

// Update time and element text functionality
const updateTimeElement = () => {
  // update times
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  // update element text
  hourElement.innerText = hour.toString().padStart(2, 0);
  minuteElement.innerText = minute.toString().padStart(2, 0);
  secondElement.innerText = second.toString().padStart(2, 0);
};

setInterval(updateTimeElement, 1000);
