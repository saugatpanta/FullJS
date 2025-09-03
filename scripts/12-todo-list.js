const todoList = [
  {
    name: "",
    dueDate: "",
  },
];

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
        <div> ${name}</div>
        <div> ${dueDate} </div>          
        <button onclick= "
        todoList.splice(${index},1);
        renderTodoList();
        " class="delete-toto-btn">Delete</button>
      `;
    todoListHTML += html;
  });

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
