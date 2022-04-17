var mineList = []

function chooseMines() {
  var mineXPos = Math.floor(Math.random() * 10) + 1;
  var mineYPos = Math.floor(Math.random() * 10) + 1;
  var mineID = `${mineXPos}${"." + mineYPos}`
  return mineID
}

for (var i = 0; i < 15; i++) {
  var minePosReturn = chooseMines()
  mineList.push(minePosReturn)
}

console.log(mineList)


for (var i = 0; i < 100; i++) { // makes a board with buttons 
  let btn = document.createElement("button");
  let yPos = Math.floor((i / 10) + 1)
  let xPos = (i % 10) + 1
  btn.id = `button${xPos + "." + yPos}`
  btn.innerHTML = "";
  document.getElementById("board").appendChild(btn);
  
  btn.onclick = function() {
    var clickedPos = `${xPos + "." + yPos}` 
    var mineHit = mineList.includes(clickedPos);

    if (mineHit) {
      btn.style.backgroundColor = 'red'
    } else {
      btn.innerHTML = minesTouching(xPos, yPos);
      btn.style.backgroundColor = 'blue'
    }
  }
}


function minesTouching (xPos, yPos) {
  let numMinesTouching = 0
  
  var mineTouch1 = mineList.includes(`${(xPos - 1) + "." + (yPos - 1)}`); // top left corner
  if (mineTouch1) {
    numMinesTouching+=1
  }
  var mineTouch2 = mineList.includes(`${(xPos) + "." + (yPos - 1)}`); // up 
  if (mineTouch2) {
    numMinesTouching+=1
  }
  var mineTouch3 = mineList.includes(`${(xPos + 1) + "." + (yPos - 1)}`); // top right 
  if (mineTouch3) {
    numMinesTouching+=1
  }
  var mineTouch4 = mineList.includes(`${(xPos - 1) + "." + (yPos)}`); // left 
  if (mineTouch4) {
    numMinesTouching+=1
  }
  var mineTouch5 = mineList.includes(`${(xPos + 1) + "." + (yPos)}`); // right 
  if (mineTouch5) {
    numMinesTouching+=1
  }
  var mineTouch6 = mineList.includes(`${(xPos - 1) + "." + (yPos + 1)}`); // bottom left
  if (mineTouch6) {
    numMinesTouching+=1
  }
  var mineTouch7 = mineList.includes(`${(xPos) + "." + (yPos + 1)}`); // down
  if (mineTouch7) {
    numMinesTouching+=1
  }
  var mineTouch8 = mineList.includes(`${(xPos + 1) + "." + (yPos + 1)}`); // bottom right
  if (mineTouch8) {
    numMinesTouching+=1
  }
  return numMinesTouching
}
