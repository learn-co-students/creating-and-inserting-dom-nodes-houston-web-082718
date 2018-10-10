//----> Creates h1 with styling and adds to DOM
const title = document.createElement('h1')
title.innerHTML = 'Violet Moon\'s Website'
title.style.fontStyle = 'oblique'
title.style.textAlign = 'center'
document.body.appendChild(title)

//----> Creates list and adds to DOM
const animalsList = document.createElement('ul')
for (let i = 1; i < 5; i++) {
  let li = document.createElement('li')
  li.innerHTML = i +' giraffey'
  animalsList.appendChild(li)
}
document.body.appendChild(animalsList)

//----> Removes list item from <ul></ul>
animalsList.removeChild(animalsList.querySelector('li:nth-child(3)'))

//----> Removes list
animalsList.remove()
