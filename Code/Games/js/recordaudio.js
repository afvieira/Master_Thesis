/* Copyright 2013 Chris Wilson

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

var audioContext = new AudioContext();
var audioInput = null,
    realAudioInput = null,
    inputPoint = null,
    audioRecorder = null,
    palavra = '';

function saveAudio() {
    audioRecorder.exportWAV(doneEncoding);
    // could get mono instead by saying
    // audioRecorder.exportMonoWAV( doneEncoding );
}

function gotBuffers(buffers) {
    // the ONLY time gotBuffers is called is right after a new recording is completed - 
    // so here's where we should set up the download.
    audioRecorder.exportWAV(doneEncoding);
}

function getDateYYYYMMDD_HHMMSS() {
    var result;
    var today = new Date();

    var yyyy = today.getFullYear();
    var mm = today.getMonth() + 1; //January is 0!
    var dd = today.getDate();
    var hh = today.getHours();
    var min = today.getMinutes();
    var ss = today.getSeconds();

    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;
    if (hh < 10) hh = '0' + hh;
    if (min < 10) min = '0' + min;
    if (ss < 10) ss = '0' + ss;

    result = yyyy + mm + dd + '_' + hh + min + ss;
    return result;
}

function doneEncoding(blob) {
    var filename = palavra + "_" + getDateYYYYMMDD_HHMMSS() + ".wav";
    var url = (window.URL || window.webkitURL).createObjectURL(blob);

    UploadAudio(blob, filename);
    downloadURI(url, filename);
}

function downloadURI(url, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = url;
    link.click();
}

function UploadAudio(blob, filename) {
    var reader = new FileReader();
    // var studentNumber = document.getElementById("studentNumber");
    // var gameNumber = document.getElementById("gameNumber");

    reader.onload = function(event) {
        var fd = {};
        fd["fname"] = filename;
        fd["data"] = event.target.result;
        fd["studentNumber"] = "std"; //studentNumber.value;
        fd["gameNumber"] = "gameNmb"; //gameNumber.value;
        $.ajax({
            type: 'POST',
            url: 'http://46.101.2.128/tese/upload.php',
            data: fd,
            dataType: 'text'
        }).done(function(data) {
            console.log(data);
        });
    };
    reader.readAsDataURL(blob);
}

function toggleRecording(e, word) {
    if (e.classList.contains("recording")) {
        // stop recording
        audioRecorder.stop();
        e.classList.remove("recording");
        audioRecorder.getBuffers(gotBuffers);
    } else {
        // start recording
        if (!audioRecorder)
            return;
        palavra = word;
        e.classList.add("recording");
        audioRecorder.clear();
        audioRecorder.record();
    }
}

function convertToMono(input) {
    var splitter = audioContext.createChannelSplitter(2);
    var merger = audioContext.createChannelMerger(2);

    input.connect(splitter);
    splitter.connect(merger, 0, 0);
    splitter.connect(merger, 0, 1);
    return merger;
}

// function cancelAnalyserUpdates() {
//     window.cancelAnimationFrame(rafID);
//     rafID = null;
// }

// function updateAnalysers(time) {
//     if (!analyserContext) {
//         var canvas = document.getElementById("analyser");
//         canvasWidth = canvas.width;
//         canvasHeight = canvas.height;
//         analyserContext = canvas.getContext('2d');
//     }

//     // analyzer draw code here
//     {
//         var SPACING = 3;
//         var BAR_WIDTH = 2;
//         var numBars = Math.round(canvasWidth * 1.5 / SPACING);
//         var freqByteData = new Uint8Array(analyserNode.frequencyBinCount);

//         analyserNode.getByteFrequencyData(freqByteData);

//         analyserContext.clearRect(0, 0, canvasWidth, canvasHeight);
//         analyserContext.fillStyle = '#F6D565';
//         analyserContext.lineCap = 'round';
//         var multiplier = analyserNode.frequencyBinCount / numBars;

//         // Draw rectangle for each frequency bin.
//         for (var i = 0; i < numBars; ++i) {
//             var magnitude = 0;
//             var offset = Math.floor(i * multiplier);
//             // gotta sum/average the block, or we miss narrow-bandwidth spikes
//             for (var j = 0; j < multiplier; j++)
//                 magnitude += freqByteData[offset + j];
//             magnitude = magnitude / multiplier;
//             var magnitude2 = freqByteData[i * multiplier];
//             analyserContext.fillStyle = "hsl( " + Math.round((i * 360) / numBars) + ", 100%, 50%)";
//             analyserContext.fillRect(i * SPACING, canvasHeight, BAR_WIDTH, -magnitude);
//         }
//     }

//     rafID = window.requestAnimationFrame(updateAnalysers);
// }

function toggleMono() {
    if (audioInput != realAudioInput) {
        audioInput.disconnect();
        realAudioInput.disconnect();
        audioInput = realAudioInput;
    } else {
        realAudioInput.disconnect();
        audioInput = convertToMono(realAudioInput);
    }

    audioInput.connect(inputPoint);
}

function gotStream(stream) {
    inputPoint = audioContext.createGain();

    // Create an AudioNode from the stream.
    realAudioInput = audioContext.createMediaStreamSource(stream);
    audioInput = realAudioInput;
    audioInput.connect(inputPoint);

    //    audioInput = convertToMono( input );

    analyserNode = audioContext.createAnalyser();
    analyserNode.fftSize = 2048;
    inputPoint.connect(analyserNode);

    audioRecorder = new Recorder(inputPoint);

    zeroGain = audioContext.createGain();
    zeroGain.gain.value = 0.0;
    inputPoint.connect(zeroGain);
    zeroGain.connect(audioContext.destination);
    // updateAnalysers();
}

function initAudio() {
    if (!navigator.getUserMedia)
        navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    if (!navigator.cancelAnimationFrame)
        navigator.cancelAnimationFrame = navigator.webkitCancelAnimationFrame || navigator.mozCancelAnimationFrame;
    if (!navigator.requestAnimationFrame)
        navigator.requestAnimationFrame = navigator.webkitRequestAnimationFrame || navigator.mozRequestAnimationFrame;

    navigator.getUserMedia({
        "audio": {
            "mandatory": {
                "googEchoCancellation": "false",
                "googAutoGainControl": "false",
                "googNoiseSuppression": "false",
                "googHighpassFilter": "false"
            },
            "optional": []
        },
    }, gotStream, function(e) {
        alert('Error getting audio');
        console.log(e);
    });
}

window.addEventListener('load', initAudio);
