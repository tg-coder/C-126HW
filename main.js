scoreLeftWrist = 0;
left_wrist_X = 0;
left_wrist_Y = 0;
right_wrist_X = 0;
right_wrist_Y = 0;
song_1 = "";
song_2 = "";
scoreRightWrist = 0;
song_status = "";
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
    fill(" #d6ecef");
    stroke("#008080");
    if(scoreLeftWrist>0.2)
    {
    circle(left_wrist_x, left_wrist_y, 20);
    InNumberleftwristy = Number(left_wrist_y);
    remove_decimals = floor(InNumberleftwristy);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = "+volume;
    song.setVolume(volume);
    stroke("#008080");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        scoreLeftWrist = results[0];
        left_wrist_X = results[0].pose.leftWrist.X;
        left_wrist_Y = results[0].pose.leftWrist.Y;
        console.log("Left wrist x = " + left_wrist_X +"Left wrist y = " +left_wrist_Y);
        right_wrist_X = results[0].pose.rightWrist.X;
        right_wrist_Y = results[0].pose.rightWrist.Y;
        console.log("Right wrist x = " + right_wrist_X +"Right wrist y = " +right_wrist_Y);
    }
}