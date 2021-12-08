
function preload(){

}
function setup(){
canvas= createCanvas(300,300);
canvas.center()
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet =ml5.poseNet(video.modelLoaded); 
poseNet.on('pose',gotPoses);
};

function take_snapshoot(){
    save("caputred_image.png");

}
function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    if ( results.lenght > 0){
        console.log(results);
        console.log("nose x =" + results[0].pose.x);
        console.log("nose y =" + results[0].pose.y);
    }
} 
function draw(){
    image(video,0,0,300,300);
    
    }