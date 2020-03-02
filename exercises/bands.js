"use strict";

const bands = [
    {
      name: "The Beatles",
      instruments: {
        John: "voice",
        Paul: "bass",
        Ringo: "drums",
        George: "guitar"
      }
    },
    {
      name: "The Ramones",
      instruments: {
        Johnny: "voice",
        Joey: "guitar",
        Marky: "drums",
        DeeDee: "bass"
      }
    }
  ];

let main = document.querySelector('.main');

for (let i in bands) {
  let bandDiv = document.createElement("div");
  bandDiv.classList.add("band");

  let title = document.createElement("h2");
  title.innerHTML = bands[i].name;
  bandDiv.appendChild(title);

  main.appendChild(bandDiv);
}