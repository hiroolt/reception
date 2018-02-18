"use strict";
var io = require('socket.io-client');
var socket = io('http://172.20.10.6:3000').connect();
var sound = require('node-aplay');

// allow local file read
var fs = require('fs');

// receive call from the host
socket.on('call', function(msg){
    console.log(msg);
    new sound('assets/sounds/sample.wav').play();
});

// receive specific name from the host

socket.on('innovation', function(name){
    console.log(name);
    switch(name) {
      case "mori":
        new sound('assets/sounds/mori.wav').play();
        break;
      case "yokoo":
        new sound('assets/sounds/yokoo.wav').play();
        break;
      case "katou":
        new sound('assets/sounds/katou.wav').play();
        break;
      case "takashi":
        new sound('assets/sounds/takashi.wav').play();
        break;
      case "sunagawa":
        new sound('assets/sounds/sunagawa.wav').play();
        break;
      case "sugimura":
        new sound('assets/sounds/sugimura.wav').play();
        break;
      case "hosokawa":
        new sound('assets/sounds/hosokawa.wav').play();
        break;
      case "deshimaru":
        new sound('assets/sounds/deshimaru.wav').play();
        break;
      case "takemura":
        new sound('assets/sounds/takemura.wav').play();
        break;
      case "nishiumi":
        new sound('assets/sounds/nishiumi.wav').play();
        break;
      default:
        break;
    }
});
