// /* Add any JavaScript you need to this file. */

let maleflag = 0;
let femaleflag = 0;

function appleFunc() {
  femaleflag = 1;
  maleflag = 1;

  document.getElementById('app1').style.display = 'inline-block';
  document.getElementById('app2').style.display = 'inline-block';
  document.getElementById('app3').style.display = 'inline-block';
  document.getElementById('app4').style.display = 'inline-block';

  document.getElementById('fit1').style.display = 'none';
  document.getElementById('fit2').style.display = 'none';
  document.getElementById('fit3').style.display = 'none';
  document.getElementById('fit4').style.display = 'none';
}

function fitbitFunc() {
  maleflag = 2;
  femaleflag = 2;

  document.getElementById('app1').style.display = 'none';
  document.getElementById('app2').style.display = 'none';
  document.getElementById('app3').style.display = 'none';
  document.getElementById('app4').style.display = 'none';

  document.getElementById('fit1').style.display = 'inline-block';
  document.getElementById('fit2').style.display = 'inline-block';
  document.getElementById('fit3').style.display = 'inline-block';
  document.getElementById('fit4').style.display = 'inline-block';
}

function maleFunc() {
  if (maleflag === 0) {
    document.getElementById('app1').style.display = 'none';
    document.getElementById('app2').style.display = 'inline-block';
    document.getElementById('app3').style.display = 'none';
    document.getElementById('app4').style.display = 'inline-block';
    document.getElementById('fit1').style.display = 'inline-block';
    document.getElementById('fit2').style.display = 'inline-block';
    document.getElementById('fit3').style.display = 'none';
    document.getElementById('fit4').style.display = 'none';
  } else if (maleflag === 1) {
    maleflag = 0;
    document.getElementById('app1').style.display = 'none';
    document.getElementById('app2').style.display = 'inline-block';
    document.getElementById('app3').style.display = 'none';
    document.getElementById('app4').style.display = 'inline-block';
  } else if (maleflag === 2) {
    document.getElementById('fit1').style.display = 'inline-block';
    document.getElementById('fit2').style.display = 'inline-block';
    document.getElementById('fit3').style.display = 'none';
    document.getElementById('fit4').style.display = 'none';
  }
}

function femaleFunc() {
  if (femaleflag === 0) {
    document.getElementById('app1').style.display = 'inline-block';
    document.getElementById('app2').style.display = 'none';
    document.getElementById('app3').style.display = 'inline-block';
    document.getElementById('app4').style.display = 'none';
    document.getElementById('fit1').style.display = 'none';
    document.getElementById('fit2').style.display = 'none';
    document.getElementById('fit3').style.display = 'inline-block';
    document.getElementById('fit4').style.display = 'inline-block';
  } else if (femaleflag === 1) {
    femaleflag = 0;
    document.getElementById('app1').style.display = 'inline-block';
    document.getElementById('app2').style.display = 'none';
    document.getElementById('app3').style.display = 'inline-block';
    document.getElementById('app4').style.display = 'none';
  } else if (femaleflag === 2) {
    document.getElementById('fit1').style.display = 'none';
    document.getElementById('fit2').style.display = 'none';
    document.getElementById('fit3').style.display = 'inline-block';
    document.getElementById('fit4').style.display = 'inline-block';
  }
}

function allproducts() {
  document.getElementById('app1').style.display = 'inline-block';
  document.getElementById('app2').style.display = 'inline-block';
  document.getElementById('app3').style.display = 'inline-block';
  document.getElementById('app4').style.display = 'inline-block';
  document.getElementById('fit1').style.display = 'inline-block';
  document.getElementById('fit2').style.display = 'inline-block';
  document.getElementById('fit3').style.display = 'inline-block';
  document.getElementById('fit4').style.display = 'inline-block';
}

// window.onload = function() {
//   document.getElementById('menuBut').onmouseover = function() {
//     document.getElementById('centerMenu').style.visibility = 'visible';
//   };
//   document.getElementById('menuBut').onmouseout = function() {
//     document.getElementById('centerMenu').style.visibility = 'hidden';
//   };
// };
