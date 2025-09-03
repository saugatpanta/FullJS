const todoList = [
  {
    name: "",
    dueDate: "",
  },
];

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;

    const html = `
        <div> ${name}</div>
        <div> ${dueDate} </div>          
        <button onclick= "
        todoList.splice(${i},1);
        renderTodoList();
        " class="delete-toto-btn">Delete</button>
      `;
    todoListHTML += html;
  }

  const todoDiv = document.querySelector(".js-todo-list");
  todoDiv.innerHTML = todoListHTML;
}

function addTodo() {
  const todoInputs = document.querySelector(".js-name-input");
  const dateInputs = document.querySelector(".js-date-input");
  const name = todoInputs.value;
  const dueDate = dateInputs.value;

  if (!name || !dueDate) return;

  todoList.push({
    name,
    dueDate,
  });
  todoInputs.value = "";
  dateInputs.value = "";

  renderTodoList();
}
