const fps = 20;

const canvas = document.body.appendChild(document.createElement('canvas'));
const cnvs = canvas.getContext('2d');
const aImg = document.getElementById('img');
const colInRow = 30;
canvas.width = window.innerWidth / 2;
canvas.height = window.innerWidth / 2;
const colSize = () => Math.floor(canvas.height / colInRow);
const gap = () => Math.floor((canvas.height - colSize() * colInRow) / 2);
const states = {
  NOTHING: 0,
  SNAKE: 1,
  APPLE: 2
}
let cols = [];

for (let x = 0; x < colInRow; x++) {
  cols[x]=[];
  for (let y = 0; y < colInRow; y++) {
    cols[x][y] = new Col(x, y);
  }
}

loop = () => {
  canvas.width = window.innerWidth / 2;
  canvas.height = window.innerWidth / 2;
  basedraw();
  
}
canvas.onresize = function () {
  basedraw();
}

let basedraw = () => {
  cnvs.save();

  cnvs.beginPath();
  cnvs.fillStyle = 'black';
  cnvs.rect(0, 0, canvas.width, canvas.height);
  cnvs.fill();
  cnvs.strokeStyle = 'white';
  cnvs.translate(0.5, 0.5);
  // console.log(colSize())
  for (let x = 0; x <= colInRow; x++) {
    cnvs.beginPath();
    cnvs.moveTo(gap() + x * colSize(), gap() + 0);
    cnvs.lineTo(gap() + x * colSize(), gap() + colSize() * colInRow);
    cnvs.stroke();
  }
  // console.log(colSize())
  for (let y = 0; y <= colInRow; y++) {
    cnvs.beginPath();
    cnvs.moveTo(gap() + 0, gap() + y * colSize());
    cnvs.lineTo(gap() + colSize() * colInRow, gap() + y * colSize());
    cnvs.stroke();
  }
  cnvs.restore();
}
Loop = setInterval(loop, 1000 / fps);
