const medias = {
  audio : false,
  video : true
};
const video = document.getElementById("video");
const promise = navigator.mediaDevices.getUserMedia(medias);

promise.then(successCallback)
       .then(errorCallback);

function successCallback(stream) {
  video.srcObject = stream;
};

function errorCallback(err) {
  alert(err);
};

// 保存ボタン
var button = document.getElementById('button');
// 画像を表示する要素
var gallary = document.getElementById('gallary');
 
function displaySnapshot() {
  var snapshot = new Image();
 
  snapshot.src = canvas.toDataURL('image/png');
    snapshot.onload = function(){
      snapshot.width = snapshot.width / 2;
      snapshot.height = snapshot.height / 2;
      gallary.appendChild(snapshot);
    }
}
 
// 保存ボタンを押したら実行
button.addEventListener('click', displaySnapshot);