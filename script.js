let todoList = [
  {
    item : 'Buy Milk',
    dueDate : '13/05/2024'
  },
  {
    item : 'Go to College',
    dueDate : '13/05/2024'
  }
];
displayItems();

function setTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#date-input');
  let todoItem = inputElement.value;
  let dateItem = dateElement.value;

  if(inputElement.value !== '' && dateElement.value !== ''){
    todoList.push({item : todoItem,dueDate : dateItem});
  }
  inputElement.value = '';
  dateElement.value = '';
 
  console.log(todoList);
  displayItems(dateItem);

  
}

function displayItems(dateInput){
  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';
  for(let i = 0;i < todoList.length;i++){
    let {item,dueDate} = todoList[i];
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button onclick="todoList.splice(${i},1);displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}
