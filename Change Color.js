 function toggleClass(elem, cls) {
    if (elem.classList.contains(cls)) {
        elem.classList.remove(cls);
    } else {
        elem.classList.add(cls);
    }
}

document.getElementById("purple_square_button").onclick = function() {
    var purpleSquare = document.getElementById("purple_square");
    toggleClass(purpleSquare, "change_square");
};
