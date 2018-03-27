function drag(id) {
    var obj = document.getElementById(id);
    var disX = 0;
    var disY = 0;
    obj.onmousedown = function (e) {
        disX = e.clientX - obj.offsetWidth;
        disX = e.clientY - obj.offsetHeight;
        document.onmousemove = function () {

        }
    }
}
