mouseEvent="empty";
var current_position_x,current_position_y,last_position_x,last_position_y;

canvas = document.getElementById("canvas_1");
context=canvas.getContext("2d");
// context.beginPath();
// context.strokeStyle="red";
// context.lineWidth=2;
// context.arc(500, 200, 50, 0, 360);
// context.stroke();
canvas.addEventListener("mousedown", my_onmousedown);
function my_onmousedown(e){
    mouseEvent="mousedown";
    console.log(mouseEvent);
}
canvas.addEventListener("mouseup", my_onmouseup);
function my_onmouseup(e){
    mouseEvent="mouseup";
    console.log(mouseEvent);
}
canvas.addEventListener("mouseleave", my_onmouseleave);
function my_onmouseleave(e){
    mouseEvent="mouseleave";
    console.log(mouseEvent);
}
canvas.addEventListener("mousemove", my_onmousemove);
function my_onmousemove(e){
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;
    console.log("current_position_x,y"+current_position_x+","+current_position_y);
    if (mouseEvent=="mousedown"){
        context.beginPath();
        context.strokeStyle="red";
        context.lineWidth=5;
        context.moveTo(last_position_x, last_position_y);
        context.lineTo(current_position_x, current_position_y);
        context.stroke();
    }
    last_position_x=current_position_x;
    last_position_y=current_position_y;
    console.log("last_position_x,y"+last_position_x+","+last_position_y);
}