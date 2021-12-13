document.addEventListener('DOMContentLoaded', function () {



  const addTask = () => {
    const newTask = document.querySelector('.input').value
    const ul = document.querySelector('ul')
    const createLi = document.createElement('li')
    createLi.innerHTML = `<span>${newTask}</span>`
    ul.append(createLi)
  }

  const addButton = document.querySelector('.add-task')
  addButton.addEventListener('click', () => {
    addTask()
  });
})