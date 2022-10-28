const box = document.querySelectorAll('.box')

box.forEach(box => {
    box.addEventListener('click', (e) => {
        e.target.innerText += parseInt(Math.random)
        console.log(e.target)
    })
})

const gameBoard = () => {

}

const displayController = () => {
    
}