function drag(id) {
    var obj = document.getElementById(id);
    var disX = 0;
    var dixY = 0;
    obj.onmousedown = function (e) {
        disX = e.pageX - obj.offsetWidth;
        disY = e.pageY - obj.offsetHeight;
    }
}
