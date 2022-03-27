img = "";
objects = [];
status = "";

function preload() {
    img = loadImage('sleepingBabay.jpg');
}


function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}


function draw() {
    image(img, 0, 0, 380, 380);
    if (status != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + objects.length;


        }
    }
    r = random(255);
    g = random(255);
    b = random(255);
    fill(r, g, b);
    text("Baby 65%", 173, 35);
    noFill();
    stroke(r, g, b);
    rect(170, 20, 111, 200);
}