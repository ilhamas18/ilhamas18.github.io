let boxImage1 = document.getElementById('dadu1');
let boxImage2 = document.getElementById('dadu2');
let boxImage3 = document.getElementById('dadu3');
let boxImage4 = document.getElementById('dadu4');
let boxImage5 = document.getElementById('dadu5');
let boxImage6 = document.getElementById('dadu6');
let startButton = document.getElementById('start');

let flag1 = document.getElementById('flag1');
let flag2 = document.getElementById('flag2');
let flag3 = document.getElementById('flag3');
let flag4 = document.getElementById('flag4');
let flag5 = document.getElementById('flag5');
let flag6 = document.getElementById('flag6');

let currentlyPlaying = true;

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

let numClosedBox = 12;
let randomBox = 6;
let openedBox1;
let openedBox2;
let openedBox3;
let openedBox4;
let openedBox5;
let openedBox6;
let openedFlag1;
let openedFlag2;
let openedFlag3;
let openedFlag4;
let openedFlag5;
let openedFlag6;

const isTajMahal = (box) => {
  if (box.src === tajMahal) {
    return true;
  } else {
    return false;
  }
}

const isClicked = box => {
  if (box.src === resetBox) {
    return false;
  } else {
    return true;
  }
}

const openedBox = (box) => {
  numClosedBox--;
  if (numClosedBox === 0) {
    gameOver('win');
  } else if (isTajMahal(box)) {
    gameOver('lose');
  }
}

const randomOpenedBox = () => {
  const randomBox = Math.floor(Math.random() * randomBox);
    if (randomBox === 0) {
      openedBox1 = piza;
      openedBox2 = machuPichu;
      openedBox3 = petra
      openedBox4 = tajMahal;
      openedBox5 = champ;
      openedBox6 = stonhenge;
      openedflag1 = italy;
      openedflag2 = peru;
      openedFlag3 = jordan;
      openedFlag4 = india;
      openedFlag5 = france;
      openedFlag6 = uk;
    } else if (randomBox === 1) {
      openedBox3 = piza;
      openedBox2 = machuPichu;
      openedBox1 = petra
      openedBox6 = tajMahal;
      openedBox5 = champ;
      openedBox4 = stonhenge;
      openedflag2 = italy;
      openedflag1 = peru;
      openedFlag3 = jordan;
      openedFlag5 = india;
      openedFlag4 = france;
      openedFlag6 = uk;
    } else if (randomBox === 2) {
      openedBox2 = piza;
      openedBox1 = machuPichu;
      openedBox3 = petra
      openedBox5 = tajMahal;
      openedBox4 = champ;
      openedBox6 = stonhenge;
      openedflag1 = italy;
      openedflag3 = peru;
      openedFlag2 = jordan;
      openedFlag4 = india;
      openedFlag6 = france;
      openedFlag5 = uk;
    } else if (randomBox === 3) {
      openedBox6 = piza;
      openedBox5 = machuPichu;
      openedBox4 = petra
      openedBox3 = tajMahal;
      openedBox2 = champ;
      openedBox1 = stonhenge;
      openedflag6 = italy;
      openedflag5 = peru;
      openedFlag4 = jordan;
      openedFlag3 = india;
      openedFlag2 = france;
      openedFlag1 = uk;
    } else if (randomBox === 4) {
      openedBox1 = piza;
      openedBox3 = machuPichu;
      openedBox2 = petra
      openedBox4 = tajMahal;
      openedBox6 = champ;
      openedBox5 = stonhenge;
      openedflag3 = italy;
      openedflag2 = peru;
      openedFlag1 = jordan;
      openedFlag6 = india;
      openedFlag5 = france;
      openedFlag4 = uk;
    } else { (randomBox === 5) 
      openedBox2 = piza;
      openedBox3 = machuPichu;
      openedBox1 = petra
      openedBox5 = tajMahal;
      openedBox6 = champ;
      openedBox4 = stonhenge;
      openedflag1 = italy;
      openedflag2 = peru;
      openedFlag3 = jordan;
      openedFlag4 = india;
      openedFlag5 = france;
      openedFlag6 = uk;
    }
}

boxImage1.onclick = () => {
  if (currentlyPlaying) {
    boxImage1.src = openedBox1;
    openedBox(dadu1);
  }
}

boxImage2.onclick = () => {
  if (currentlyPlaying) {
    boxImage2.src = openedBox2;
    openedBox(dadu2);
  }
}

boxImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(boxImage3)) {
    boxImage3.src = openedBox3;
    openedBox(dadu3);
  }
}

boxImage4.onclick = () => {
  if (currentlyPlaying && !isClicked(boxImage4)) {
    boxImage4.src = openedBox4;
    openedBox(dadu4);
  }
}

boxImage5.onclick = () => {
  if (currentlyPlaying && !isClicked(boxImage5)) {
    boxImage5.src = openedBox5;
    openedBox(dadu5);
  }
}

boxImage6.onclick = () => {
  if (currentlyPlaying && !isClicked(boxImage6)) {
    boxImage6.src = openedBox6;
    openedBox(dadu6);
  }
}

// Add flag below

flag1.onclick = () => {
  if (currentlyPlaying) {
    flag1.src = openedFlag1;
    openedBox(flag1);
  }
}

flag2.onclick = () => {
  if (currentlyPlaying && !isClicked(flag2)) {
    flag2.src = openedFlag2;
    openedBox(flag2);
  }
}

flag3.onclick = () => {
  if (currentlyPlaying && !isClicked(flag3)) {
    flag3.src = openedFlag3;
    openedBox(flag3);
  }
}

flag4.onclick = () => {
  if (currentlyPlaying && !isClicked(flag4)) {
    flag4.src = openedFlag4;
    openedBox(flag4);
  }
}

flag5.onclick = () => {
  if (currentlyPlaying && !isClicked(flag5)) {
    flag5.src = openedFlag5;
    openedBox(flag5);
  }
}

flag6.onclick = () => {
  if (currentlyPlaying && !isClicked(flag6)) {
    flag6.src = openedFlag6;
    openedBox(flag6);
  }
}

startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
}

const startRound = () => {
  openedBox1.src = resetBox;
  openedBox2.src = resetBox;
  openedBox3.src = resetBox;
  openedBox4.src = resetBox;
  openedBox5.src = resetBox;
  openedBox6.src = resetBox;
  openedflag1.src = resetBox;
  openedflag2.src = resetBox;
  openedFlag3.src = resetBox;
  openedFlag4.src = resetBox;
  openedFlag5.src = resetBox;
  openedFlag6.src = resetBox;
  numClosedBox = 12;
  currentlyPlaying = true;
  startButton.innerHTML = 'Open the Box';
  randomOpenedBox();
}
startRound();

const gameOver = status => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}