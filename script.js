function screen(val) {
    document.getElementById("box").value = val;
  }
  function myFunction(val) {
    document.getElementById("box").value += val;
  }
  function solve() {
    try {
      screen(eval(document.getElementById("box").value));
    } catch (e) {
      screen("Error       ");
    }
  }
  function clearBlock() {
    document.getElementById("box").value = "";
  }
  function deleteBlock() {
    var valueNeeded = document.getElementById("box").value;
    var finalValueNeeded = valueNeeded.substr(0, valueNeeded.length - 1);
    document.getElementById("box").value = finalValueNeeded;
  }