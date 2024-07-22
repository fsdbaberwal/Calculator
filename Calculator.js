function Solve(val) {
    var v = document.getElementById('txt');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('txt').value;
    var num2 = eval(num1);
    document.getElementById('txt').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('txt');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('txt');
    ev.value = ev.value.slice(0,-1);
 }