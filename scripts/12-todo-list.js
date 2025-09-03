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
        <button class="delete-toto-btn js-delete-todo-button">Delete</button>
      `;
    todoListHTML += html;
  });

  const todoDiv = document.querySelector(".js-todo-list");
  todoDiv.innerHTML = todoListHTML;

  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteBtn, index) => {
      //closure: a function has access to a value, will always have access to that value and value gets packaged together (enclosed) with the function
      deleteBtn.addEventListener("click", () => {
        console.log(index);
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector(".js-add-todo-btn").addEventListener("click", addTodo);

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
