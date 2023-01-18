import data from "./data.json" assert {type : "json"};


let mainContainer =  document.querySelector (".main__stats__container");
let dailybtn =  document.querySelector("#daily");
let weeklybtn =  document.querySelector("#weekly");
let monthlybtn =  document.querySelector("#monthly");

let dailyTimeFrame = data.map(((datad) => datad.timeframes.daily));
let weekTimeFrame = data.map(((dataw) => dataw.timeframes.weekly));
let monthTimeFrame = data.map(((datam) => datam.timeframes.monthly));

console.log(weekTimeFrame);
console.log(dailyTimeFrame);
console.log(monthTimeFrame);

let colorsArray = ["hsl(15, 100%, 70%)", "hsl(195, 74%, 62%)", "hsl(348, 100%, 68%)", "hsl(145, 58%, 55%)", "hsl(264, 64%, 52%)", "hsl(43, 84%, 65%)"]

let background = ["work", "play", "study", "exercise", "social", "self-care"]


function addBox (array) {
  mainContainer.innerHTML = " "; 
  array.forEach((element, index)=> {
    mainContainer.innerHTML += 
    `
    <div class="box__container" style="background-color: ${colorsArray[index]}">

      <img src="./images/icon-${background[index]}.svg" alt="work__icon" class="stats__bg__img">

      <div class="stats__container">

        <p class="title">${data[index].title}</p>
        <img src="./images/icon-ellipsis.svg" alt="option" class="box__option__icon">
        <p class="current">${element.current}hrs</p>
        <p class="previous">Previous - ${element.previous}hrs</p>

      </div>

    </div>
    `
  })
}

dailybtn.addEventListener("click", () => {
  addBox(dailyTimeFrame);
});

weeklybtn.addEventListener("click", () => {
  addBox(weekTimeFrame);
});

monthlybtn.addEventListener("click", () => {
  addBox(monthTimeFrame);
});
