const hide = document.getElementById("hide");

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const current = document.getElementsByClassName("Currnet_Color");
const mode = document.getElementById("jsMode");
const range = document.getElementById("jsRange");
const saveBtn = document.getElementById("jsSave");
const saveAsBtn = document.getElementById("jsSaveAs");

const INITIAL_COLOR = "#2c2c2c";

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(event){
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  current[0].style.backgroundColor = ctx.strokeStyle;
}

function handleRangeChange(event){
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick(){
  if (filling === true){
    filling = false;
    mode.innerText = "FILL";
  } else {
    filling = true;
    mode.innerText = "PAINT";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function handleCM(event) {
  event.preventDefault();
}

function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS";
  link.click();
}

function handleSaveAsClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  var name = document.getElementById("name");
  link.href = image;
  link.download = name.value;
  link.click();
  name.value = '';
}

if(canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}

if (saveAsBtn) {
  saveAsBtn.addEventListener("click", handleSaveAsClick);
}

function HideShow(){
  var jsColors = document.getElementById("jsColors");
  if (jsColors.style.display === "none") {
    jsColors.style.animation=`fadeIn 1s`;
    jsColors.style.display = "flex";
  } else {
    jsColors.style.display = "none";
  }
}

if (hide) {
  hide.addEventListener("click", HideShow);
}