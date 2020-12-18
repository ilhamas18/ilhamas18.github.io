let boxImage1 = document.getElementById('dadu1');
let boxImage2 = document.getElementById('dadu2');
let boxImage3 = document.getElementById('dadu3');
let boxImage4 = document.getElementById('dadu4');
let boxImage5 = document.getElementById('dadu5');
let boxImage6 = document.getElementById('dadu6');
let startButton = document.getElementById('start');
let score = document.getElementById('score');

let currentlyPlaying = true;

let flag1 = document.getElementById('flag1');
let flag2 = document.getElementById('flag2');
let flag3 = document.getElementById('flag3');
let flag4 = document.getElementById('flag4');
let flag5 = document.getElementById('flag5');
let flag6 = document.getElementById('flag6');

let piza = "assets/piza.png";
let machuPichu = "assets/machupichu.jpg";
let petra = "assets/petra.jpg";
let tajMahal = "assets/Taj-Mahal-India.jpg";
let champ = "assets/champ.jpg"
let stonhenge = "assets/stonhenge.jpg"
let resetBox = "assets/gambar.png";

let italy = "assets/italy.jpg";
let peru = "assets/peru.png";
let jordan = "assets/jordan.png";
let india = "assets/india.png";
let france = "assets/france.jpg";
let uk = "assets/uk.png";

boxImage1.onclick = () => {
  boxImage1.src = piza;
  startButton.innerHTML = 'Leaning Tower of Pisa';
  currentlyPlaying = false;
}
boxImage2.onclick = () => {
  boxImage2.src = machuPichu;
  startButton.innerHTML = 'Machu Pichu';
  currentlyPlaying = false;
}
boxImage3.onclick = () => {
  boxImage3.src = petra;
  startButton.innerHTML = 'Petra';
  currentlyPlaying = false;
}
boxImage4.onclick = () => {
  boxImage4.src = tajMahal;
  startButton.innerHTML = 'Taj Mahal';
  currentlyPlaying = false;
}
boxImage5.onclick = () => {
  boxImage5.src = champ;
  startButton.innerHTML = 'Arc de Triomphe';
  currentlyPlaying = false;
}
boxImage6.onclick = () => {
  boxImage6.src = stonhenge;
  startButton.innerHTML = 'Stonehenge';
  currentlyPlaying = false;
}

// Add flag below

flag1.onclick = () => {
  flag1.src = italy;
  startButton.innerHTML = 'Italy';
  currentlyPlaying = false;
}
flag2.onclick = () => {
  flag2.src = peru;
  startButton.innerHTML = 'Peru';
  currentlyPlaying = false;
}
flag3.onclick = () => {
  flag3.src = jordan;
  startButton.innerHTML = 'Jordan';
  currentlyPlaying = false;
}
flag4.onclick = () => {
  flag4.src = india;
  startButton.innerHTML = 'India';
  currentlyPlaying = false;
}
flag5.onclick = () => {
  flag5.src = france;
  startButton.innerHTML = 'France';
  currentlyPlaying = false;
}
flag6.onclick = () => {
  flag6.src = uk;
  startButton.innerHTML = 'United Kingdom';
  currentlyPlaying = false;
}

// Add button below

reset.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
}

const startRound = () => {
  boxImage1.src = resetBox;
  boxImage2.src = resetBox;
  boxImage3.src = resetBox;
  boxImage4.src = resetBox;
  boxImage5.src = resetBox;
  boxImage6.src = resetBox;
  flag1.src = resetBox;
  flag2.src = resetBox;
  flag3.src = resetBox;
  flag4.src = resetBox;
  flag5.src = resetBox;
  flag6.src = resetBox;
  currentlyPlaying = true;
  startButton.innerHTML = 'Open the Box';
}


