left_wrist_X = 0;
left_wrist_Y = 0;
right_wrist_X = 0;
right_wrist_Y = 0;
song_1 = "";
song_2 = "";
function preload()
{
    song = loadSound("music.mp3");
}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("Model Loaded!");
}
function draw()
{
    image(video,0,0,600,500);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        left_wrist_X = results[0].pose.leftWrist.X;
        left_wrist_Y = results[0].pose.leftWrist.Y;
        console.log("Left wrist x = " + left_wrist_X +"Left wrist y = " +left_wrist_Y);
        right_wrist_X = results[0].pose.rightWrist.X;
        right_wrist_Y = results[0].pose.rightWrist.Y;
        console.log("Right wrist x = " + right_wrist_X +"Right wrist y = " +right_wrist_Y);
    }
}