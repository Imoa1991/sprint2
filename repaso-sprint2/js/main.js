'use strict';

const data = [
  {
    title: 'Asteroids 101',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Life on Mars',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Martians invade Earth',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Humans aren\'t real',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Space The Final Frontier',
    image: 'https://via.placeholder.com/200x100'
  }
];
const ul = document.querySelector('.news');
const itemMars = (element, img, li) => {
  if (img.alt.includes('Mars') || img.alt.includes('Martian')){
    li.classList.add('news__item--from-mars');
  }
};
for (const element of data) {
  let li = document.createElement('li');
  let h2= document.createElement('h2');
  let img = document.createElement('img');
  let title = document.createTextNode(element.title);
  li.classList.add('news__item');
  h2.classList.add('news__title');
  img.classList.add('news__image');
  img.src = element.image;
  img.alt = element.title;
  itemMars(element, img, li);
  h2.appendChild(title);
  li.appendChild(h2);
  li.appendChild(img);
  ul.appendChild(li);
}
