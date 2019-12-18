console.log('Hi');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'My Text';
myParagraph.classList.add('test');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/200';
myImage.alt = 'An Image';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

document.body.appendChild(myParagraph);

// const image2 = document.querySelector('#para');
// image2.appendChild(myImage);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);
