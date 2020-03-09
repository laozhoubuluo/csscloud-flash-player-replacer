// ==UserScript==
// @name         csscloud flash 播放器替换
// @namespace    https://home.asec01.net/
// @version      0.2
// @description  将csscloud的flash播放器换为flvjs
// @author       Zhe Zhang
// @match        https://view.csslcloud.net/api/view/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.5.0/flv.min.js
// ==/UserScript==

(function() {
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return (false);
    }

    'use strict';
    console.log("zz csscloud script load");
    var livePlayer = $('#livePlayer');
    if (livePlayer.length==1) {
        //$(livePlayer).html('<iframe src="https://publicfiles.zhangzhe-tech.cn/csscloud-player/player.html?roomid=' + getQueryVariable("roomid") + '" height="100%" width="100%" frameBorder="0"></iframe>');
        $(livePlayer).html('<video id="videoElement" height="100%" width="100%" autoplay controls></video>');
    }
    window.onload = function () {
        console.log("zz csscloud script: winndow.onload");
        var roomId = getQueryVariable("roomid");
        if (roomId == false){

        }else{
            if (flvjs.isSupported()) {
                var videoElement = document.getElementById('videoElement');
                var flvPlayer = flvjs.createPlayer({
                    type: 'flv',
                    url: 'https://stream-ali1.csslcloud.net/src/' + roomId + '.flv'
                });
                flvPlayer.attachMediaElement(videoElement);
                flvPlayer.load();
                flvPlayer.play();
            }}
    }
})();
