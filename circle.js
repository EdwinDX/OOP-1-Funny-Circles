class Circle {
    x;
    y;
    radius;
    color;
    constructor(x,y,r,clr) {
        this.x = x;
        this.y = y;
        this.radius = r;
        this.color = clr;
    }
    setColor() {
        let red = circle1.getRandomHex();
        let green = circle1.getRandomHex();
        let blue = circle1.getRandomHex();
        this.color= "rgb(" + red + "," + blue + "," + green +")";
    }
    createCircle() {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    getRandomHex(){
        return Math.floor(Math.random()*255);
    }
}