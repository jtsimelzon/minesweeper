var mineList = []
var board = []

function chooseMines() {
  var mineXPos = Math.floor(Math.random() * 10) + 1;
  var mineYPos = Math.floor(Math.random() * 10) + 1;
  var mineID = `${mineXPos}${"." + mineYPos}`
  return mineID
}

for (var i = 0; i < 20; i++) {
  var minePosReturn = chooseMines()
  if (mineList.includes(minePosReturn) === false) {
    mineList.push(minePosReturn)
  } else {
    i-=1
  }
  
}

console.log(mineList)

for (var i = 0; i < 100; i++) { // makes a board with buttons 
  let btn = document.createElement("button");
  let yPos = Math.floor((i / 10) + 1)
  let xPos = (i % 10) + 1
  btn.id = `button${xPos + "." + yPos}`
  btn.innerHTML = "";
  document.getElementById("board").appendChild(btn);
  
  var touchedMines = minesTouching(xPos, yPos)
  board.push(touchedMines)

  btn.onclick = function(event) {
    var clickedPos = `${xPos + "." + yPos}` 
    var buttonIndexTest = convertIndex(xPos, yPos)
    alert(buttonIndexTest) //this now correctly converts the button's id into the number 
    var mineHit = mineList.includes(clickedPos);
    if (mineHit) {
      btn.style.backgroundColor = 'red'
    } 
    else {
      var touchedMines = minesTouching(xPos, yPos)
      btn.innerHTML = touchedMines;
      btn.style.backgroundColor = '#D2B48C'
      if (touchedMines === 0) {
        btn.innerHTML = "";
      }
      if (touchedMines === 1) {
        event.target.style.color = 'blue'
      }
      if (touchedMines === 2) {
        event.target.style.color = 'green'
      }
      if (touchedMines === 3) {
        event.target.style.color = 'red'
      }
      if (touchedMines === 4) {
        event.target.style.color = 'purple'
      }
      if (touchedMines === 5) {
        event.target.style.color = 'orange'
      }
    }
  }
}


function convertIndex (xPos, yPos) {
  if (yPos > 1) {
    var buttonIndex = (yPos - 1) * 10 + xPos
  } else {
    var buttonIndex = xPos
  }
  return buttonIndex
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
