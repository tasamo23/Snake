canvas.requestFullscreen = canvas.requestFullscreen || canvas.webkitRequestFullscreen || canvas.mozRequestFullscreen || canvas.msRequestFullscreen;
document.exitFullscreen = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;


keyPress = (e) => {



}
document.addEventListener('keypress', keyPress);
dblClick = (e) => {

  if (!document.fullscreenElement)
    canvas.requestFullscreen();
  else
    document.exitFullscreen();


}
document.addEventListener('dblclick', dblClick)