document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let task = document.getElementById('new-task-description').value
        
        // function enterTask(task){
            // let div = document.createElement('div')
            // div.setAttribute('class', 'todo')


            let li = document.createElement('li')
            li.textContent = `${task} `
            li.setAttribute('class', 'taskList')
        
            let btn = document.createElement('button')
            btn.textContent = `Delete`
            btn.setAttribute('class', 'delete')

            btn.addEventListener('click', deleteTask)
        
            li.appendChild(btn)
            document.querySelector('#tasks').appendChild(li)
            
        // }

        form.reset
    })
});

function deleteTask(event){
  event.target.parentNode.remove()
}