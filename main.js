// let circle1 = new Circle(500,500,100)
// document.write(circle1.createCircle());
// let circle2 = new Circle(200,500,100)
// document.write(circle2.createCircle());
let circle1 = new Circle();
for (let i=0;i<20;i++) {
    let x = Math.random()*window.innerWidth;
    let y = Math.random()*window.innerHeight;
    let radius = Math.floor(Math.random() * 80);
    circle1.x = x;
    circle1.y = y;
    circle1.radius = radius;
    circle1.setColor();
    circle1.createCircle();
}

