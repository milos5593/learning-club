import './styles/style.scss'

import type { Tasks } from './types/Model'

// State
let globalFilter: 'All' | 'Pending' | 'Completed' = 'All'
let editTaskIndex: null | number = null
const tasks: Tasks = JSON.parse(localStorage.getItem('todo') as string) || []

// Listeners
const tasksHtmlEl = document.querySelector('.app__tasks') as HTMLUListElement
const inputHtmlEl = document.querySelector('.app__input') as HTMLInputElement
const clearAllHtmlEl = document.querySelector('.app__filter--button') as HTMLButtonElement
const filterButtonHtmlEl = document.querySelectorAll('.app__filter--link') as NodeListOf<HTMLButtonElement>

inputHtmlEl?.addEventListener('keyup', (e: KeyboardEvent) => onAddTask(e))
clearAllHtmlEl?.addEventListener('click', () => clearAllTasks())

Array.from(filterButtonHtmlEl).forEach((el) => {
    el.addEventListener('click', (e: MouseEvent) => onChangeFilter(e))
})

filterButtonHtmlEl.forEach((button) => {
    button.addEventListener('click', (e) => {
        filterButtonHtmlEl.forEach((element) => element.classList.remove('app__filter--link-active'))
        ;(e.target as HTMLButtonElement).classList.toggle('app__filter--link-active')
    })
})

const addEditButtonEventListeners = () => {
    const elements = document.querySelectorAll('.app__tasks__item__control--edit') as NodeListOf<HTMLButtonElement>
    Array.from(elements).forEach((el) => {
        el.addEventListener('click', (e) => onEditTask(e))
    })
}

const addRemoveButtonEventListeners = () => {
    const elements = document.querySelectorAll('.app__tasks__item__control--delete') as NodeListOf<HTMLButtonElement>
    Array.from(elements).forEach((el) => {
        el.addEventListener('click', (e) => onRemoveTask(e))
    })
}

const addTaskEventListeners = () => {
    const elements = document.querySelectorAll('.app__tasks__item > label') as NodeListOf<HTMLLabelElement>
    Array.from(elements).forEach((el) => {
        el.addEventListener('click', (e: MouseEvent) => onCompleteTask(e))
    })
}

// Actions
const onAddTask = (event: KeyboardEvent): void => {
    switch (event.key) {
        case 'Enter':
            if (editTaskIndex) {
                tasks[editTaskIndex].label = (event.target as HTMLInputElement).value
                tasks[editTaskIndex].editing = false

                editTaskIndex = null

                inputHtmlEl.value = ''
                inputHtmlEl.blur()

                renderTasks()
                saveDataToLocalStorage()

                return
            }

            tasks.push({
                label: (event.target as HTMLInputElement).value,
                completed: false,
                editing: false,
            })

            inputHtmlEl.value = ''
            inputHtmlEl.blur()

            renderTasks()
            saveDataToLocalStorage()
            return
            break

        case 'Escape':
            inputHtmlEl.value = ''
            inputHtmlEl.blur()
            break

        default:
            break
    }
}

const onRemoveTask = (e: MouseEvent): void => {
    const id = parseInt((e.target as HTMLButtonElement).dataset.id as string)

    tasks.splice(id, 1)

    renderTasks()
    saveDataToLocalStorage()
}

const onCompleteTask = (e: MouseEvent): void => {
    e.preventDefault()

    const id = parseInt((e.target as HTMLLabelElement).dataset.id as string)

    tasks[id].completed = !tasks[id].completed

    renderTasks()
    saveDataToLocalStorage()
}

const onEditTask = (e: MouseEvent): void => {
    const id = parseInt((e.target as HTMLButtonElement).dataset.id as string)
    tasks[id].editing = true

    inputHtmlEl.value = tasks[id].label

    editTaskIndex = id

    disableEditButtons()
}

const disableEditButtons = () => {
    const elements = document.querySelectorAll('.app__tasks__item__control--edit') as NodeListOf<HTMLButtonElement>

    Array.from(elements).forEach((el) => {
        el.disabled = el.dataset.id !== editTaskIndex?.toString()
    })
}

const clearAllTasks = () => {
    tasks.splice(0, tasks.length)

    renderTasks()
    saveDataToLocalStorage()
}

const onChangeFilter = (e: MouseEvent) => {
    const filter = (e.target as HTMLButtonElement).textContent

    switch (filter) {
        case 'Pending':
            globalFilter = 'Pending'
            renderTasks()
            break

        case 'Completed':
            globalFilter = 'Completed'
            renderTasks()
            break

        default:
            globalFilter = 'All'
            renderTasks()
            break
    }
}

const saveDataToLocalStorage = () => {
    localStorage.setItem('todo', JSON.stringify(tasks))
}

// App Start
const renderTasks = () => {
    let tasksHtml = ''

    const errorMessageDivEl = document.querySelector('.app__tasks__message')
    const tasksUlEl = document.querySelector('.app__tasks')

    if (tasks.length === 0) {
        errorMessageDivEl?.classList.remove('util--hidden')
        tasksUlEl?.classList.add('util--hidden')

        return
    } else {
        errorMessageDivEl?.classList.add('util--hidden')
        tasksUlEl?.classList.remove('util--hidden')
    }

    editTaskIndex = null

    tasks
        .filter((task) => {
            switch (globalFilter) {
                case 'Pending':
                    return task.completed === false
                    break

                case 'Completed':
                    return task.completed === true
                    break

                default:
                    return task.completed === true || task.completed === false
                    break
            }
        })
        .forEach((task, i) => {
            const isTaskCompleted = task.completed ? 'checked="true"' : ''

            return (tasksHtml += `
            <li class="app__tasks__item" data-id="${i}">
                <label data-id="${i}" for="${i}" title="${task.label}">
                    <input data-id="${i}" id="${i}" type="checkbox" ${isTaskCompleted} />
                    <p>${task.label}</p>
                </label>
                <div class="app__tasks__item__controls">
                    <button data-id="${i}" class="app__tasks__item__control app__tasks__item__control--edit">Edit</button>
                    <button data-id="${i}" class="app__tasks__item__control app__tasks__item__control--delete app__tasks__item__control--destructive">
                        Delete
                    </button>
                </div>
            </li>
        `)
        })

    tasksHtmlEl.innerHTML = tasksHtml

    addTaskEventListeners()
    addEditButtonEventListeners()
    addRemoveButtonEventListeners()
}

renderTasks()
