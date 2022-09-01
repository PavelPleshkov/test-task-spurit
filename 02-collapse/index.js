const btn = document.getElementsByClassName('collapsible__button')[0];
const collapsibleContent = document.getElementsByClassName('collapsible__content')[0];
const spanShow = document.getElementsByClassName('collapsible__action--hidden')[0];
const spanHide = document.getElementsByClassName('collapsible__action--visible')[0];

const appearing = [
  {
    color: 'blue',
    transform: 'translateX(-50%) translateY(-100%) scale(0)',
  },
  {
    color: 'black',
    transform: 'translateX(0) translateY(0) scale(1)',
  }
];

const disappearing = [
  {
    color: 'red',
    transform: 'translateX(0) translateY(0) scale(1)',
  },
  {
    color: 'blue',
    transform: 'translateX(-50%) translateY(-100%) scale(0)',
  }
]

const collapseTiming = {
  duration: 300,
  iterations: 1,
  fill: 'forwards',
}

function hide() {
  btn.removeEventListener('click', hide);
  btn.addEventListener('click', show);
  btn.innerHTML = '';
  btn.appendChild(spanShow);
  collapsibleContent.animate(disappearing, collapseTiming);
}

function show() {
  btn.removeEventListener('click', show);
  btn.addEventListener('click', hide);
  btn.innerHTML = '';
  btn.appendChild(spanHide);
  collapsibleContent.animate(appearing, collapseTiming);
}

spanShow.remove();

btn.addEventListener('click', hide);