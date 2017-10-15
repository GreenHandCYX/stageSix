var video = document.querySelector('video');
var playBtn = document.querySelector('.play-button');
var iconCircle = document.querySelector('.play-button i');
var sum = document.querySelector('.sum');
var progress = document.querySelector('.progress');
var progressbar = document.querySelector('.progress-bar');
var current = document.querySelector('.current');
var fullscreen = document.querySelector('.fullscreen');
var iconFullScreen = document.querySelector('.fullscreen i');
var zhezao = document.querySelector('.zhezao');
var zhezaoText = document.querySelector('.zhezao h4');
var zhezaoImg = document.querySelector('.zhezao img');
//1.视频播放/暂停(获取播放/暂停的状态)
playBtn.addEventListener('click', function(e) {
    if (video.paused) {
        //若当前暂停则播放
        video.play();
        iconCircle.classList.toggle('fa-pause-circle')
    } else {
        //若当前播放则暂停
        video.pause();
        iconCircle.classList.toggle('fa-pause-circle')
    }
    e.stopPropagation();
})

//2.总时间显示(在视频可以播放的时候(oncanplay)才获取总时间)
video.oncanplay = function() {
    //video.duration是以秒记
    var h = Math.floor(video.duration / 60 / 60);
    var m = Math.floor(video.duration / 60 % 60);
    var s = Math.floor(video.duration % 60);

    h = h <= 9 ? '0' + h : h;
    m = m <= 9 ? '0' + m : m;
    s = s <= 9 ? '0' + s : s;

    sum.innerHTML = h + ':' + m + ':' + s;
}

//vide.ontimeupdate当播放位置改变时就会触发
video.ontimeupdate = function() {
    //3.当前时间显示
    //currentTime指当前播放位置（以秒计）
    var h = Math.floor(video.currentTime / 60 / 60);
    var m = Math.floor(video.currentTime / 60 % 60);
    var s = Math.floor(video.currentTime % 60);

    h = h <= 9 ? '0' + h : h;
    m = m <= 9 ? '0' + m : m;
    s = s <= 9 ? '0' + s : s;

    current.innerHTML = h + ':' + m + ':' + s;

    //4.进度条的显示
    progressbar.style.width = video.currentTime / video.duration * 100 + '%';
}


//5.跳跃播放
progress.onclick = function(e) {
    var x = e.offsetX; //获取鼠标在进度条上移动的位置
    //根据比例关系设置当前时间
    video.currentTime = x / progress.offsetWidth * video.duration;
}

//6.全屏播放
fullscreen.onclick = function(e) {
    if (!document.webkitFullscreenElement) {
        //全屏显示
        //注意：全屏显示时会出现默认的视频控制器,需要通过css解决，并且同时需要提高自定义的控制器的层级
        video.webkitRequestFullScreen();
        iconFullScreen.classList.toggle('fa-compress')
    } else {
        //退出全屏
        document.webkitExitFullscreen();
        iconFullScreen.classList.toggle('fa-compress')
    }


}

//7.视频播放完毕作出提示
video.onended = function() {
    var t = 5;
    zhezao.style.display = 'block';
    var timer = setInterval(function() {
        zhezaoText.innerHTML = '视频已播放完毕,' + t + '秒后将重新播放';
        t--;
        if (t == 0) {
            clearInterval(timer);
            zhezao.style.display = 'none';
            zhezaoText.innerHTML = "";
            video.currentTime = 0;
            video.play();
        }
    }, 1000);
}

//8.播放视频过程中点击视频则暂停
video.onclick = function() {
    if (!video.paused) {
        zhezao.style.display = 'block';
        zhezaoImg.style.display = 'block';
        video.pause();
    }
}
zhezaoImg.onclick = function() {
    if (video.paused) {
        zhezao.style.display = 'none';
        zhezaoImg.style.display = 'none';
        video.play();
    }
}