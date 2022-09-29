import data from "./data.json"

// finding highest

let max = 0;

data.map(i => {
  if(i.amount > max){
    max = i.amount;
  }
})

let graphDiv = document.querySelector(".graph")

data.map(i =>{
  let newElement = document.createElement("div");
  let textElement = document.createElement("p");
  let bar = document.createElement("div");
  let tooltip = document.createElement("p");
  tooltip.innerHTML = "$" + i.amount;
  textElement.innerHTML = i.day;
  bar.style.height = i.amount * 3 + "px";
  newElement.className = "bar-element";
  textElement.className = "bar-text";
  bar.className = "bar";
  tooltip.className = "tooltip"
  if(i.amount == max){
    bar.id = "highest";
  }
  newElement.append(tooltip);
  newElement.append(bar);
  newElement.append(textElement);
  graphDiv.append(newElement)
})