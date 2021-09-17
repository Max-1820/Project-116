mouthX=0;
mouthY=0;

function preload(){
clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}

function draw(){
image(video, 0, 0, 300, 300);
fill(255,0,0);
stroke(255,0,0);
image(clown_nose, mouthX, mouthY, 30, 30);
}

function take_snapshot(){
save('myFilterImage.png');  
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        mouthX =results[0].pose.nose.x-10;
        mouthY =results[0].pose.nose.y+10;
        console.log("mouth x =" + mouthY);
        console.log("mouth y =" + mouthY);
    }
}