function checkColor() {
  let first = document.getElementById('firstInput').value;
  let second = document.getElementById('secondInput').value;
  // let all = first + second;

  if(first == second && first + second != ''){
    document.getElementById('firstInput').style.border = document.getElementById('secondInput').style.border = '1px solid green';
  }else{
    document.getElementById('firstInput').style.border = document.getElementById('secondInput').style.border = '1px solid red';
  }
}
