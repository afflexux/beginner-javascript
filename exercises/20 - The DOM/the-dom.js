// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('div');
// const item2Image = item2.querySelector('#para');
const heading = document.querySelector('.pizza');
// heading.innerText = 'Something else'; // setter
// heading.insertAdjacentText('afterend', 'added text');
console.log(heading.innerText); // getter
// console.log(item2Image.outerHTML);

const pic = document.querySelector('.nice');
pic.classList.add('open');
console.log(pic.classList);

pic.alt = 'A picture';

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
