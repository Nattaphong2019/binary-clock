const convertTimeToBinary = (timeString) => {
  let binary = timeString
    .split("")
    .map((time) => parseInt(time, 10).toString(2).padStart(4, "0"));
  return binary;
};

const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${hours}${minutes}${seconds}`;
};

const addAndRemoveClassCircleBlue = () => {
  const binaryTimes = convertTimeToBinary(getCurrentTime());
  for (let i = 0; i < 6; i++) {
    const times = binaryTimes[i].split("");
    for (let j = 0; j < 4; j++) {
      let time = times[j].toString();
      let element = document
        .getElementsByClassName("col")
        [i].getElementsByClassName("circle")[j];
      if (time === "1" && element != undefined) {
        element.classList.add("circle-blue");
      } else {
        element.classList.remove("circle-blue");
      }
    }
  }
};

setInterval(function () {
  addAndRemoveClassCircleBlue();
}, 1000);
