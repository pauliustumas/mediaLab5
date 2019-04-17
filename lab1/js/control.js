var player = videojs('my_video_1');
    function play() { 
    player.play();
    } 
    function pause() {
      player.pause();
    }
    function stop(){
      player.currentTime(0);
      player.pause();
    }
