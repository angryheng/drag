function drag(id) {
    var obj = document.getElementById(id);
    var disX = 0;
    var disY = 0;
    obj.onmousedown = function (e) {
        disX = e.pageX - obj.offsetWidth;
        disY = e.pageY - obj.offsetHeight;
        document.onmousemove = function (e) {
            obj.style.left = e.pageX - disX + 'px';
            obj.style.top = e.pageY - disY + 'px';
        }
    }
}
