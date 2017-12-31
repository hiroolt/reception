"use strict";
var io = require('socket.io-client');
var socket = io('http://192.168.2.105:3000').connect();
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
      default:
        break;
    }
});
