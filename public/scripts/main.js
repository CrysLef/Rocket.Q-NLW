import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")

const deleteButtons = document.querySelectorAll(".delete")

deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})


const checkButtons = document.querySelectorAll(".check")

checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})

function handleClick(event, check = true) {

    event.preventDefault()

    const certain = check ? "marcar como lida" : "excluir"

    const roomId = document.querySelector("#room-id").dataset.id
    const slug = check ? "check" : "delete"
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = check ? "Marcar como lida" : "Excluir pergunta"
    modalDescription.innerHTML = `Tem certeza que deseja ${certain} esta pergunta?`
    modalButton.innerHTML = `Sim,${certain}`

    check ? modalButton.classList.add("bluePadding") : modalButton.classList.add("red")

    modal.open()
}
