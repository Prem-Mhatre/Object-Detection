img = "";
status = "";
function preload(){
    img = loadImage("sofa.png");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    document.getElementById("status").innerHTML = "Status: Detecting Objects"; 
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
}

function modelLoaded(){
    console.log("cocossd model is loaded");
    status = true;
    object_detector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(img, 0, 0, 640, 420);
}