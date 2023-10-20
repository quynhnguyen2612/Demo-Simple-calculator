let view = document.getElementById("view");
function number(value) {
    view.value += value;
}
function result() {
    let result = eval(view.value);
    view.value = result;
}
function erase() {
    view.value="";
}