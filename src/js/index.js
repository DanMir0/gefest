import Slider from './slider'

const slider = new Slider(document.querySelector('.wrapper'))
const select = document.querySelector("#selectProduct")

// select.addEventListener('change', () => {
//     if (select.value === "select_one") {
//         select.style.backgroundImage = "url(./img/select_one.svg)"
//     } else if (select.value === "select_two") {
//         select.style.backgroundImage = "url(./img/select_two.svg)"
//     } else if (select.value === "select_three") {
//         select.style.backgroundImage = "url(./img/select_three.svg)"
//         console.log(select.style.backgroundImage)
//     } else if (select.value === "select_four") {
//         select.style.backgroundImage = "url(./img/select_four.svg)"
//     } else if (select.value === "select_five") {
//         select.style.backgroundImage = "url('./img/select_five.svg')"
//     } else if (select.value === "select_six") {
//         select.style.backgroundImage = "url('./img/select_six.svg')"
//     } 
// })  

const allItems = document.querySelectorAll('.product__item')



select.addEventListener('change', (e) => {
  allItems.forEach(item => {
    if (select.value === item.id) {
        item.classList.remove('d-none')
    } else {
        item.classList.add('d-none')
    }
  })
})


