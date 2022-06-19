"use strict";

let database = [
  {"task" : "Estudar Js", "status" : ""},
  {"task" : "Netflix", "status" : "checked"},
  {"task" : "Netflix", "status" : "checked"}

]

const createItem = (task, status) => {
  const item = document.createElement("label");
  item.classList.add("todo_item");
  item.innerHTML = `
    <input type="checkbox" ${status}>
    <div>${task}</div>
    <input type="button" value="X">
  `;
  document.getElementById("todoList").appendChild(item);
}

const clearTask = () => {
  const todoList = document.getElementById("todoList");
  while (todoList.firstChild){
    todoList.removeChild(todoList.lastChild);
  }
}

const updateScreen = () => {
  database.forEach(item => createItem(item.task, item.status));
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

document.getElementById("newItem").addEventListener("keypress", addTask);

updateScreen();