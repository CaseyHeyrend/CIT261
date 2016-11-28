 function toggleClass(elem, cls) {
    if (elem.classList.contains(cls)) {
        elem.classList.remove(cls);
    } else {
        elem.classList.add(cls);
    }
}

document.getElementById("purple_box_button").onclick = function() {
    var purpleBox = document.getElementById("purple_box");
    toggleClass(purpleBox, "change_box");
};
