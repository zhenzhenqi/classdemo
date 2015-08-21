console.log("contact.js is loaded!");
var img;
var birds = [];
var birdNumber = 50;

function setup() {
    var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent("contact-animation");

    img = loadImage("img/cloud.png");

    for (var i = 0; i < birdNumber; i++) {
        birds.push(new Bird(random(0, window.innerWidth), random(0, window.innerHeight)));
    }
}


function draw() {
    fill(255, 255, 255, 5);
    rect(0, 0, window.innerWidth, window.innerHeight);
    
    var mousePos =createVector(mouseX, mouseY);
    
    for (var i = 0; i < birdNumber; i++) {
        birds[i].seek(mousePos);
        birds[i].update();
        birds[i].display();
    };
}

//bird class, based on which the bird object is casted
function Bird(x, y) {
    
    //characters of a basic bird
    this.location = createVector(x, y);
    this.velocity = createVector(-2, -2);
    this.acceleration = createVector(0, 0);
    this.r = 1;
    this.maxforce = random(0.0001, 0.01);
    this.maxspeed = random(0.5, 1);

    //behaviors of a basic bird
    this.update = function () {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxspeed);
        this.location.add(this.velocity);
    }

    this.seek = function (target) {
        //define the general direction towards which the bird should be flying
        var desired = p5.Vector.sub(target, this.location);
        //reduce the length of the direction to 1, regardless of how far the target is
        desired.normalize();
        desired.mult(this.maxspeed);

        var steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxforce);
        this.acceleration.add(steer);
    }

    this.display = function () {
        image(img, this.location.x, this.location.y);
    }

}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}