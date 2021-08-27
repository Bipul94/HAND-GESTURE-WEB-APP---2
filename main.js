Webcam.set({
    width :350,
    height:300,
    image_format:'png',
    png_quality:90
})

prediction_1 = "";
prediction_2 = "";
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aFXT-1dfW/model.json',modelLoaded);
console.log('ml5 version:', ml5.version);

function modelLoaded(){
    console.log('modelLoaded')
}

function speak(){
    var synth =window.speechSynthesis;
    speak_data_1= "The prediction is " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}