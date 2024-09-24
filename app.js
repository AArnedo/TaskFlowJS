const taskForm = document.getElementById('task-form')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')

taskForm.addEventListener('submit',(e) =>{
    e.preventDefault() /* Para que no se reinicie el DOM */
    const textInput = taskInput.value; 
    const li = document.createElement('li') 
    taskList.appendChild(li) 
    taskInput.value = ''

     /* Agregar checkbox para tachar */
     const check = document.createElement('input')
     check.type = 'checkbox'
     check.classList.add('checkbox')
     li.appendChild(check)

     /* Creamos 'span' para texto tachado o completado */
    const taskText = document.createElement('span')
    taskText.textContent = textInput
    li.appendChild(taskText)

    
    /* Agrego boton 'Eliminar' */
    const btnDelete = document.createElement('button')
    btnDelete.textContent = 'Eliminar'
    btnDelete.classList.add('delete-btn')
    li.appendChild(btnDelete)
})

taskList.addEventListener('click', (e) =>{
    
    /* Funcionalidad al boton 'Eliminar' */
    if (e.target.classList.contains('delete-btn')){
        e.target.parentElement.remove()
    }

    /* Funcionalidad al 'Checkbox' */
    if(e.target.type === 'checkbox'){
        const textSpan = e.target.nextSibling
        if (e.target.checked){
            textSpan.classList.add('completed')
        } else{
            textSpan.classList.remove('completed')
        }
    }
})

