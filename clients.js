"use strict";
var io = require('socket.io-client');
var socket = io('http://192.168.2.105:3000').connect();

// receive call from the host
socket.on('call', function(msg){
    console.log(msg);

});
