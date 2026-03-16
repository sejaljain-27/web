function display(val) {
  document.getElementById('result').value += val;
}

function solve() {
  let x = document.getElementById('result').value;
  try {
    let y = eval(x);
    document.getElementById('result').value = y;
  } catch (error) {
    document.getElementById('result').value = "Error";
  }
}

function clearScreen() {
  document.getElementById('result').value = '';
}
