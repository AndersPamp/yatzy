function Die(face, hold) {
  this.Face = face;
  this.Hold = hold;
}
var dice = [];
let counter = 0;
function RollMain() {
  if (counter === 0) {
    Roll1 ();
    counter += 1;
    document.getElementById ('roll-counter').innerHTML = counter.toString ();
    // document.getElementById ('roll-dice').innerHTML = 'ROLL DICE';
  } else if (counter === 1) {
    Roll2 ();
    counter += 1;
    document.getElementById ('roll-counter').innerHTML = counter.toString ();
  } else if (counter === 2) {
    Roll2 ();
    counter += 1;
    document.getElementById ('roll-counter').innerHTML = counter.toString ();
  } else if (counter === 3) {
    document.getElementById ('roll-counter').innerHTML = counter.toString ();
    ResetDice ();
    // document.getElementById ('roll-dice').innerHTML = 'NEXT PLAYER';
  }
}
function Roll1() {
  let d1 = new Die (Math.floor (Math.random () * 6) + 1, false);
  let d2 = new Die (Math.floor (Math.random () * 6) + 1, false);
  let d3 = new Die (Math.floor (Math.random () * 6) + 1, false);
  let d4 = new Die (Math.floor (Math.random () * 6) + 1, false);
  let d5 = new Die (Math.floor (Math.random () * 6) + 1, false);
  dice.push (d1, d2, d3, d4, d5);
  document.getElementById ('d1').innerHTML = d1.Face;
  document.getElementById ('d2').innerHTML = d2.Face;
  document.getElementById ('d3').innerHTML = d3.Face;
  document.getElementById ('d4').innerHTML = d4.Face;
  document.getElementById ('d5').innerHTML = d5.Face;
  for (let i = 0; i < dice.length; i++) {
    // let id = 'di' + i;
    let img1 = 'Images/dice-1.jpg';
    let img2 = 'Images/dice-2.jpg';
    let img3 = 'Images/dice-3.jpg';
    let img4 = 'Images/dice-4.jpg';
    let img5 = 'Images/dice-5.jpg';
    let img6 = 'Images/dice-6.jpg';
    if (dice[i].Face === 1) {
      let di1 = document.createElement ('img');
      di1.src = img1;
      document.getElementById('td'+i).appendChild(di1);
    } else if (dice[i].Face === 2) {
      let di2 = document.createElement ('img');
      di2.src = img2;
      document.getElementById('td'+i).appendChild(di2);
    } else if (dice[i].Face === 3) {
      let di3 = document.createElement ('img');
      di3.src = img3;
      document.getElementById('td'+i).appendChild(di3);
    } else if (dice[i].Face === 4) {
      let di4 = document.createElement ('img');
      di4.src = img4;
      document.getElementById('td'+i).appendChild(di4);
    } else if (dice[i].Face === 5) {
      let di5 = document.createElement ('img');
      di5.src = img5;
      document.getElementById('td'+i).appendChild(di5);
    } else if (dice[i].Face === 6) {
      let di6 = document.createElement ('img');
      di6.src = img6;
      document.getElementById('td'+i).appendChild(di6);
    }
  }
}
function Roll2() {
  let resetDice=document.getElementsByTagName('img');
  for (let i=0;i<resetDice.length;i++){
    resetDice[i].removeAttribute('src');
  }
  dice[0].Hold = document.getElementById ('c1').checked;
  dice[1].Hold = document.getElementById ('c2').checked;
  dice[2].Hold = document.getElementById ('c3').checked;
  dice[3].Hold = document.getElementById ('c4').checked;
  dice[4].Hold = document.getElementById ('c5').checked;
  for (let i = 0; i < dice.length; i++) {
    if (dice[i].Hold === false) {
      dice[i].Face = Math.floor (Math.random () * 6) + 1;
    }
  }
  document.getElementById ('d1').innerHTML = dice[0].Face;
  document.getElementById ('d2').innerHTML = dice[1].Face;
  document.getElementById ('d3').innerHTML = dice[2].Face;
  document.getElementById ('d4').innerHTML = dice[3].Face;
  document.getElementById ('d5').innerHTML = dice[4].Face;
  for (let i = 0; i < dice.length; i++) {
    // let id = 'di' + i;
    let img1 = 'Images/dice-1.jpg';
    let img2 = 'Images/dice-2.jpg';
    let img3 = 'Images/dice-3.jpg';
    let img4 = 'Images/dice-4.jpg';
    let img5 = 'Images/dice-5.jpg';
    let img6 = 'Images/dice-6.jpg';
    if (dice[i].Face === 1) {
      let di1 = document.createElement ('img');
      di1.src = img1;
      document.getElementById('td'+i).appendChild(di1);
    } else if (dice[i].Face === 2) {
      let di2 = document.createElement ('img');
      di2.src = img2;
      document.getElementById('td'+i).appendChild(di2);
    } else if (dice[i].Face === 3) {
      let di3 = document.createElement ('img');
      di3.src = img3;
      document.getElementById('td'+i).appendChild(di3);
    } else if (dice[i].Face === 4) {
      let di4 = document.createElement ('img');
      di4.src = img4;
      document.getElementById('td'+i).appendChild(di4);
    } else if (dice[i].Face === 5) {
      let di5 = document.createElement ('img');
      di5.src = img5;
      document.getElementById('td'+i).appendChild(di5);
    } else if (dice[i].Face === 6) {
      let di6 = document.createElement ('img');
      di6.src = img6;
      document.getElementById('td'+i).appendChild(di6);
    }
  }
}
for (let i = 0; i < dice.length; i++) {
  // let id = 'di' + i;
  let img1 = 'Images/dice-1.jpg';
  let img2 = 'Images/dice-2.jpg';
  let img3 = 'Images/dice-3.jpg';
  let img4 = 'Images/dice-4.jpg';
  let img5 = 'Images/dice-5.jpg';
  let img6 = 'Images/dice-6.jpg';
  if (dice[i].Face === 1) {
    let di1 = document.createElement ('img');
    di1.src = img1;
    document.getElementById('td'+i).appendChild(di1);
  } else if (dice[i].Face === 2) {
    let di2 = document.createElement ('img');
    di2.src = img2;
    document.getElementById('td'+i).appendChild(di2);
  } else if (dice[i].Face === 3) {
    let di3 = document.createElement ('img');
    di3.src = img3;
    document.getElementById('td'+i).appendChild(di3);
  } else if (dice[i].Face === 4) {
    let di4 = document.createElement ('img');
    di4.src = img4;
    document.getElementById('td'+i).appendChild(di4);
  } else if (dice[i].Face === 5) {
    let di5 = document.createElement ('img');
    di5.src = img5;
    document.getElementById('td'+i).appendChild(di5);
  } else if (dice[i].Face === 6) {
    let di6 = document.createElement ('img');
    di6.src = img6;
    document.getElementById('td'+i).appendChild(di6);
  }
}
function ResetDice() {
  for (let i = 0; i < dice.length; i++) {
    dice[i].Hold = false;
  }
  for (let i = 0; i < dice.length; i++) {
    let die = 'd' + (i + 1);
    let check = 'c' + (i + 1);
    document.getElementById (die).innerHTML = '0';
    document.getElementById (check).checked = false;
  }
  let resetDice=document.getElementsByTagName('img');
  for (let i=0;i<resetDice.length;i++){
    resetDice[i].removeAttribute('src');
  }

  counter = 0;
  dice = [];
  document.getElementById ('roll-counter').innerHTML = '0';
}
function CheckSubTot() {
  let p1Array = document.getElementsByClassName ('p1-upper');
  let p2Array = document.getElementsByClassName ('p2-upper');
  let sp1 = 0;
  let sp2 = 0;
  let sumP1 = 0;
  let sumP2 = 0;
  for (let i = 0; i < p1Array.length; i++) {
    if (p1Array[i].innerHTML !== '') {
      sp1 = 1;
    }
  }
  for (let i = 0; i < p2Array.length; i++) {
    if (p2Array[i].innerHTML !== '') {
      sp2 = 1;
    }
  }
  if (sp1 !== 0 && sp2 !== 0) {
    for (let i = 0; i < p1Array.length; i++) {
      if (p1Array[i].innerHTML !== '') {
        sumP1 += parseInt (p1Array[i].innerHTML);
      }
    }
    document.getElementById ('t-p1-sum').innerHTML = sumP1.toString ();
    if (sumP1 >= 63) {
      document.getElementById ('t-p1-bonus').innerHTML = 50;
    } else {
      document.getElementById ('t-p1-bonus').innerHTML = 0;
    }
    for (let i = 0; i < p2Array.length; i++) {
      if (p2Array[i].innerHTML !== '') {
        sumP2 += parseInt (p2Array[i].innerHTML);
      }
    }
    document.getElementById ('t-p2-sum').innerHTML = sumP2.toString ();
    if (sumP2 >= 63) {
      document.getElementById ('t-p2-bonus').innerHTML = 50;
    } else {
      document.getElementById ('t-p2-bonus').innerHTML = 0;
    }
  }
}
function Total() {
  let p1Array = document.getElementsByClassName ('p1-col');
  let p2Array = document.getElementsByClassName ('p2-col');
  let sumP1 = 0;
  let sumP2 = 0;
  for (let i = 0; i < p1Array.length; i++) {
    // console.log(typeof (p1Array[i].value));
    if (p1Array[i].innerHTML !== '') {
      sumP1 += parseInt (p1Array[i].innerHTML);
    }
  }
  for (let i = 0; i < p2Array.length; i++) {
    if (p2Array[i].innerHTML !== '') {
      sumP2 += parseInt (p2Array[i].innerHTML);
    }
  }
  document.getElementById ('t-p1-tot').innerHTML = sumP1.toString ();
  document.getElementById ('t-p2-tot').innerHTML = sumP2.toString ();
}
function ClearTable() {
  let valuesP1 = document.getElementsByClassName ('p1-col');
  let valuesP2 = document.getElementsByClassName ('p2-col');
  let upperP1 = document.getElementsByClassName ('p1-upper');
  let upperP2 = document.getElementsByClassName ('p2-upper');
  for (let i = 0; i < valuesP1.length; i++) {
    valuesP1[i].innerHTML = "";
  }
  for (let i = 0; i < valuesP2.length; i++) {
    valuesP2[i].innerHTML = "";
  }
  for (let i = 0; i < upperP1.length; i++) {
    upperP1[i].innerHTML = "";
  }
  for (let i = 0; i < upperP2.length; i++) {
    upperP2[i].innerHTML = ""
  }
  document.getElementById ('t-p1-tot').innerHTML = "";
  document.getElementById ('t-p2-tot').innerHTML = "";
}