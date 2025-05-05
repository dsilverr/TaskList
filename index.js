// Requisitando os elementos HTML
const taskInput = document.getElementById('task')
const createBTN = document.getElementById('create')
const section = document.getElementById('task-storage')
const task = []
let taskRows = 0

// Função para criar um h4
const createH4 = (text) => {
    const h4 = document.createElement('h4')

    h4.innerText = text
    return h4
} 

// Função para criar uma label
const createLabel = (text, htmlFor) => {
    const label = document.createElement('label')

    label.innerText = text
    label.htmlFor = htmlFor
    return label
}

// Função para criar um input
const createInput = (id, value, name, type = 'radio', placeholder = '') => {
    const input = document.createElement('input')

    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

//Função para criar uma section contendo as informações da tarefa
const createTask = () => {
    // Validação feita para evitar que seja criado uma tarefa vazia, o trim() remove espaços
    if (taskInput.value.trim() !== '') {
        const br = document.createElement('br')

    // criando a section onde as informações vão ficar
    const newrow = document.createElement('section')
    const rowIndex = taskRows
    // assim que for criado uma task irá acrecentar + 1 ao valor
    taskRows ++
    newrow.id = 'taskRow-' + rowIndex
    newrow.className = 'task'
    
    // Estamos chamando as funções anteriormente criadas
    const h4 = createH4(taskInput.value)
    const id = 'radio-' + rowIndex + '.1'
    const input = createInput(id, 'Conluido', 'rad-' + rowIndex)
    const label = createLabel('Concluido', id)
    const id1 = 'radio-' + rowIndex + '.2'
    const input1 = createInput(id1, 'Andamento', 'rad-' + rowIndex)
    const label1 = createLabel('Andamento',id1)

    // criando o botão para remover a task
    const removeTask = document.createElement('button')
    removeTask.type = 'button'
    removeTask.innerText = 'Remover'
    removeTask.addEventListener('click', () =>{
        section.removeChild(newrow)
    })

    // adcionando a task ao elemento pai e esvaziando o input ao finalizar
    newrow.append(h4,br,label,input,label1,input1,removeTask)
    section.appendChild(newrow)
    taskInput.value = ''
    } else{
        // caso o input esteja vazio não será possivel criar
        alert('Impossivél criar uma tarefa vazia')
    }
}
