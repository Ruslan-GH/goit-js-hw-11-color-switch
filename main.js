const refs = {
    startBtn: document.querySelector('button[data-action="start"'),
    stopBtn: document.querySelector('button[data-action="stop"'),
  },
  colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ],
randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', changeBodyColor)

refs.stopBtn.addEventListener('click', stopChangeBodyColor)

let interval = null

function changeBodyColor() {
    interval = setInterval(() => {
        const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
        document.body.style.backgroundColor = color;
        refs.startBtn.setAttribute('disabled', true)
    }, 1000);
}

function stopChangeBodyColor() {
    clearInterval(interval);
    refs.startBtn.removeAttribute('disabled',);
}



