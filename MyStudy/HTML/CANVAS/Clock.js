var canvas = document.querySelector(".clock");
var ctx = canvas.getContext("2d");

window.onload = function () {

    // change the origin
    ctx.translate(150, 150);
    // rotate
    ctx.rotate(-90 * Math.PI / 180);
    // ctx.fillStyle = "#FF0000";
    ctx.lineWidth = 8;
    ctx.strokeStyle = "black";
    ctx.lineCap = "round";
    move();
    function move(){

        ctx.clearRect(-150, -150, 300, 300);
        // draw the circle plate
        ctx.save();
        // set the style for plate
        ctx.lineWidth = 14;
        ctx.strokeStyle = "#325FA2";
        //draw it
        ctx.beginPath();
        ctx.arc(0, 0, 140, 20*Math.PI/180, 340 * Math.PI / 180);
        ctx.stroke();
        ctx.restore();

        // draw them, length:20, margin: 20
        ctx.save();
        for (var i = 0; i < 60; i++) {
            //set the scales style
            //if it's long, for hour hand
            ctx.beginPath();
            if (i % 5 == 0) {
                ctx.lineWidth = 8;
                ctx.moveTo(100, 0);
            }
            else {
                ctx.lineWidth = 4;
                ctx.moveTo(117, 0);
            }
            ctx.lineTo(120, 0);
            ctx.rotate(6 * Math.PI / 180);
            ctx.stroke();
        }
        // ctx.strokeRect(10,10,29,29);
        ctx.restore();

        var time = new Date();
        var secs = time.getSeconds();
        var mins = time.getMinutes() + secs / 60;
        var hours = time.getHours() + mins / 60;

        //set the hour hand
        ctx.save();
        ctx.lineWidth = 14;
        ctx.rotate(hours * 30 * Math.PI / 180);
        ctx.beginPath(); //draw frame
        ctx.moveTo(-20, 0);
        ctx.lineTo(80, 0);
        ctx.stroke(); // draw
        ctx.restore();

        //set the min hand
        ctx.save();
        ctx.lineWidth = 10;
        ctx.rotate(mins * 6 * Math.PI / 180);
        ctx.beginPath(); //draw frame
        ctx.moveTo(-28, 0);
        ctx.lineTo(112, 0);
        ctx.stroke(); // draw
        ctx.restore();

        //set the sec hand
        ctx.save();
        ctx.strokeStyle = "#D40000";
        ctx.lineWidth = 6;
        ctx.rotate(secs * 6 * Math.PI / 180);
        ctx.beginPath(); //draw frame
        ctx.moveTo(-30, 0);
        ctx.lineTo(83, 0);
        ctx.stroke(); // draw


        //set the decoration of sec hand
        ctx.beginPath();
        ctx.arc(96, 0, 10, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = "#D40000";
        ctx.arc(0, 0, 10, 0, 2 * Math.PI);
        ctx.fill(); // draw
        ctx.restore();
    };

    setInterval(move, 1000);


}
