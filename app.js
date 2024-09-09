const arry = [];

function add() {
  const textInput = document.querySelector('.input-text');
  const dateInput = document.querySelector('.input-date');
  const text = textInput.value.trim();
  const date = dateInput.value;

  if (text && date) {
    arry.push({ text, date });
    updateList();
  }

  textInput.value = ''; // Clear the text input
  dateInput.value = ''; // Clear the date input
}

function updateList() {
  let listitem = '';
  for (let i = 0; i < arry.length; i++) {
    listitem += 
     ` <li>
       <span class="task">${arry[i].text}</span>
        <span class="date">${arry[i].date}</span>
        <button class="delete-btn" onclick="deleteItem(${i})">Delete</button>
      </li>`;
  }
  document.querySelector('.todo').innerHTML = listitem;
}

function deleteItem(index) {
  arry.splice(index, 1);
  updateList();
}
