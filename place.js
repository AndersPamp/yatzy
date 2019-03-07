function Count(array, value) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].Face === value) {
      counter++;
    }
  }
  return counter;
}
function PlaceUpper(id, nr) {
  let sum = 0;
  for (let i = 0; i < dice.length; i++) {
    if (dice[i].Face === nr) {
      sum += nr;
    }
  }
  document.getElementById (id).innerHTML = sum.toString ();
}
function Place1p(id) {
  if (Count (dice, 6) >= 2) {
    document.getElementById (id).innerHTML = 12;
  } else if (Count (dice, 5) >= 2) {
    document.getElementById (id).innerHTML = 10;
  } else if (Count (dice, 4) >= 2) {
    document.getElementById (id).innerHTML = 8;
  } else if (Count (dice, 3) >= 2) {
    document.getElementById (id).innerHTML = 6;
  } else if (Count (dice, 2) >= 2) {
    document.getElementById (id).innerHTML = 4;
  } else if (Count (dice, 1) >= 2) {
    document.getElementById (id).innerHTML = 2;
  } else {
    document.getElementById (id).innerHTML = 0;
  }
}
function Place2p(id) {
  let sum = 0;
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < dice.length; i++) {
    if (Count (dice, i + 1) === 2 || Count (dice, i + 1) === 3) {
      p1 = 2 * (dice[i].Face);
      var q = i;
    } else if (Count (dice, i) === 4) {
      p1 = 2 * (dice[i].Face);
      p2 = 2 * (dice[i].Face);
    }
  }
  for (let i = 1; i <= 6; i++) {
    if ((Count (dice, i + 1) === 2 || Count (dice, i + 1) === 3) && i !== q) {
      p2 = 2 * (dice[i].Face);
    }
  }
  if (p1 === 0 || p2 === 0) {
    sum = 0;
  } else {
    sum = p1 + p2;
  }
  document.getElementById (id).innerHTML = sum;
}
function Place3s(id) {
  if (Count (dice, 1) >= 3) {
    document.getElementById (id).innerHTML = 3;
  } else if (Count (dice, 2) >= 3) {
    document.getElementById (id).innerHTML = 6;
  } else if (Count (dice, 3) >= 3) {
    document.getElementById (id).innerHTML = 9;
  } else if (Count (dice, 4) >= 3) {
    document.getElementById (id).innerHTML = 12;
  } else if (Count (dice, 5) >= 3) {
    document.getElementById (id).innerHTML = 15;
  } else if (Count (dice, 6) >= 3) {
    document.getElementById (id).innerHTML = 18;
  } else {
    document.getElementById (id).innerHTML = 0;
  }
}
function Place4s(id) {
  if (Count (dice, 1) >= 4) {
    document.getElementById (id).innerHTML = 4;
  } else if (Count (dice, 2) >= 4) {
    document.getElementById (id).innerHTML = 8;
  } else if (Count (dice, 3) >= 4) {
    document.getElementById (id).innerHTML = 12;
  } else if (Count (dice, 4) >= 4) {
    document.getElementById (id).innerHTML = 16;
  } else if (Count (dice, 5) >= 4) {
    document.getElementById (id).innerHTML = 20;
  } else if (Count (dice, 6) >= 4) {
    document.getElementById (id).innerHTML = 24;
  } else {
    document.getElementById (id).innerHTML = 0;
  }
}
function PlaceSS(id) {
  if (Count (dice, 1) === 1 && Count (dice, 2) === 1 && Count (dice, 3) === 1 &&
      Count (dice, 4) === 1 && Count (dice, 5) === 1) {
    document.getElementById (id).innerHTML = 15;
  } else {
    document.getElementById (id).innerHTML = 0;
  }
}
function PlaceLS(id) {
  if (Count (dice, 2) === 1 && Count (dice, 3) === 1 && Count (dice, 4) === 1 &&
      Count (dice, 5) === 1 && Count (dice, 6) === 1) {
    document.getElementById (id).innerHTML = 20;
  } else {
    document.getElementById (id).innerHTML = 0;
  }
}
function PlaceFH(id) {
  let sum = 0;
  if ((Count (dice, 1) === 3 || Count (dice, 2) === 3 || Count (dice, 3) === 3 ||
      Count (dice, 4) === 3 || Count (dice, 5) === 3 || Count (dice, 6) === 3) &&
      (Count (dice, 1) === 2 || Count (dice, 2) === 2 || Count (dice, 3) === 2 ||
          Count (dice, 4) === 2 || Count (dice, 5) === 2 || Count (dice, 6) === 2)) {
    for (let i = 0; i < dice.length; i++) {
      sum += dice[i].Face;
    }
    document.getElementById (id).innerHTML = sum;
  } else {
    document.getElementById (id).innerHTML = 0;
  }
}
function PlaceCH(id) {
  let sum = 0;
  for (let i = 0; i < dice.length; i++) {
    sum += dice[i].Face;
  }
  document.getElementById (id).innerHTML = sum.toString ();
}
function PlaceY(id) {
  if (Count (dice, 1) === 5) {
    document.getElementById (id).innerHTML = 50;
    alert('YATZEEEEEEE');
  } else if (Count (dice, 2) === 5) {
    document.getElementById (id).innerHTML = 50;
    alert('YATZEEEEEEE');
  } else if (Count (dice, 3) === 5) {
    document.getElementById (id).innerHTML = 50;
    alert('YATZEEEEEEE');
  } else if (Count (dice, 4) === 5) {
    document.getElementById (id).innerHTML = 50;
    alert('YATZEEEEEEE');
  } else if (Count (dice, 5) === 5) {
    document.getElementById (id).innerHTML = 50;
    alert('YATZEEEEEEE');
  } else if (Count (dice, 6) === 5) {
    document.getElementById (id).innerHTML = 50;
    alert('YATZEEEEEEE');
  } else {
    document.getElementById (id).innerHTML = 0;
  }
}
