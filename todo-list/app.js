"use strict";

let database = [
  {"task" : "Estudar Js", "status" : ""},
  {"task" : "Netflix", "status" : "checked"}
]

const createItem = (task, status="") => {
  const item = document.createElement("label");
  item.classList.add("todo_item");
  item.innerHTML = `
    <input type="checkbox" ${status}>
    <div>${task}</div>
    <input type="button" value="X">
  `
  document.getElementById("todoList").appendChild(item);
}