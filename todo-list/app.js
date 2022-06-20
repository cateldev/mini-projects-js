"use strict";

let database = [
  {"task" : "Estudar Js", "status" : ""},
  {"task" : "Netflix", "status" : "checked"},
  {"task" : "Netflix", "status" : "checked"}

]

const createItem = (task, status, index) => {
  const item = document.createElement('label');
  item.classList.add('todo__item');
  item.innerHTML = `
      <input type="checkbox" ${status} data-indice=${index}>
      <div>${task}</div>
      <input type="button" value="X" data-indice=${index}>
  `;
  document.getElementById('todoList').appendChild(item);
}

const clearTask = () => {
  const todoList = document.getElementById("todoList");
  while (todoList.firstChild){
    todoList.removeChild(todoList.lastChild);
  }
}

const updateScreen = () => {
  clearTask();
  database.forEach(item, index => createItem(item.task, item.status, index));
}

const addTask = (event) => {
  const key = event.key;
  const text = event.target.value;
  if (key === "Enter"){
    database.push({"task" : text, "status" : ""});
    updateScreen();
    event.target.value = "";
  }
}

const removeItem = (index) => {
  database.splice (index, 1);
  updateScreen();
}

const updateItem = (index) => {
  database[index].status = database[index].status === "" ? "checked" : "";
  updateScreen;
}

const clickItem = (event) => {
  const element = event.target;
  if(element.type === "button") {
    const index = element.dataset.index;
    removeItem(index);
  } 
  else if (element.type === "checkbox"){
    const index = element.dataset.index;
    uptadeItem (index);
  }
}

document.getElementById("newItem").addEventListener("keypress", addTask);
document.getElementById("todoList").addEventListener("click", clickItem);

updateScreen();